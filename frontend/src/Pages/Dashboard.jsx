import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { API_BASE_URL } from "../config";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket,faUsers} from "@fortawesome/free-solid-svg-icons";
export default function Dashboard() {

  const [employer,setEmployer] = useState(0)
  const [users,setUsers] = useState(0)
 const [totaljobs,setTotaljobs] = useState(0)
 const [totalapplied,setTotalapplied] = useState(0)
 const [totaltech,setTotalTechJobs] = useState(0)
  const fetchAllDetails = async () =>{
       const totalemployerdash = await axios.get(`${API_BASE_URL}/total_employer`);
       setEmployer(totalemployerdash.data.total)
     
       const totaluserdash = await axios.get(`${API_BASE_URL}/users`);
       setUsers(totaluserdash.data.total)

       const totaljobposted = await axios.get(`${API_BASE_URL}/addjob`);
       setTotaljobs(totaljobposted.data.total)

       const totalappliedjob = await axios.get(`${API_BASE_URL}/applyjob`);
       setTotalapplied(totalappliedjob.data.total)

       const totaltechjobs = await axios.get(`${API_BASE_URL}/aboutjobtype`);
       setTotalTechJobs(totaltechjobs.data.total)
  }

  
  useEffect(function(){
        fetchAllDetails()
  },[])
  const totalnontechjobs = totaljobs - totaltech;
  const members = 1 + employer + users;
  return (
    <>
      <div className="continer-fluid mb-5">
        <div className="row">
          {/* 1st column */}
          <div className="col-2 px-5 py-5">
          <h5 style={{color:"#ffa600"}}  className="fw-bolder text-uppercase mb-3">dashboard</h5>
            <div className="d-flex align-items-center">           
              <p className="fw-bolder text-capitalize">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>{" "}
                profile
              </p>
            </div>
          
            <p className="fw-bolder text-capitalize"><FontAwesomeIcon icon={faUsers} /> manage users</p>
            <Link to='/adminlogin' className="fw-bolder text-capitalize text-decoration-none text-secondary"><FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout</Link>

          </div>
          {/* 2nd column */}
          <div className="col-10 p-3 shadow-sm">
            {/* 1st row */}
            <div className="row">
              {/* user info block */}
              <h5 className="text-uppercase m-3">user info</h5>
              <div className="col-10 my-3 mx-1 d-flex ">
                {/* 1 block */}
                <div
                  className="bg-primary m-3 p-4 rounded-3 shadow-lg boxGradient"
                  style={{ width: "50%", height: "80%" }}
                >
                  <h3 className="text-white text-center">{members}</h3>
                  <p className="text-white text-center text-capitalize">
                    Total members
                  </p>
                </div>
                {/* 2 block */}
                <div
                  className="bg-primary m-3 p-4 rounded-3 shadow-lg boxGradient"
                  style={{ width: "50%", height: "80%" }}
                >
                  <h3 className="text-white text-center">1</h3>
                  <p className="text-white text-center text-capitalize">
                    Admin
                  </p>
                </div>
                {/* 3 block */}
                <div
                  className="bg-primary m-3 p-4 rounded-3 shadow-lg boxGradient"
                  style={{ width: "50%", height: "80%" }}
                >
                  <h3 className="text-white text-center">{employer}</h3>
                  <p className="text-white text-center text-capitalize">
                    employer
                  </p>
                </div>
                {/* 4 block */}
                <div
                  className="bg-primary m-3 p-4 rounded-3 shadow-lg boxGradient"
                  style={{ width: "50%", height: "80%" }}
                >
                  <h3 className="text-white text-center">{users}</h3>
                  <p className="text-white text-center text-capitalize">
                    Users
                  </p>
                </div>
              </div>
            </div>
            {/* 2nd row */}

            <div className="row">
              {/* job info block */}
              <h5 className="text-uppercase m-3">job info</h5>
              <div className="col-10 my-3 mx-1 d-flex ">
                {/* 1 block */}
                <div
                  className="bg-primary m-3 p-4 rounded-3 shadow-lg boxGradient"
                  style={{ width: "50%", height: "80%" }}
                >
                  <h3 className="text-white text-center">{totaljobs}</h3>
                  <p className="text-white text-center text-capitalize">
                    Total jobs posted
                  </p>
                </div>
                {/* 2 block */}
                <div
                  className="bg-primary m-3 p-4 rounded-3 shadow-lg boxGradient"
                  style={{ width: "50%", height: "80%" }}
                >
                  <h3 className="text-white text-center">{totalapplied}</h3>
                  <p className="text-white text-center text-capitalize">
                    Total jobs applied
                  </p>
                </div>
                {/* 3 block */}
                <div
                  className="bg-primary m-3 p-4 rounded-3 shadow-lg boxGradient"
                  style={{ width: "50%", height: "80%" }}
                >
                  <h3 className="text-white text-center">{totaltech}</h3>
                  <p className="text-white text-center text-capitalize">
                    Tech jobs posted
                  </p>
                </div>
                {/* 4 block */}
                <div
                  className="bg-primary m-3 p-4 rounded-3 shadow-lg boxGradient"
                  style={{ width: "50%", height: "80%" }}
                >
                  <h3 className="text-white text-center">{totalnontechjobs}</h3>
                  <p className="text-white text-center text-capitalize">
                    Non-Tech jobs posted
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
