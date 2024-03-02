const express = require("express")
const { getData, postData, deleteData, patchData } = require("../controllers/add_jobs_controllers")
const Add_jobs_Model = require("../models/jobs_model");
const employerprotectedResource = require("../middleware/employerprotectedResource");
const router = express.Router()

//add jobs only from logged in user

router.get('/', getData)
router.post('/',employerprotectedResource,postData)
router.delete('/:id',employerprotectedResource,deleteData)
router.patch('/:id',employerprotectedResource,patchData)


// top jobs only based on salary
router.get("/topjobs", async (req, res) => {
    try {
        const topjob = await Add_jobs_Model.find().sort({ salary: -1 }).limit(5);
        return res.status(200).send(topjob);
    } catch (error) {
        console.log(error);
    }

});

//for job type
router.get('/aboutjobtype',async (req,res)=>{
    try {
        const data = await Add_jobs_Model.find({aboutJobType:'tech'});
        const total_tech_jobs = data.length;
        console.log("data",data);
        console.log("total:",total_tech_jobs)
        return res.status(200).json({data, total: total_tech_jobs});
      }
      catch (error) {
        console.log(error);
      }
})


module.exports = router;