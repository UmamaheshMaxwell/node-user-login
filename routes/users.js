var express = require("express");
var router = express.Router();

router.get("/home", function(req, res){
	res.json({message: "hello"});
})

router.get("/register", function(req, res){
	res.json({message: "Registration", title: "Register"});
})


router.get("/login", function(req, res){
	res.json({title: "Login"});
})

router.post("/register", function(req, res){

	//Get Form Values
	var name = req.body.name
	var email = req.body.email
	var username = req.body.username
	var password = req.body.password
	var passwor2 = req.body.passwor2
	var name = req.body.name

	if(req.files.profileimage){
		console.log("uloading file")

		var profileImageOriginalName = req.files.profileimage.originalname;
		var profileImageName = req.files.profileimage.name
		var profileImageMime = req.files.profileimage.mimetype
		var profileImagePath = req.files.profileimage.path
		var profileImageExt = req.files.profileimage.extension
		var profileImageSize = req.files.profileimage.size
	}
	else{
		var profileimageName ="noimage.png"
	}

	// form Validation
	req.checkBody('name','Name field is required').notEmpty();
	req.checkBody('email','email field is required').notEmpty();
	req.checkBody('password','password field is required').notEmpty();
	req.checkBody('name','Name field is required').notEmpty();
	req.checkBody('name','Name field is required').notEmpty();
	req.checkBody('name','Name field is required').notEmpty();
})

module.exports = router;