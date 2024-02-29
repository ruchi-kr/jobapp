const mongoose = require("mongoose");

const Apply_JobSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email Id is required"],
    },
    phonenumber: {
      type: String,
      required: [true, "Phone Number  is required"],
    },
    workexperience: {
      type: Number,
      required:false
    },
    resume: {
      type: String,
      required: [true, "Resume required"],
    },
    
  },
  { timestamps: true }
);
const Apply_Job_Model = mongoose.model("Apply_Job_Model", Apply_JobSchema);

module.exports = Apply_Job_Model;