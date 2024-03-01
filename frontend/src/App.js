import './App.css';                  //importing App.css
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';//importing BrowserRouter, Routes, Route from react-router-dom

import Navbar from './Components/Navbar';          //importing Navbar component

import Login from './Pages/Login';                //importing Login component
import Register from './Pages/Register';          //importing Register component
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';
import ForgotPassword from './Pages/ForgotPassword';
import PageNotFound from './Pages/PageNotFound';
import EmployerRegister from './Pages/EmployerRegister';
import EmployerLogin from './Pages/EmployerLogin';
import EmployerHomePage from './Pages/EmployerHomePage';
import UserHomePage from './Pages/UserHomePage';
import AddJob from './Pages/AddJob';
import TopJobs from './Pages/TopJobs';
import ApplyJob from './Pages/ApplyJob';
import Dashboard from './Pages/Dashboard';
import AdminLogin from './Pages/AdminLogin';

function App() {                                  //App component
  return (                                       //returning the JSX
    <>                                           {/* fragment tag*/}
      <Router>                                    {/* BrowserRouter as Router*/}
      <Navbar />
        <Routes>                               
          <Route path="/" element={<HomePage />}></Route>
          <Route exact path="/homepage" element={<HomePage />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route exact path="/employerRegister" element={<EmployerRegister />}></Route>
          <Route exact path="/employerLogin" element={<EmployerLogin />}></Route>
          <Route exact path="/employerhomepage" element={<EmployerHomePage />}></Route>
          <Route exact path="/userhomepage" element={<UserHomePage />}></Route>
          <Route exact path="/addjob" element={<AddJob />}></Route>
          <Route exact path="/topjobs" element={<TopJobs />}></Route>
          <Route path='/applyjob' element={<ApplyJob />}></Route>
          <Route path= '/adminlogin' element={<AdminLogin />}></Route>
          <Route exact path="/admindashboard" element={<Dashboard />}></Route>
          <Route exact path="*" element={<PageNotFound />}></Route>
        </Routes>
        <Footer/>
       </Router> 
    </>
  );
}

export default App;                             //exporting App component

