const User = require("../models/user");
let uuidv1 = require('uuidv1');
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const { errorHandler } = require("../helpers/dbErrorHandler");

console.log(uuidv1())


exports.signup = (req, res) => {
    console.log("req.body", req.body);
    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                err
            });
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({
            user
        });
    });
};

exports.signin = (req, res) => {
    const { email, password } = req.body
    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                err: "User with that email does not exist. Please signup"
            });
        }

        // creat authenticate method in user model
        if (!user.authenicate(password)) {
            return res.status(401).json({
                error: "Email and password dont match"
            });
        }
        // generate a signed token with user id and secret
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)
        // PERSIST THE TOEKEN T IN COOKIE 
        res.cookie("t", token, { expire: new Date() + 9999 })
        // return response with user and token to frontend client
        const { _id, name, email, role } = user
        return res.json({ token, user: { _id, email, name, role } })
    });

};

exports.signout = (req, res) => {
    res.clearCookie("t")
    res.json({ message: "Signout success" })
};

exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"], // added later
    userProperty: "auth",
});
