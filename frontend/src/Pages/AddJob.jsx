import { useState } from "react";
import axios from 'axios';
import { API_BASE_URL } from '../config'

export default function Add_Jobs() {

  const [title, setTitle] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [skills, setSkills] = useState('')
  const [salary, setSalary] = useState('')
  const [jobPosted, setJobPosted] = useState('')
  const [numberOfVaccancies, setNumberOfVaccancies] = useState('')
  const [location, setLocation] = useState('')
  const [experience, setExperience] = useState('')
  const [description, setDescription] = useState('')
  const [aboutCompany, setAboutCompany] = useState('')

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
      aboutcompany: aboutCompany
    }

    await axios.post(`${API_BASE_URL}/addjob`, body)
    alert('Job Added')
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
    setAboutCompany('')
  }

  return (
    <form action="submit">
      <div className="col-6 m-5 p-3 shadow-lg mx-auto">
        <h1>Add Jobs</h1>

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

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button
            type="button"
            className="btn btn-outline-success col-3  shadow-lg mx-auto"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            type="button"
            className="btn btn-outline-warning col-3  shadow-lg mx-auto"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  );
}