import React, { useState } from 'react'                 //importing React
import { Link } from 'react-router-dom'              //importing Link from react-router-dom

import axios from 'axios'
import { API_BASE_URL } from '../config'
import { toast } from 'react-toastify';


const Register = () => {                             //Register component


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const registering = (event) => {
        event.preventDefault();
       
        setLoading(true);
        const requestData = { firstName: firstName, lastName: lastName, email, password }
        axios.post(`${API_BASE_URL}/register`, requestData)
            .then((result) => {
                if (result.status === 201) {
                    setLoading(false);
                    localStorage.setItem('studentuser', JSON.stringify(requestData));
                    toast.success('User Registered Successfully !');
                }
                setFirstName('');
                setLastName('');
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
                        <h2 className="text-center m-5 text-bolder">REGISTRATION FORM</h2>
                        {loading ? <div className='col-md-12 my-3 d-flex justify-content-center text-center'>
                            <div class="custom-loader"></div>
                        </div>
                            : ''}
                        <form onSubmit={(e) => registering(e)} className='border border-1 p-4 border-grey shadow-sm mb-5'>
                            {/* First name */}
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">First Name*</label>
                                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="First Name" />
                            </div>
                            {/* Last name */}
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Last Name*</label>
                                <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Last Name" />
                            </div>
                            {/* email address */}
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email*</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            {/* password */}
                            <label htmlFor="inputPassword5" className="form-label">Password*</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
                            <div id="passwordHelpBlock" className="form-text">
                                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                            </div>
                            {/* submit button */}
                            <div className="d-grid gap-2 my-3">
                                <button className="btn border-light-subtle btn-dark btnHoverOrange" type="submit">Submit</button>
                            </div>
                            <h5 className='text-center'> Already Have an account? <Link to="/login">Login</Link></h5>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register                                //exporting Register component