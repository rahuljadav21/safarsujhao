const {
    login,
    register,
    update,
    logOut,
    getUser,
} = require("./../controllers/user");

const router = require("express").Router();
router.post("/login", login);
router.put("/update/:id", update);
router.post("/register", register);
router.get("/logout/:id", logOut);
router.get("/getuser/:userId",getUser);

module.exports = router;
