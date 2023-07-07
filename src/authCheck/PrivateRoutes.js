
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import useAuth from './useAuth';

import { Route } from 'react-router-dom';
import LoginScreen from '../components/LoginScreen';








function PrivateRoutes() {
  const user = useAuth()
 

  return  typeof user === "undefined" ? (
    <h1>Loading....</h1>
  ) : user ? (
    <Outlet/>
  ):(
  
    <LoginScreen/>
  )
    
  
}

export default PrivateRoutes











