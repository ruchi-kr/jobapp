import Login from '../Pages/Login';                //importing Login component
import Register from '../Pages/Register';          //importing Register component
import HomePage from '../Pages/HomePage';
import ForgotPassword from '../Pages/ForgotPassword';
import PageNotFound from '../Pages/PageNotFound';
import EmployerRegister from '../Pages/EmployerRegister';
import EmployerLogin from '../Pages/EmployerLogin';
import EmployerHomePage from '../Pages/EmployerHomePage';
import UserHomePage from '../Pages/UserHomePage';
import AddJob from '../Pages/AddJob';
import TopJobs from '../Pages/TopJobs';
import ApplyJob from '../Pages/ApplyJob';
import Dashboard from '../Pages/Dashboard';
import AdminLogin from '../Pages/AdminLogin';

export const nav = [
    { path: "/", element: <HomePage />, isPrivate: false },
    { path: "/homepage", element: <HomePage />, isPrivate: false },
    { path: "/register", element: <Register />, isPrivate: false },
    { path: "/login", element: <Login />, isPrivate: false },
    { path: "/forgotpassword", element: <ForgotPassword />, isPrivate: true },
    { path: "/employerRegister", element: <EmployerRegister />, isPrivate: false },
    { path: "/employerLogin", element: <EmployerLogin />, isPrivate: false },
    { path: "/employerhomepage", element: <EmployerHomePage />, isPrivate: true },
    { path: "/userhomepage", element: <UserHomePage />, isPrivate: true },
    { path: "/addjob", element: <AddJob />, isPrivate: true },
    { path: "/topjobs", element: <TopJobs />, isPrivate: false },
    { path: "/applyjob", element: <ApplyJob />, isPrivate: true },
    { path: "/adminlogin", element: <AdminLogin />, isPrivate: false },
    { path: "/admindashboard", element: <Dashboard />, isPrivate: false },
    { path: "*", element: <PageNotFound />, isPrivate: false },
]

