import React, { useState } from 'react'                 //importing React
import { Link } from 'react-router-dom'              //importing Link from react-router-dom
import axios from 'axios'
import { API_BASE_URL } from '../config'
import { toast } from 'react-toastify';


const EmployerRegister = () => {                             //Register component


    const [fullName, setFullName] = useState("");
    const [contactno, setContactno] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const registeringemployer = (event) => {
        event.preventDefault();
       
        setLoading(true);
        const requestData = { fullName: fullName, phoneNumber: contactno, email, password }
        axios.post(`${API_BASE_URL}/employerRegister`, requestData)
            .then((result) => {
                if (result.status === 201) {
                    setLoading(false);
                    localStorage.setItem('employer', JSON.stringify(requestData));
                    toast.success('Employer Registered Successfully !');
                }
                setFullName('');
                setContactno('');
                setEmail('');
                setPassword('');
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                toast.error(error.response.data.error);
            })
    }

    return (                                           //returning the JSX
        <>                                                    {/* fragment tag*/}
            <div className="container">
                <div className="row">
                    <div className="col-8 mx-auto ">
                        <h2 className="text-center m-5 text-bolder">EMPLOYER REGISTRATION FORM</h2>
                        {loading ? <div className='col-md-12 my-3 d-flex justify-content-center text-center'>
                            <div class="custom-loader"></div>
                        </div>
                            : ''}
                        <form onSubmit={(e) => registeringemployer(e)} className='border border-1 p-4 border-grey shadow-sm mb-5'>
                            {/* Full name */}
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
                            {/* password */}
                            <label htmlFor="inputPassword5" className="form-label">Password*</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
                            <div id="passwordHelpBlock" className="form-text">
                                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                            </div>
                            {/* submit button */}
                            <div className="d-grid gap-2 my-3">
                                <button className="btn border-0 btn-dark btnHoverOrange" type="submit">Submit</button>
                            </div>
                            <h5 className='text-center'> Already Have an account? <Link to="/employerLogin">Login</Link></h5>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EmployerRegister                                //exporting Register component