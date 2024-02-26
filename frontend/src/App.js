import './App.css';
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
import AddJob from './Pages/AddJob';

function App() {                                  //App component
  return (                                       //returning the JSX
    <>                                           {/* fragment tag*/}
      <Router>                                    {/* BrowserRouter as Router*/}
      <Navbar />
        <Routes>                               
          <Route path="/" element={<HomePage />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route exact path="/employerRegister" element={<EmployerRegister />}></Route>
          <Route exact path="/employerLogin" element={<EmployerLogin />}></Route>
          <Route exact path="/employerhomepage" element={<EmployerHomePage />}></Route>
          <Route exact path="/addjob" element={<AddJob />}></Route>
          <Route exact path="*" element={<PageNotFound />}></Route>
        </Routes>
        <Footer/>
       </Router> 
    </>
  );
}

export default App;                             //exporting App component

