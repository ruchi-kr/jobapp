const Add_jobs_Model = require("../models/jobs_model")
const Apply_Job_Model = require("../models/apply_job_model")

const getData = async (req, res) => {
  try {
    const data = await Add_jobs_Model.find({});
    const total_employer = data.length;
    console.log("data",data);
    return res.status(200).json({data, total: total_employer});
  }
  catch (error) {
    console.log(error);
  }
}
const postData = async (req, res) => {
  try {
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
      aboutJobType: req.body.aboutJobType,
    })
    res.status(200).json({ msg: 'Added Successfully' })
    console.log("data:", data)
  } catch (error) {
    console.log(error);
    
  }
 
};

const deleteData = async (req, res) => {
  try {
    const id = req.params.id
    await Add_jobs_Model.findByIdAndDelete(id);
    res.status(200).json({ msg: 'Deleted successfully', status: true })
  } catch (error) {
    console.log(error);
  }

};

const patchData = async (req, res) => {
  try {
    const id = req.params.id
    await Add_jobs_Model.findByIdAndUpdate(id, req.body)
    res.status(200).json({ msg: 'Updated successfully', status: true });
  } catch (error) {
    console.log(error);
  }


}

const applyJob = async (req, res) => {
  try {
    console.log("body:", req.body);
    const data = await Apply_Job_Model.create(req.body);
    res.status(200).json({ msg: "Added Successfully" });
    console.log("data:", data);
  } catch (error) {
    console.log(error);
    res.send(message.error);
  }

};

module.exports = { getData, postData, deleteData, patchData, applyJob,};