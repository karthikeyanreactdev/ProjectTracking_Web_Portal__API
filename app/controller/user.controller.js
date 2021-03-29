const jwt = require("jsonwebtoken");
const userRoute = require("../model/user.model.js");


// this function handles login request and response
exports.login = async (req, res) => {
    const {
        username,
        password
    } = req.body;

    try {
        const users = await userRoute.Userlogin(username);
        if (users.length > 0) {
            if (users[0].password === password) {
                const userdata = {
                    name: users[0].name,
                    role: users[0].role
                }
                var token = jwt.sign({
                    userdata
                }, 'supersecret', {
                    expiresIn: 86400, // expires in 24 hours
                })
                res.status(200).send({
                    message: "Logged in success",
                    data: userdata,
                    token: token,
                });
            } else {
                res.status(406).send({
                    message: "Password doesn't not match."
                });
            }
        } else {
            res.status(404).send({
                message: "User Name not found."
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Login Failure Due to Error : " + err
        });
    }
};