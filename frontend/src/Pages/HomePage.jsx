import React, { useState, useEffect } from 'react'                                        //importing React
import '../App.css';
import axios from 'axios'
import { API_BASE_URL } from '../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faLocationDot, faIndianRupeeSign, faStar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import Fuse from 'fuse.js';
const HomePage = () => {                                   //HomePage component
    const [allJob, setAllJob] = useState([]);
    const [search, setSearch] = useState('');

    const fuse = new Fuse(allJob, {
        keys: ['title', 'companyname', 'skills'],
        includeScore: true
    })

    const result = fuse.search(search);
    const outputSearch = search ? result.map(item => item.item) : allJob;
    const handleOnSearch = ({ currentTarget = {} }) => {
        const { value } = currentTarget;
        setSearch(value);
    }

    useEffect(() => {
        const getAllJob = async () => {
            const response = await axios.get(`${API_BASE_URL}/addjob`)
            setAllJob(response.data);
            console.log("ourdata", response.data);
        }
        getAllJob()
    }, []);


    return (
        <>
            <div className='text-center relative'>
                <img className='img-fluid w-100' style={{ filter: 'blur(2.5px)' }} src="https://knovator.com/wp-content/uploads/2020/11/1_PIg3Qg3CGap_i4xRWGAktw.png" alt="jobprtalbanner" />
                <div>
                    <h1 className="display-2 heading absolute" style={{ color: '#ffa600' }}>Find your dream job now</h1>
                    <div>

                        <form className="d-flex col-3 mx-auto align-items-center shadow-sm border border-light-subtle rounded-5 py-2 px-4 " role="search">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <input className="form-control me-2 border-0" type="search" onChange={handleOnSearch} value={search} placeholder="Enter skills/Designation/companies..." aria-label="Search" />
                            <button className="btn rounded-5 border-0 btn-dark btnHoverOrange" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div >
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-10 col-lg-7 my-5 text-dark mx-auto">
                        {outputSearch.map((job, index) => {
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
                                        {/* <p className='lh-1 text-capitalize'>Company Type :{job.aboutcompany}</p> */}
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
}

export default HomePage 
