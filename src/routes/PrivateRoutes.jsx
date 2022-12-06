import React from 'react';
import { Outlet } from 'react-router-dom';


const PrivateRoutes = () => {
    // const auth = getCookieToken(); // determine if authorized, from context or however you're doing it
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    // return auth ? <><NavBar currUserInfo={currUserInfo} setCurrUserInfo={setCurrUserInfo} /> <Outlet /></> : <Navigate to="/login" />;
    return <Outlet />;
}
export default PrivateRoutes;