const User = require("../models/user");
let uuidv1 = require('uuidv1')

console.log(uuidv1())


exports.signup = (req, res) => {
    console.log("req.body", req.body);
    const user = new User(req.body);
    user.save((err, user) => {
        if(err) {
            return res.status(400).json({
                err
            });
        }
        res.json({
            user
        });
    });
}; 
