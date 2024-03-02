import React from 'react'
// import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEdit } from '@fortawesome/free-solid-svg-icons'

const UserHomePage = () => {
   
    const studentuser = JSON.parse(localStorage.getItem("studentuser"));
    // const user = localStorage.getItem("token");

    return (
       
        <>
         {/* {user?
         <> */}
            <div className='container'>
                <div className="row">
                    <div className="col-8">
                        {/* <img width="80px" height="80px" style={{ borderColor: "#ffa600" }} className='img-thumbnail rounded-circle' src="" alt="userprofile" /> */}
                        {/* <form method="post" enctype="multipart/form-data">
                            <input name="userprofilepic" className="form-control col-3" type="file" id="formFile" />
                            <button className='btn-sm border-0 mx-4' type='submit'><FontAwesomeIcon icon={faEdit} />Upload image</button>
                        </form> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 my-5">
                        <h5 className='text-uppercase'>Name: {studentuser.firstName}</h5>
                        <p>Email: {studentuser.email}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h4>Applied Jobs</h4>
                    </div>
                </div>
            </div>
        </>
        // :
        // <>
        //     <h1>Unauthorized User</h1>
        // </>}
        // </>
    )
}

export default UserHomePage
