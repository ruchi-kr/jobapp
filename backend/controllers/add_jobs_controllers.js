// const httpStatus = require("http-status");
const Add_jobs_Model = require("../models/jobs_model")
const Apply_Job_Model = require("../models/apply_job_model")
const getData = async (req, res) => {
  try {
    const data = await Add_jobs_Model.find({});
    console.log(data);
    return res.status(200).send(data);
   
  } catch (error) {
    console.log(error);
  }

};

const postData = async (req, res) => {
  console.log("body:", req.body)
  const data = await Add_jobs_Model.create({
    title: req.body.title,
    companyname: req.body.companyname,
    skills: req.body.skills,
    salary: req.body.salary,
    jobposted: req.body.jobposted,
    numberofvaccancies: req.body.numberofvaccancies,
    location: req.body.location,
    experience: req.body.experience,
    description: req.body.description,
    aboutcompany: req.body.aboutcompany,

  })
  res.status(200).json({ msg: 'Added Successfully' })
  console.log("data:", data)
};

const deleteData = async (req,res)=>{
  const id = req.params.id
   await Add_jobs_Model.findByIdAndDelete(id);
   res.status(200).json({msg:'Deleted successfully',status:true})
};

const patchData = async (req,res) => {
  const id = req.params.id
  await Add_jobs_Model.findByIdAndUpdate(id,req.body)
  res.status(200).json({msg:'Updated successfully',status:true})

}

const applyJob = async (req, res) => {
  console.log("body:", req.file);
  const data = await Apply_Job_Model.create(req.file);
  res.status(200).json({ msg: "Added Successfully" });
  console.log("data:", data);
};

module.exports = { getData, postData, deleteData, patchData, applyJob};