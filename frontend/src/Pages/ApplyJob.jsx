import React, { useState } from 'react'
import axios from "axios";
import { API_BASE_URL } from '../config'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const ApplyJob = () => {

    const CONFIG_OBJ = {                                         //config object
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      }

    const [resume, setResume] = useState(null);
    const [fullName, setFullName] = useState("");
    const [contactno, setContactno] = useState("");
    const [email, setEmail] = useState("");
    const [workexperience, setWorkexperience] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();
         formData.append("resume", resume);
        const requestData = { fullName: fullName, phonenumber: contactno, workexperience, email, formData };
        try {
            const response = await axios.post(`${API_BASE_URL}/applyjob`, requestData, CONFIG_OBJ);
           
            if (response.status) {
                toast.success('Job Applied Successfully !');
            }
            setFullName('');
            setContactno('');
            setEmail('');
            setWorkexperience('');
            setResume(null);
            navigate('/homepage');
            console.log(response.data);

        } catch (error) {
            console.error('Error uploading file:', error);
            toast.error(error.response.data.error);
        }
    };

    const handleLogo = (event) => {
        setResume(event.target.files[0]);
    };
    return (
        <form  enctype="multipart/form-data">
            <div className='col-6 mx-auto my-5 shadow-lg p-5'>
                <h3 className='text-center mb-5 fw-bolder' style={{color:'#ffa600'}}>Apply for Job</h3>
                {/* full name */}
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Full Name*</label>
                    <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
                </div>

                {/* email address */}
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email*</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                {/* phone number*/}
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Contact No.*</label>
                    <input value={contactno} onChange={(e) => setContactno(e.target.value)} type="tel" className="form-control" id="exampleFormControlInput1" placeholder="Contact No" />
                </div>
                {/* work experience */}
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Work Experience</label>
                    <input value={workexperience} onChange={(e) => setWorkexperience(e.target.value)} type="number" className="form-control" id="exampleFormControlInput1" placeholder="Work Experience" />
                </div>
                {/* resume */}
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Upload Resume</label><br />
                    <input type="file" accept="images/*" multiple onChange={handleLogo} name="resume" required/>
                    <div class="form-text" id="basic-addon4">(Only .pdf and .docx are allowed and max size is 2MB)</div>
                </div>
                <div class="d-grid my-3">
                    <button class="btn btn-dark btnHoverOrange border-0" type="submit" onClick={handleSubmit}>Apply</button>
                </div>
            </div>
        </form>
    );


}

export default ApplyJob




