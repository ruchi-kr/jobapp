import React from 'react'                                          //importing React 
import { Link, useNavigate } from 'react-router-dom';              //importing Link from react-router-dom
import { useDispatch } from 'react-redux';                         //importing useDispatch from react-redux
import Marquee from "react-fast-marquee";                          //importing Marquee
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Navbar = () => {                                             //Navbar component

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = localStorage.getItem("token");
    const employer = localStorage.getItem("employertoken");

    // for logout using localstorage
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("employer");
        localStorage.removeItem("employertoken");

        dispatch({ type: "LOGIN_ERROR" });
        navigate("/");
    }

    return (
        <>
            {/* marquee nav */}
            <Marquee id="top" className="fontcolor text-secondary fs-6 bg-dark border-bottom border-2 py-2" speed={70} direction="left" pauseOnHover={true}>
                !Beware of
                imposter sites! Genuine StyleUp products are available only on StyleUp.com | Official App - Play Store: &nbsp;
                <a target="_blank" rel="noreferrer" href="https://www.naukri.com"> https://www.naukri.com </a> &nbsp; & App Store: &nbsp;<a target="_blank" rel="noreferrer" href="https://apple.co/3PfBcEk"> &nbsp; https://apple.co/3PfBcEk </a>
            </Marquee>

            {/* conditional navbar */}
            <nav className="navbar navbar-expand-xl bg-light text-dark sticky-top">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand fs-3 ms-3 fw-bold" >Dear Job</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav m-1">

                            {user ? <>
                                <Link to='/userhomepage' className="nav-link border-0 btnHoverOrange" >MY ACCOUNT</Link>
                                <Link to="/" className="nav-link " onClick={() => logout()}>LOGOUT</Link>
                            </>
                                :
                                employer ? <>
                                    <Link to='/employerhomepage' className="nav-link border-0 btnHoverOrange" >MY ACCOUNT</Link>
                                    <Link to="/" className="nav-link " onClick={() => logout()}>LOGOUT</Link>
                                </>
                                    :
                                    <>
                                        <Link to='/topjobs' className="nav-link border-0 btn-dark btnHoverOrange" >TOP JOBS</Link>
                                        <Link to="/login" className="nav-link border-0 btn-dark btnHoverOrange" >LOGIN</Link>
                                        <Link to="/register" className="nav-link border-0 btn-dark btnHoverOrange" >REGISTER</Link>
                                        <Link to="/admin" className="nav-link border-0 btnHoverOrange" >
                                            <div className="btn-group btn-sm" role="group">
                                                <button type="button" className="btn btn-white border-0 btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                    FOR EMPLOYER
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" to="/employerRegister">REGISTER</Link></li>
                                                    <li><Link className="dropdown-item" to="/employerLogin">LOGIN</Link></li>
                                                </ul>
                                            </div>
                                        </Link>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar                        //exporting Navbar component