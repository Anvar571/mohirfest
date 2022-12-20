const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Users = require("../models/UserModel");
const Validation = require("../modules/validation");


const AuthCtrl = {
    register: async (req,res) => {
        try {
            const {fullname, username, email, password, cf_pass} = req.body;
            const newUserName = username.toLowerCase().replace(/ /g, " ");

            const user_name = await Users.findOne({username: newUserName});
            if (user_name) return res.status(400).json({msg: "this username already registered"})

            const newEmail = await Validation.emailValidation({email})
            const user_email = await Users.findOne({email: newEmail.email})

            if (user_email) return res.status(400).json({msg: "this email already registered"})

            if (password.length < 8) return res.status(400).json({msg: "Password must be at least 8 characters long"})

            const hashPassword = bcrypt.hashSync(password, 12);

            const newUser = new Users({
                fullname, username: newUserName, email, password: hashPassword,
            })
            
            if (password !== cf_pass) return res.status(400).json({msg: "both password must be enouph"})

            const refresh_token = createRefreshToken({id: newUser._id})
            const access_token = createAccessToken({id: newUser._id})

            res.cookie("refreshtoken", refresh_token, {
                httpOnly: true,
                path: "/api/refresh_token",
                maxAge: 30*24*60*60*1000,
            })

            await newUser.save();

            res.status(201).json({
                msg: "Register success",
                access_token,
                user: {
                    ...newUser._doc,
                    password: ""
                }
            })
        } catch (error) {
            return res.status(400).json({msg: error.message})
        }
    },
    login: async (req, res) => {
        try {
            const {email, password} = req.body;

            const user = await Users.findOne({email})
            .populate("followers following", "avatar fullname username")

            if (!user) return res.status(400).json({msg: "This email does not exist or password"})

            const checkPass = bcrypt.compareSync(password, user.password)
            if (!checkPass) return res.status(400).json({msg: "This email does not exist or password"})

            const refresh_token = createRefreshToken({id: user._id})
            const access_token = createAccessToken({id: user._id})

            res.cookie("refreshtoken", refresh_token, {
                httpOnly: true,
                path: "/api/refresh_token",
                maxAge: 30*24*60*60*1000
            })

            res.status(201).json({
                msg: "Login successfully",
                access_token,
                user: {
                    ...user._doc,
                    password: ""
                }
            })

        } catch (error) {
            return res.status(400).json({msg: error.message})
        }
    },
    logout: async (req, res) => {
        try {
            res.clearCookie("refreshtoken", {
                path: "/api/refresh_token"
            })
            res.status(201).json({msg: "Logged out"})
        } catch (error) {
            return res.status(400).json({msg: error.message})
        }
    },
    // bu refresh tokenni aniqlash uchun yordam beradi va user ma'lumotlarini qaytaradi
    generateAccessToken: async (req, res) => {
        try {
            const rf_token = req.cookies.refreshtoken;
            if (!rf_token) return res.status(400).json({msg: "Please now login"})

            jwt.verify(rf_token, process.env.REFRESH_TOKEN, async (err, data) => {
                if (err) return res.status(400).json({msg: "Please now login"}) 

                const user = await Users.findById(data.id).select("-password")
                .populate("followers following", "avatar fullname username")

                const access_token = createAccessToken({id: data.id})

                res.json({
                    access_token,
                    user
                })
            });

        } catch (error) {
            return res.status(400).json({msg: error.message})
        }
    },
    userLength: async (req, res) => {
        try {
            const resUser = await Users.find({}).select("username")
            res.json(resUser)
        } catch (error) {
            return res.status(400).json({msg: error.message})
        }
    }
}

function createRefreshToken (payload) {
    return jwt.sign(payload, process.env.REFRESH_TOKEN, {expiresIn: '1d'})
}

function createAccessToken (payload) {
    return jwt.sign(payload, process.env.ACCESS_TOKEN, {expiresIn: "30d"})
}

module.exports = AuthCtrl

