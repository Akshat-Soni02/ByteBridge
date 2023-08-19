const ErrorHandler = require("../Utils/errorHandler");
const User = require("../Models/userModel.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Chat = require("../Models/chatModel.js");
const ChatList = require("../Models/chatListModel.js");

//Insert a chat => /api/v1/chatList
exports.insertChat = catchAsyncErrors(async (req, res, next) => {
    const { userId, chatId, lastMessage, date, status } = req.body;
    const chatList = await ChatList.create({
        userId,
        chatId,
        lastMessage,
        date,
        status,
    });
    res.status(200).json({
        success: true,
        chatList,
    });
});