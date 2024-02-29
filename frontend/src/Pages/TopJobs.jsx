import React, { useState,useEffect } from 'react'                            //importing React
import axios from 'axios'
import { API_BASE_URL } from '../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faLocationDot, faIndianRupeeSign, faStar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
const TopJobs = () => {
  
    const [topjobs, setTopJobs] = useState([]);
    useEffect(() => {
        const getTopJobs = async () => {
            const response = await axios.get(`${API_BASE_URL}/topjobs`)
            setTopJobs(response.data);
        }
        getTopJobs()
    },[]);
    
    return (                                        //returning the JSX
        <>                                          {/* fragment tag*/}
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-10 col-lg-7 my-5 text-dark mx-auto">
                        <h2 className="text-center my-5 mx-2 text-bolder text-uppercase col-12">TOP 5 jobS</h2>
                       
                        {topjobs.map((job, index) => {
                            return (
                                <>
                                    <div className='border-0 rounded-4 shadow-lg m-5 p-5' key={job._id}>
                                        <h6 className='fw-bold text-uppercase' style={{ color: "#ffa600" }}>{job.title}</h6>
                                        <p className='lh-1c fw-bold text-uppercase'>{job.companyname} <FontAwesomeIcon icon={faStar} size='xs' style={{ color: "#ffa600" }} /></p>

                                        <div className="row ">
                                            <div className="col-12 d-flex gap-3 justify-content-start align-items-center">
                                                <p className='lh-1'><FontAwesomeIcon className='text-secondary' icon={faBriefcase} /> {job.experience}</p>
                                                <p className='text-secondary'>|</p>
                                                <p className='lh-1'><FontAwesomeIcon className='text-secondary' icon={faIndianRupeeSign} /> {job.salary}</p>
                                                <p className='text-secondary'>|</p>
                                                <p className='lh-1 text-truncate text-capitalize'><FontAwesomeIcon className='text-secondary' icon={faLocationDot} /> {job.location}</p>
                                            </div>
                                        </div>
                                        <p className='lh-1 text-truncate text-capitalize'><FontAwesomeIcon className='text-secondary' icon={faClipboard} /> {job.description}</p>
                                        <p className='lh-1 text-capitalize'>Skills :{job.skills}</p>
                                        <div className="row">
                                            <div className="col-8">
                                                <p className='lh-1'>No. of Vaccancy :{job.numberofvaccancies}</p>
                                                <p className='lh-1'>Posted : {job.jobposted.slice(8, 10)}-{job.jobposted.slice(5, 7)}-{job.jobposted.slice(0, 4)}</p>
                                            </div>
                                            <div className="col-4">
                                                <Link to='/applyjob' className='btn btn-dark rounded-0 mt-1 border-0 applybtn'>APPLY NOW</Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                        }
                     
                    </div>
                </div>
            </div>
        </> 
       )
};

export default TopJobs
                    