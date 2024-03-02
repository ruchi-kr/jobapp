import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEdit } from '@fortawesome/free-solid-svg-icons'
import DisplayJob from './DisplayJob'

const EmployerHomePage = () => {
    const employerdetail = JSON.parse(localStorage.getItem("employerdata"));
    // const employer = localStorage.getItem("employertoken");

    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-8">
                        {/* <img width="80px" height="80px" style={{borderColor:"#ffa600"}} className='img-thumbnail rounded-circle' src="" alt="employerprofile" /> */}
                        {/* <button className='btn-sm border-0 mx-4' onClick=""><FontAwesomeIcon icon={faEdit}/>Upload image</button> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 my-5">
                        <h5 className='text-uppercase'>Employer Name: {employerdetail.fullName}</h5>
                        <p>Employer Email: {employerdetail.email}</p>
                        <p>Employer Contact: {employerdetail.phoneNumber}</p>
                    </div>
                
                </div>
                <div className="row my-3">
                    <div className="col-12">
                       <DisplayJob/>
                        <h4>Application Received</h4>
                        </div>
                </div>
            </div>
        </>
    )
}

export default EmployerHomePage
