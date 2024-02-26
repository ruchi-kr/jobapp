import React from 'react'
import { Link } from 'react-router-dom'
const EmployerHomePage = () => {
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-8">
                        <img className='img-thumbnail w-100 h-100 rounded-circle' src="" alt="employerprofile" />
                        <button>Edit Profile</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h1>Employer Name: ${}</h1>
                        <h2>Employer Email:${}</h2>
                        <h2>Employer Contact:${}</h2>
                    </div>
                    <div className="col-6">
                        <h1>Company Name: ${}</h1>
                        <h2>Company Email:${}</h2>
                        <h2>Company Contact:${}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Link to="/addjob" className='btn btn-dark'>Add Job</Link>
                        </div>
                </div>
            </div>
        </>
    )
}

export default EmployerHomePage
