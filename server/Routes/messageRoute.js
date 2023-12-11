const express = require("express");
const { getMessages } = require("../Controllers/messageController");

const router = express.Router();

router.post("/", createMessage);
router.get("/:chatid", getMessages);


module.exports = router;
