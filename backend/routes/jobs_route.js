// const mongoose = require("mongoose");
const protectedRoute = require("../middleware/protectedResource");

const express = require("express")
const { getData, postData, deleteData, patchData } = require("../controllers/add_jobs_controllers")
const Add_jobs_Model = require("../models/jobs_model")
const router = express.Router()

//add jobs only from logged in user

router.get('/', getData)
router.post('/',postData)
router.delete('/:id',deleteData)
router.patch('/:id',patchData)


// //add sales only from logged in user
// router.post("/addjob", protectedRoute, (req, res) => {
    
//     const { productName, quantity, amount } = req.body;
//     if (!productName || !quantity || !amount) {
//         return res.status(400).send({ error: "One or more mandatory fields are empty" });
//     }
//     req.user.password = undefined;
//     const addObj = new JobsModel({ productName: productName, quantity: quantity, amount: amount, author: req.user });
//     addObj.save()
//         .then((newJob) => {
//             res.status(201).send({ job: newJob });
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// });


// top 5 sales only from logged in user based on salary
router.get("/topjobs", protectedRoute,async (req, res) => {
    try {
        const topjob = await Add_jobs_Model.find().sort({ salary: -1 }).limit(5);
        res.status(200).send(topjob);
    } catch (error) {
        console.log(error);
    }

});

module.exports = router;