// createChat
const chatModel = require ("../Models/chatModel")
// getUserChats 
// findChat

const createChat = async(req, res) =>{
    const { firstId, secondId } = req.body

    try{
        const chat = await chatModel.findOne({
            members: {$all: [  firstId, secondId ]}
        })
        if(chat) return res.status(200).json(chat);

        const newChat = new chatModel({
            
        })
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}