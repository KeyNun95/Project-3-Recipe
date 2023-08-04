const Post = require("../models/post");

const { v4: uuidv4 } = require("uuid");
const S3 = require("aws-sdk/clients/s3");
const s3 = new S3();

const BUCKET_NAME = process.env.BUCKET_NAME;

module.exports = {
    create,
    index
};

function create(req, res){
    console.log(req.body, req.file, "< req.body, req.file in posts/api create");
    if (!req.file) return res.status(400).json({error: "Please submit photo"});
    const filePath = `recipeapp/${uuidv4()}-${req.file.originalname}`;
    const params = { Bucket: BUCKET_NAME, Key: filePath, Body: req.file.buffer };

    s3.upload(params, async function(err, data){
        if(err){
            console.log('check error')
            console.log(err, '<--- error from aws. keys might not be correct in post/controllers')
            res.status(400).json({error: 'error from aws, check terminal'})
        }
        try{
            const post = await Post.create({
                user: req.user,
                recipeTitle: req.body.recipeTitle,
                ingredientList: req.body.ingredientList,
                direction: req.body.direction,
                photoUrl: data.Location,   
            });
            await post.populate("user");
            res.status(201).json({ data: post });
        }catch(err){
            res.status(400).json({ error: err })
        }
    });
}

async function index(req, res){
    try{
        const posts = await Post.find({}).populate("user").exec();
        res.render(200).json({posts});
    }catch(err){}
}