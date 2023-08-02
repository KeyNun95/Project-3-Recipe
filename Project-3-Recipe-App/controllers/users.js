const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

//helps generate random numbers for filename so every file is unique
//uuid is the name of the module, and uuidv4 is the name of the funciton we are importing
const { v4: uuid4 } = require('uuid');
//import the s3 constructor
const S3 = require('aws-sdk/clients/s3');
//initialize the S3 constructor so we have an object to talk to aws
const s3 = new S3();
const BUCKET_NAME = process.env.BUCKET_NAME

module.exports = {
  signup,
  login
};
//this is server side code
async function signup(req, res) {
  console.log(req.body, req.file, 'req.body', 'req.file');
  //this will check if there is a file and send back an error if empty
  if(!req.file) return res.status(400).json({error: "please submit photo"});
  //this will be the location where our file is stored on aws s3
  const filePath = `recipeapp/${uuidv4()}-${req.file.originalname}`
  //create the obect we want to send to aws
  const params = {Bucket: BUCKET_NAME, Key: filePath, Body: req.file.buffer}
  //function happens after we get a response from aws
  s3.upload(params, async function(err, data){
    if(err){
      console.log('check error')
      console.log(err, '<--- error from aws. keys might not be correct')
      res.status(400).json({error: 'error from aws, check terminal'})
    }
    //if s3 upload was successful, create the user and store the file location
    req.body.photoUrl = data.Location; //data.location is what we get back from aws where our file is stored
    const user = new User(req.body);
    try {
      await user.save();
      const token = createJWT(user);
      res.json({ token }); //step 3 in the flow token-based authentication chart
    } catch (err) {
      // Probably a duplicate email
      res.status(400).json(err);
    }
  })
}

async function login(req, res) {
 
  try {
    const user = await User.findOne({email: req.body.email});
   
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.password, (err, isMatch) => {
      
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}
