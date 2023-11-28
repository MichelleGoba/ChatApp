const express = require ("express");
const { createMessage, getgMessages } = require("../Controllers/messageController");


const router = express.Router();

// create routes
router.post("/", createMessage);
router.get("/:chatId", getgMessages);


module.exports = router
