const express = require("express");
const router = express.Router();
const usersCtrl = require("../controllers/users");
//required for file uploads
const multer = require('multer');
const upload = multer()

/*---------- Public Routes ----------*/
// HTTP request
// POST /api/users/signup
//the "photo" in upload.single is the key name from our formdata in signupPage
router.post("/signup",  upload.single('photo'), usersCtrl.signup); //make post request to send informationa to server and create user
router.post("/login", usersCtrl.login);
router.get("/:username", usersCtrl.profile);
/*---------- Protected Routes ----------*/

module.exports = router;



/*---------- Protected Routes ----------*/



