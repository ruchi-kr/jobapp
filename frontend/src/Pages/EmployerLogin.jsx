import React, { useState } from 'react'               //importing React
import { Link, useNavigate } from 'react-router-dom' //importing Link from react-router-dom

import { useDispatch } from 'react-redux';

import axios from 'axios'
import { API_BASE_URL } from '../config'
import { toast } from 'react-toastify';
const EmployerLogin = () => {                              //Login component
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const employerloggingin = (event) => {
        event.preventDefault();
        setLoading(true);
        const requestData = { email, password }
        axios.post(`${API_BASE_URL}/employerLogin`, requestData)
            .then((result) => {
                if (result.status === 200) {
                    setLoading(false);
                    localStorage.setItem("employertoken", result.data.result.token);
                    localStorage.setItem('employer', JSON.stringify(result.data.result.user));
                    dispatch({ type: 'LOGIN_SUCCESS', payload: result.data.result.user });
                    setLoading(false);
                    toast.success('Employer Logged In Successfully!');
                    navigate('/employerhomepage');

                }
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                toast.error(error.response.data.error);
            })
    }

    return (                                      //returning the JSX
        <>                                          {/* fragment tag*/}
            <div className="container">
                <div className="row">
                    <div className="col-8 mx-auto ">
                        <h2 className="text-center m-5 text-bolder">EMPLOYER LOGIN FORM</h2>
                        {loading ? <div className='col-md-12 my-3 d-flex justify-content-center text-center'>
                        <div class="custom-loader"></div>
                        </div>
                            : ''}
                        <form onSubmit={(e) => { employerloggingin(e) }} className='border border-1 p-4 border-grey shadow-sm mb-5'>
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
                            <h5 className='text-center'> Don't Have an account? <Link to="/employerRegister">Register Now</Link></h5>
                            <h5 className='text-center'> Forgot Password? <Link to="/forgotpassword">Click Here</Link></h5>

                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EmployerLogin                            //exporting Login component