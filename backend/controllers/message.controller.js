import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage=async (req,res)=>{
    try {
        const {message} =req.body;
        const {id:receiverId} =req.params;
        const senderId=req.user._id;

        let conversation = await Conversation.findOne({
            participants:{$all:[senderId,receiverId]}
        });

        if(!conversation){
            conversation=await Conversation.create({
                participants:[senderId, receiverId],
            })
        }

        const newMessage = new Message({
            senderId:senderId,
            receiverId:receiverId,
            message:message
        });

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        // later will socket.io functionality here

        // await conversation.save();
        // await newMessage.save();

        // this will run in parallel
        await Promise.all([conversation.save(),await newMessage.save()]);

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Message can't be sent",{message:error.message});
        res.status(500).json({error:"Internal Server Error"});
    }
};

export const getMessages=async (req,res)=>{
    try {
        const {id:userToChatId}=req.params;
        const senderId=req.user._id;

        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]}
        }).populate("messages");   // not referenceto messages, but give the actual array msgs objects to all the reference

        if(!conversation)
            return res.status(200).json({});

        const messages=conversation.messages;

        res.status(200).json(messages);

    } catch (error) {
        console.log("Can't get messages",{message:error.message});
        res.status(500).json({error:"Internal Server Error"});
    }
}