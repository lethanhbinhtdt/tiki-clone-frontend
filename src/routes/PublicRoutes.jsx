import React from 'react';
import { Outlet } from 'react-router-dom';

// route not logged in yet
const PublicRoutes = () => {
  // const auth = getToken(); // determine if authorized, from context or however you're doing it
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  // return !auth ? <Outlet /> : <Navigate to="/" />;
  return <Outlet />;
}
export default PublicRoutes;