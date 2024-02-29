import React, { useState } from 'react'               //importing React
import { useNavigate } from 'react-router-dom' //importing Link from react-router-dom

import axios from 'axios'
import { API_BASE_URL } from '../config'
import { toast } from 'react-toastify';
const ForgotPassword = () => {                              //Login component
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const sendingmail = (event) => {
        event.preventDefault();
        
        axios.post(`${API_BASE_URL}/forgotpassword`, { email })
            .then((result) => {
                if (result.status === 200) {                
                    toast.succes('Email Sent Successfully');
                    navigate('/login');
                }
            })
            .catch((error) => {
                console.log(error);
                toast.error('Email not sent');
            })
    }

    return (                                      //returning the JSX
        <>                                          {/* fragment tag*/}
            <div className="container">
                <div className="row">
                    <div className="col-8 mx-auto">
                        <h2 className="text-center m-5 text-bolder">RESET PASSWORD FORM</h2>
                       
                        <form onSubmit={(e) => { sendingmail(e) }} className='border border-1 p-4 border-grey shadow-sm mb-5'>
                            {/* email address */}
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email*</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                           
                            {/* submit button */}
                            <div className="d-grid gap-2 my-3">
                                <button className="btn border-0 btn-dark btnHoverOrange" type="submit">Send Email</button>
                            </div>
                          
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}






export default ForgotPassword
