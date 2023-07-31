const User = require("./../models/user");
const bcrypt = require("bcrypt");

module.exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user)
            return res.json({ msg: "Incorrect Username or Password", status: false });
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid)
            return res.json({ msg: "Incorrect Username or Password", status: false });
        delete user.password;

        return res.json({ status: true, user });
    } catch (ex) {
        next(ex);
    }
};

module.exports.register = async (req, res, next) => {
    try {
        const { username, firstname, lastname, email, mobile, address, password, } = req.body;

        // check if already used.
        const usernameCheck = await User.findOne({ username });
        if (usernameCheck)
            return res.json({ msg: "Username already used.", status: false });
        const emailCheck = await User.findOne({ email });
        if (emailCheck)
            return res.json({ msg: "Email already used.", status: false });

        // encrypt password
        const hashedPassword = await bcrypt.hash(password, 10);

        // send data
        const user = await User.create({
            username,
            firstname,
            lastname,
            email,
            mobile,
            password: hashedPassword,
            address,
            tripPlans: [],
            favouritePlaces: []
        });

        delete user.password;
        return res.json({ status: true, user });
    } catch (ex) {
        next(ex);
    }
};

module.exports.logOut = async (req, res, next) => {
    try {
        if (!req.params.id)
            return res.json({ msg: "User id is required " });
        return res.status(200).send();
    } catch (ex) {
        next(ex);
    }
};

module.exports.update = async (req, res, next) => {
    try {
        if (!req.params.id) return res.status(400).json({ msg: "User id is required " });

        const { firstname, lastname, email, mobile, address } = req.body;

        const user = await User.findByIdAndUpdate(req.params.id, { firstname, lastname, email, mobile, address }, { new: true });

        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        res.status(200).json(user);
    } catch (ex) {
        console.error(ex);
        res.status(500).json({ msg: "Server error" });
    }
};


module.exports.getUser = async(req,res,next) =>{
    try {
        const user = await User.findById(req.params.userId).populate({
            path: 'tripPlans'
        });
        res.status(200).send(user);
    } catch (error) {
        next(error)
    }
}
