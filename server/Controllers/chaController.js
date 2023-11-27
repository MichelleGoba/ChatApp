// createChat
// getUserChats
// findChat

// createChat
const chatModel = require("../Models/chatModel");

const createChat = async (req, res) => {
  const { firstId, secondId } = req.body;

  try {
    const chat = await chatModel.findOne({
      members: { $all: [firstId, secondId] },
    });
    if (chat) return res.status(200).json(chat);

    const newChat = new chatModel({
      members: [firstId, secondId],
    });

    // save chat  the database and send it to front end
    const response = await newChat.save();

    res.staus(200).jsn(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// findUserChats
const findUserChats = async (req, res) => {
  const userId = req.params.userId;

  try {
    const chats = await chatModel.find({
      members: { $in: [userId] },
    });

    // send chat to fron end
    res.status(200).json(chats);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// find chat
const findChat = async (req, res) => {
    const { firstId, secondId } = req.params
  
    try {
      const chat = await chatModel.find({
        members: { $all: [firstId, secondId] },
      });
  
      // send chat to fron end
      res.status(200).json(chat);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };
