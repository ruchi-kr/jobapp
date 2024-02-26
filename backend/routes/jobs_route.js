// const express = require('express');
// const router = express.Router();
// const mongoose = require("mongoose");
// const JobsModel = mongoose.model("JobsModel");
// const protectedRoute = require("../middleware/protectedResource");

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


// //top 5 sales only from logged in user
// // router.get("/topsales", protectedRoute,async (req, res) => {
// //     try {
// //         const sale = await SalesModel.find().sort({ amount: -1 }).limit(5);
// //         res.status(200).send(sale);
// //     } catch (error) {
// //         console.log(error);
// //     }

// // });

// //total revenue of the day 
// // const today=new Date();
// // today.setHours(0,0,0,0);
// // const todayEnd=new Date();
// // todayEnd.setHours(23,59,59,999);

// // router.get("/totalrev", protectedRoute,async (req, res) => {
// //     try {
// //         const result=await SalesModel.aggregate([
// //             {
// //                 $match: {
// //                     createdAt:{$gte: today,$lte: todayEnd},
// //                 },
// //             },
// //             {
// //                 $group:{
// //                     _id:null,
// //                     amount:{$sum:"$amount"},
// //                 },
// //             } ,
// //         ]);
// //         return res.send(result);
// //     } catch (error) {
// //     console.log(error);
// //     res.status(500).send({ error: "Internal Server Error" });
        
// //     }
// // })


// module.exports = router;


const express = require("express")
const { getData, postData } = require("../controllers/add_jobs_controllers")
const router = express.Router()

router.get('/', getData)


router.post('/',postData)

module.exports = router;