const messageModel = require("../Models/messageModel")

// createMessage

const createMessage = async(req, res) => {
    const {chatId, senderId, text} = req.body

    const message = new messageModel({
        chatId, senderId, text
    })
    try{
        const response = await message.save();

        // send to client
        res.status(200).json(response);
    }catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};


// getgMessages
const getgMessages = async(req, res) =>{
    const {chatId} = req.params;

    // find messages
    try{
        const messages = await messageModel.find({chatId})
        res.status(200).json(messages);
    }catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
module.exports = {createMessage, getgMessages};