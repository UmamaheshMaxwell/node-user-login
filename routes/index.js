var express = require("express");
var router = express.Router();

router.get("/home", function(req, res){
	res.json({message: "hello"});
})

module.exports = router;