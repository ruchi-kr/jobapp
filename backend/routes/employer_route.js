const express = require('express');
const router = express.Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const EmployerModel = mongoose.model("EmployerModel");
const { JWT_SECRET } = require('../config');

router.post("/employerRegister", (req, res) => {
    const { fullName,phoneNumber, email, password } = req.body;
    if (!fullName || !phoneNumber || !password || !email) {
        return res.status(400).send({ error: "One or more mandatory fields are empty" });
    }
    EmployerModel.findOne({ email: email })
        .then((userInDB) => {
            if (userInDB) {
                return res.status(500).send({ error: "Employer with this email already registered" });
            }
            bcryptjs.hash(password, 16)
                .then((hashedPassword) => {
                    const user = new EmployerModel({ fullName,phoneNumber, email, password: hashedPassword});
                    user.save()
                        .then((newUser) => {
                            res.status(201).send({ result: "Employer Registered Successfully!" });
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

router.post("/employerLogin", (req, res) => {
    const { email, password } = req.body;
    if (!password || !email) {
        return res.status(400).send({ error: "One or more mandatory fields are empty" });
    }
    EmployerModel.findOne({ email: email })
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
    EmployerModel.findOne({ email: email })
        .then((userInDB) => {
            if (!userInDB) {
                return res.send({ Status: "User does not exist" })
            }
            const token = jwt.sign({_id: userInDB._id }, JWT_SECRET, { expiresIn: "2d" })

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


router.get("/total_employer", async (req, res) => {
    try {
        const data = await EmployerModel.find({});
        const total_employer = data.length;
        return res.status(200).send({total:total_employer});
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;