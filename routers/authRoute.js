const AuthCtrl = require("../controllers/AuthCtrl")

const router = require("express").Router();

router.post("/register", AuthCtrl.register);

router.post("/login", AuthCtrl.login);

router.post("/logout", AuthCtrl.logout);

router.post("/refresh_token", AuthCtrl.generateAccessToken);

router.get("/lengthuser", AuthCtrl.userLength)

module.exports  = router
