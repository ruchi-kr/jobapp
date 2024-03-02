// import mongoose from "mongoose";
const mongoose = require("mongoose");

const Add_JobsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    companyname: {
      type: String,
      required: [true, "Company Name is required"],
    },
    skills: {
      type: String,
      require: [true, "Skills are required"],
    },   
    salary: {
      type: String,
      require: [false],
    },
    jobposted: {
      type: Date,
      require: [true, "Date is required"],
    },
    numberofvaccancies: {
      type: Number,
      require: false,
    },
    location: {
      type: String,
      require: [true, "Location is required"],
    },
    experience: {
      type: String,
      require: true,
    },
    description: {
      type: String
      // require: [true, "Description is required"],
    },
    aboutJobType: {
      type: String,
      require: false,
    },
  },
  { timestamps: true }
);
const Add_jobs_Model = mongoose.model("Add_jobs_Model", Add_JobsSchema);

module.exports = Add_jobs_Model;