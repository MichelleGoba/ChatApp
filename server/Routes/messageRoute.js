const express = require("express");

const router = express.Router();

router.post("/", createMessage);


module.exports = router;
