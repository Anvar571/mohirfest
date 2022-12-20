const router = require("express").Router();
const auth = require("../middleware/auth");
const TaskCrtl = require("../controllers/TaskCtrl");

router.route("/topshiriqlar/task")
    .get(auth, TaskCrtl.getTask)
    .post(auth, TaskCrtl.createTask)

router.get("/topshiriqlar/search", auth, TaskCrtl.searchTask)

router.get("/topshiriqlar/:id", auth, TaskCrtl.getByTask);

router.get("/topshiriqlar/:id/:taskid", auth, TaskCrtl.getByTask);



router.route("/topshiriqlar/task/:id")
    .patch(auth, TaskCrtl.updateTask)
    .delete(auth, TaskCrtl.deleteTask)


module.exports = router
