// const httpStatus = require("http-status");
const Add_jobs_Model = require("../models/jobs_model")
const getData = async (req, res) => {
    const data = await Add_jobs_Model.find({});
    res.status(200).json({msg:'Getting data'})
    console.log(data);
  };
  
  const postData = async (req,res)=>{
    console.log("body:", req.body)
    const data = await Add_jobs_Model.create({
         title:req.body.title,
         companyname:req.body.companyname,
         skills:req.body.skills,
         salary:req.body.salary,
         jobposted:req.body.jobposted,
         numberofvaccancies:req.body.numberofvaccancies,
         location:req.body.location,
         experience:req.body.experience,
         description:req.body.description,
         aboutcompany:req.body.aboutcompany,
         
    })
    res.status(200).json({msg:'Added Successfully'})
    console.log("data:",data)
  };

  module.exports =  { getData, postData}