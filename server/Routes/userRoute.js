const express = require("express");

const router = express.Router();

// registration route
router.post("/register", (req, res) =>{
    res.send("Register");
});

module.exports = router;