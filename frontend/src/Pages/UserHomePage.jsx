import React from 'react'
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const UserHomePage = () => {
    const studentuser = JSON.parse(localStorage.getItem("studentuser"));

    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-8">
                        <img width="80px" height="80px" style={{ borderColor: "#ffa600" }} className='img-thumbnail rounded-circle' src="" alt="userprofile" />
                        <button className='btn-sm border-0 mx-4' onClick=""><FontAwesomeIcon icon={faEdit} />Upload image</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 my-5">
                        <h5>Name: {studentuser.firstName}</h5>
                        <p>Email:{studentuser.email}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h4>Applied Jobs</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserHomePage
