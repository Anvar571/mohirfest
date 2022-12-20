const mongoose = require("mongoose");

const TaskModel = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    ball: {
        type: String,
        required: true
    },
    category: {
        type: String,
        default: "it"
    },
    content: {
        type: String,
        required: true,
    },
    images: {
        type: Array, 
        default: "https://picsum.photos/700/600?random?=23"
    },
    user: {
        type: mongoose.Types.ObjectId, ref: "users"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("tasks", TaskModel)