const {
    login,
    register,
    logOut,
} = require("./../controllers/user");

const router = require("express").Router();
router.post("/login", login);
router.post("/register", register);
router.get("/logout/:id", logOut);

module.exports = router;
