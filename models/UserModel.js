const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 8,
    },
    avatar: {
        type: String,
        default: 'https://picsum.photos/300/400',
    },

    followers: [{type: mongoose.Types.ObjectId, ref: "users"}],
    following: [{type: mongoose.Types.ObjectId, ref: "users"}],

    gender: {
        type: String,
        default: 'male'
    },
    mobile: {
        type: String,
        default: ""
    },
    // about user
    story: {
        type: String,
        default: "",
        maxlength: 200,
    },
    role: {type: String, default: "user"},
    website:{type: String, default: ""}
}, {
    timestamps: true
})

module.exports = mongoose.model("users", UserSchema)
