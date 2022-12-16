const router = require("express").Router()
const AuthCtrl = require("../controllers/AuthCtrl");

router.post("/register", AuthCtrl.register);

router.post("/login", AuthCtrl.login);

router.post("/logout", AuthCtrl.logout);

router.post("/refresh_token", AuthCtrl.refresh_token);


module.exports = router