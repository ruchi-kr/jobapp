import MaterialTable from "@material-table/core";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { API_BASE_URL } from '../config';
import { Dialog, DialogActions, DialogContent } from "@mui/material";
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
  const [aboutJobType, setAboutJobType] = useState("");

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
    setAboutJobType(rowData.aboutJobType);
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
      aboutJobType: aboutJobType,
    };
    console.log("rrrrr", jobId);

    const response = await axios.patch(`${API_BASE_URL}/addjob/${jobId}`, body, CONFIG_OBJ);
    if (response.status) {
      toast.success('Data Updated Successfully')
      fetchAllData();
    } else {
      toast.error('Data Updation Failed')
    }
  };
  const showAddjobForm = () => {
    return (
      <Dialog fullScreen open={open} >
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
              <label htmlFor="exampleFormControlInput1" className="form-label">Job Title*</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Job title*"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput2" className="form-label">Company Name*</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="Enter Company Name*"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput3" className="form-label">Skills Required*</label>

              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput3"
                placeholder="Skills Required*"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                required />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput4" className="form-label">Salary(in CTC)</label>

              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput4"
                placeholder="Salary "
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput5" className="form-label">Date*</label>
              <input
                type="date"
                className="form-control"
                id="exampleFormControlInput5"
                value={jobPosted}
                onChange={(e) => setJobPosted(e.target.value)}
                required />
            </div>


            <div className="mb-3">
              <label htmlFor="exampleFormControlInput6" className="form-label">Number Of Vaccancies</label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput6"
                placeholder="Number Of Vaccancies"
                value={numberOfVaccancies}
                onChange={(e) => setNumberOfVaccancies(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput7" className="form-label">Location*</label>

              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput7"
                placeholder="Location*"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput8" className="form-label">Experience(in years)*</label>

              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput8"
                placeholder="Experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                required />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput9" className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput9"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <select className="form-select" aria-label="Default select example" value={aboutJobType}
                onChange={(e) => setAboutJobType(e.target.value)}>
                <option selected>Select Job Type</option>
                <option value={'tech'}>Tech</option>
                <option value={'non-tech'}>Non-Tech</option>
              </select>

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
        result = await axios.delete(`${API_BASE_URL}/addjob/${rowData._id}`, CONFIG_OBJ);
        if (result.status) {
          Swal.fire("Deleted!", "Job has been deleted.", "success");
          fetchAllData();
        } else {
          Swal.fire("Deleted!", "Fail to delete job", "error");
        }
      }
    })
      .catch((error) => {
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
