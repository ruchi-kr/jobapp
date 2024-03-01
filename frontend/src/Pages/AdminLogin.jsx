import React,{ useState } from 'react'               //importing React
import {useNavigate } from 'react-router-dom' //importing Link from react-router-dom

import { toast } from 'react-toastify';
const AdminLogin = () => {                              //Login component
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const loggingin = (event) => {
        event.preventDefault();
        // var email = document.getElementById('exampleFormControlInput1').value;
        // var password = document.getElementById('inputPassword5').value;
        try {

            // admin hard code email and password
            if (email === 'admin@admin.com' && password === 'admin123') {
                toast.success('Admin Logged In Successfully!');
                navigate('/admindashboard');
            }
            else if(email === 'admin@admin.com' && password !== 'admin123'){
                toast.error('Invalid Credentials');
            }
            else if(email !== 'admin@admin.com' && password === 'admin123'){
                toast.error('Invalid Credentials');
            }
            else if(email === '' && password === ''){
                toast.error('Invalid Credentials');
            }
            else{
                toast.error('Invalid Credentials');
            }
        } catch (error) {
            console.log(error);
            toast.error('Invalid Credentials');
        }



    }

    return (                                      //returning the JSX    onSubmit={(e) => { loggingin(e) }}
        <>                                          {/* fragment tag*/}
            <div className="container">
                <div className="row">
                    <div className="col-8 mx-auto">

                        <h2 className="text-center m-5 text-bolder">ADMIN LOGIN</h2>
                       
                        <form onSubmit={(e) => { loggingin(e) }} className='border border-1 p-4 border-grey shadow-sm mb-5'>
                            {/* email address value={email} onChange={(e) => setEmail(e.target.value)} */}
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email*</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)}  type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            {/* password value={password} onChange={(e) => setPassword(e.target.value)} */}
                            <label htmlFor="inputPassword5" className="form-label">Password*</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)}  type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
                            <div id="passwordHelpBlock" className="form-text">
                                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                            </div>
                            {/* submit button */}
                            <div className="d-grid gap-2 my-3">
                                <button className="btn border-light-subtle btn-dark btnHoverOrange" type="submit">Submit</button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminLogin                           //exporting Login component