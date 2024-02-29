const express = require('express');
const router = express.Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const UserModel = mongoose.model("UserModel");
const { JWT_SECRET } = require('../config');

router.post("/register", (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !password || !email) {
        return res.status(400).send({ error: "One or more mandatory fields are empty" });
    }
    UserModel.findOne({ email: email })
        .then((userInDB) => {
            if (userInDB) {
                return res.status(500).send({ error: "User with this email already registered" });
            }
            bcryptjs.hash(password, 16)
                .then((hashedPassword) => {
                    const user = new UserModel({ firstName, lastName, email, password: hashedPassword });
                    user.save()
                        .then((newUser) => {
                            res.status(201).send({ result: "User Registered Successfully!" });
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }).catch((err) => {
                    console.log(err);
                })
        })
        .catch((err) => {
            console.log(err);
        })
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (!password || !email) {
        return res.status(400).send({ error: "One or more mandatory fields are empty" });
    }
    UserModel.findOne({ email: email })
        .then((userInDB) => {
            if (!userInDB) {
                return res.status(401).send({ error: "This email is not registered with us 🤷‍♂️ " });
            }
            bcryptjs.compare(password, userInDB.password)
                .then((didMatch) => {
                    if (didMatch) {
                        const jwtToken = jwt.sign({ _id: userInDB._id }, JWT_SECRET);
                        const userInfo = { "_id": userInDB._id, "email": userInDB.email };
                        res.status(200).send({ result: { token: jwtToken, user: userInfo } });
                    } else {
                        return res.status(401).send({ error: "Oops! Wrong Password 🙃" });
                    }
                }).catch((err) => {
                    console.log(err);
                })
        })
        .catch((err) => {
            console.log(err);
        })
});

router.post("/forgotpassword", (req, res) => {

    const { email } = req.body;
    UserModel.findOne({ email: email })
        .then((userInDB) => {
            if (!userInDB) {
                return res.send({ Status: "User does not exist" })
            }
            const token = jwt.sign({ _id: userInDB._id }, JWT_SECRET, { expiresIn: "2d" })

            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'ruchi.kumari63@gmail.com',
                    pass: 'ofer dhwe evrz enzk'
                }
            });

            let mailOptions = {
                from: req.body,
                to: 'ruchi.kumari63@gmail.com',
                subject: 'Reset your password',
                text: `http://localhost:5000/resetpassword/${userInDB._id}/${token}`
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                    res.send({ Status: "Email sent" })
                }
            });
        })
        .catch((err) => {
            console.log(err);
        })

})

router.get('/allusers', async (req, res) => {
    const data = await UserModel.find({})
        .then((users) => {
            // res.send(users)
            const total_users = data.length;
            console.log("data", data);
            return res.status(200).json({ data, total: total_users });
        })
        .catch((err) => {
            console.log(err);
        })
})

module.exports = router;