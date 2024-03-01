const express = require("express")
const { applyJob } = require("../controllers/add_jobs_controllers")
const router = express.Router()
const upload = require('./multer')
const protectedResource = require("../middleware/protectedResource");
const Apply_Job_Model = require("../models/apply_job_model")


router.post('/',protectedResource,upload.single('resume'), applyJob)

router.get('/applyjob', async (req,res)=>{
    const data = await Apply_Job_Model.find({});
    const total_job_apply = data.length;
    console.log("data",data);
    return res.status(200).json({data, total: total_job_apply});
})

module.exports = router