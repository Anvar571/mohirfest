const Validation = require("../modules/validation");
const TaskModel = require("../models/TaskModel");

const TaskCrtl = {
    createTask: async (req, res) => {
        try {
            const {title, content, ball, category, images} = await Validation.taskValidation(req.body);
            const newTask = new TaskModel({
                title: title.toLowerCase(), 
                content, category, ball,
                images, 
                // user: req.user._id
            })

            await newTask.save();

            res.status(200).json({
                msg: "Add Task success",
                newTask: {
                    ...newTask._doc,
                    user: req.user
                }
            })

        } catch (error) {
            console.log("err");
            return res.status(400).json({msg: error.message})
        }
    },

    getTask: async (req, res) => {
        try {
            const tasks = await TaskModel.find({})
            .select("title content ball category");
            res.status(200).json({
                tasks
            })
        } catch (error) {
            return res.status(400).json({msg: error.message})
        }
    },

    updateTask: async (req, res) => {
        try {
            const {title, content, ball, category} = await Validation.taskValidation(req.body)

            const Task = await TaskModel.findOneAndUpdate({_id: req.params.id}, {
                title, content, ball, category
            })
            res.status(200).json({
                msg: "Update success task",
                Task
            })
        } catch (error) {
            return res.status(400).json({msg: error.message})
        }
    },
    searchTask: async(req, res) => {
        try {
            const task = await TaskModel.find({title: {$regex: req.query.title}})
            .select("title ball category content")
           
            res.status(200).json({
                task
            })
        } catch (error) {
            return res.status(400).json({msg: error.message})
        }
    },
    deleteTask:async(req, res) => {
        try {
            const task = await TaskModel.findOneAndDelete({_id: req.params.id})
            res.json({
                msg: "Delete task successfull",
                task
            })
        } catch (error) {
            return res.status(400).json({msg: error.message})
        }
    },
    getByTask: async (req, res) => {
        try {
            const task = await TaskModel.find({category: req.params.id, _id: req.params.taskid})
            .select("title ball category content images")
            
            if (!task) return res.status(400).json({ msg: "task does not exist" })

            res.json({ task })
        } catch (error) {
            return res.status(400).json({msg: error.message})
        }
    }
}

module.exports = TaskCrtl