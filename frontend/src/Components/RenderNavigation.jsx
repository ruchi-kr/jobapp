import { Route, Routes } from "react-router-dom";
import { nav } from "./Navigation";
import { useSelector } from "react-redux";
export const RenderRoutes = () => {
        
    const user = useSelector(state => state.userReducer.user);
        return (
             <Routes>
             { nav.map((r, i) => {
                  
                  if (r.isPrivate && user && Object.keys(user).length > 0) {
                      // Check if 'user' object exists in the Redux state
                       return <Route key={i} path={r.path} element={r.element}/>
                  } else if (!r.isPrivate) {
                       return <Route key={i} path={r.path} element={r.element}/>
                  } else {
                       return null
                  } 
             })}
             
             </Routes>
        )
   }
   
   