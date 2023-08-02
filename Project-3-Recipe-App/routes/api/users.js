const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/users");

/*---------- Public Routes ----------*/
// HTTP request
// POST /api/users/signup
router.post("/signup",  usersCtrl.signup); //make post request to send informationa to server and create user
router.post("/login", usersCtrl.login);

/*---------- Protected Routes ----------*/

module.exports = router;



/*---------- Protected Routes ----------*/



