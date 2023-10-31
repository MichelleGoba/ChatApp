const express = require("express");
const { registerUser } = require("../Controllers/userController");
const router = express.Router();

// registration route
router.post("/register", registerUser);

module.exports = router;