import MaterialTable from "@material-table/core";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import { API_BASE_URL } from '../config';
import {Dialog,DialogActions,DialogContent} from "@mui/material";
import Swal from 'sweetalert2';

export default function DisplayJob() {

  const CONFIG_OBJ = {                                         //config object
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("employertoken")
    }
  }

  let navigate = useNavigate();

  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [jobId, setJobId] = useState("");

  const [title, setTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [skills, setSkills] = useState("");
  const [salary, setSalary] = useState("");
  const [jobPosted, setJobPosted] = useState("");
  const [numberOfVaccancies, setNumberOfVaccancies] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");

  const fetchAllData = async () => {
    let response = await axios.get(`${API_BASE_URL}/addjob`);
    console.log("response:", response);
    setData(response.data.data);
  };
  useEffect(function () {
    fetchAllData();
  }, []);

  console.log("data:", data);

  const handleOpen = (rowData) => {
    setOpen(true);
    setTitle(rowData.title);
    setCompanyName(rowData.companyname);
    setAboutCompany(rowData.aboutCompany);
    setDescription(rowData.description);
    setExperience(rowData.description);
    setJobPosted(rowData.jobposted);
    setLocation(rowData.location);
    setNumberOfVaccancies(rowData.numberofvaccancies);
    setSalary(rowData.salary);
    setJobId(rowData._id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = async (rowData) => {
    console.log("rowdata:", rowData);
    let body = {
      title: title,
      companyname: companyName,
      skills: skills,
      salary: salary,
      jobposted: jobPosted,
      numberofvaccancies: numberOfVaccancies,
      location: location,
      experience: experience,
      description: description,
      aboutcompany: aboutCompany,
    };
    console.log("rrrrr", jobId);

    const response = await axios.patch(`${API_BASE_URL}/addjob/${jobId}`,body,CONFIG_OBJ);
    if (response.status) {
    toast.success('Data Updated Successfully')
      fetchAllData();
    } else {
      toast.error('Data Updation Failed')
    }
  };
  const showAddjobForm = () => {
    return (
      <Dialog open={open} >
        <DialogContent >{AddForm()}</DialogContent>
        <DialogActions>
          <button onClick={handleEdit}>Save</button>
          <button onClick={handleClose}>Close</button>
        </DialogActions>
      </Dialog>
    );
  };


  const AddForm = () => {
    return (
      <div>
        <form action="submit">
          <div className="col-12 p-3 mx-auto">
            <h1>Edit Jobs</h1>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="Enter Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput3"
                placeholder="Skills Required"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput3"
                placeholder="Salary "
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="date"
                className="form-control"
                id="exampleFormControlInput3"
                placeholder=" Job Posted"
                value={jobPosted}
                onChange={(e) => setJobPosted(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput3"
                placeholder="Number Of Vaccancies"
                value={numberOfVaccancies}
                onChange={(e) => setNumberOfVaccancies(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput3"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput3"
                placeholder="Experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput3"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput3"
                placeholder="About Company"
                value={aboutCompany}
                onChange={(e) => setAboutCompany(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
    );
  };

  
  const handleDelete = (rowData) => {
    console.log("rowdata", rowData);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
       result = await axios.delete(`${API_BASE_URL}/addjob/${rowData._id}`,CONFIG_OBJ);
        if (result.status) {
          Swal.fire("Deleted!", "Job has been deleted.", "success");
          fetchAllData();
        } else {
          Swal.fire("Deleted!", "Fail to delete job", "error");
        }
      }})
      .catch ((error) => {
        console.log(error);
      })
    
  };

  function displayData() {
    return (
      <MaterialTable
        title="Edit Job Data"
        columns={[
          { title: "Title", field: "title" },
          { title: "Company name", field: "companyname" },
          { title: "Salary", field: "salary" },
          { title: "Experience", field: "experience" },
          { title: "Number of Vaccancies", field: "numberofvaccancies" },
          { title: "Location", field: "location" },
        ]}
        data={data}
        actions={[
          {
            icon: "edit",
            tooltip: "Edit Job",
            onClick: (event, rowData) => handleOpen(rowData),
          },
          {
            icon: "delete",
            tooltip: "Delete job",
            onClick: (event, rowData) => handleDelete(rowData),
          },
          {
            icon: "add",
            tooltip: "Add Job",
            isFreeAction: true,
            onClick: () => navigate("/addjob"),
          },
        ]}
      />
    );
  }

  return (
    <div>
      {displayData()}
      {showAddjobForm()}
    </div>
  );
}
