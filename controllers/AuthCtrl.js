const UserModel = require("../models/UserModel");

const  AuthCtrl = {
    register: async (req,res) => {
        const {fullname, username, avatar, } = req.body;
    },

    login: async (req, res) => {

    },
    logout: async (req, res) => {

    },
    refresh_token: async (req,res) => {

    }
}

module.exports = AuthCtrl