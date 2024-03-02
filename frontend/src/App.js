import { useEffect } from 'react';
import './App.css';                  //importing App.css
import { BrowserRouter as Router } from 'react-router-dom';//importing BrowserRouter from react-router-dom
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar';          //importing Navbar component
import Footer from './Components/Footer';

import { RenderRoutes } from './Components/RenderNavigation';


function App() {                                  //App component
 
  //  const navigate= useNavigate();
  //  const dispatch = useDispatch();

  // useEffect(() => {
  //   function onload(dispatch) {
  //     const user = localStorage.getItem("user");
  //     // const employer = localStorage.getItem("employertoken");
  //     let tokendetails = '';
  //     if (user) {
  //       tokendetails = JSON.parse(user);
  //       // dispatch({ type: 'LOGIN_SUCCESS', payload: result.data.result.user });
  //       // tokendetails = user;
  //     }
  //     // else if (employer) {
  //     //   tokendetails = JSON.parse(employer);
  //     //   dispatch({ type: 'LOGIN_SUCCESS', payload: result.data.result.user });
  //     //   // tokendetails = employer;
  //     // }
  //     else {
  //       localStorage.removeItem("token");
  //       localStorage.removeItem("user");
  //       localStorage.removeItem("employertoken");

  //       dispatch({ type: "LOGIN_ERROR" });
  //     }
  //   }
  //   onload();
  // }, []);

  return (                                       //returning the JSX
    <>                                           {/* fragment tag*/}
      <Router>                                    {/* BrowserRouter as Router*/}
        <Navbar />
        <RenderRoutes />
        <Footer />
      </Router>
    </>
  );
}

export default App;                             //exporting App component

