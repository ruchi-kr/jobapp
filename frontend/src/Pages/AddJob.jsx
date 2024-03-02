import { useState } from "react";
import axios from 'axios';
import { API_BASE_URL } from '../config'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function AddJob() {

  const CONFIG_OBJ = {                                         //config object
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("employertoken")
    }
  }

  const [title, setTitle] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [skills, setSkills] = useState('')
  const [salary, setSalary] = useState('')
  const [jobPosted, setJobPosted] = useState('')
  const [numberOfVaccancies, setNumberOfVaccancies] = useState('')
  const [location, setLocation] = useState('')
  const [experience, setExperience] = useState('')
  const [description, setDescription] = useState('')
  const [aboutJobType, setAboutJobType] = useState('')

  const navigate = useNavigate();
  const handleSubmit = async () => {
    // alert(API_BASE_URL)
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
      aboutJobType: aboutJobType
    }

    await axios.post(`${API_BASE_URL}/addjob`, body, CONFIG_OBJ);
    toast.success('Job Added Successfully!');
    navigate('/employerhomepage')
  }

  const handleReset = () => {
    setTitle('')
    setSkills('')
    setSalary('')
    setLocation('')
    setNumberOfVaccancies('')
    setJobPosted('')
    setExperience('')
    setDescription('')
    setCompanyName('')
    setAboutJobType('')
  }

  return (
    <form action="submit">
      <div className="col-6 m-5 p-3 shadow-lg mx-auto">
        <h1 className="text-center text-bolder my-5" style={{ color: '#ffa600' }}>Add Jobs</h1>                     

        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Job Title*</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Job title*"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          required/>
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
          required/>
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
          required/>
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
          required/>
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
          required/>
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

        <div className="d-grid gap-3 my-3">
          <button
            type="button"
            className="btn btn-dark btnHoverOrange border-light-subtle"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            type="button"
            className="btn btn-dark btnHoverOrange border-light-subtle"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  );
}