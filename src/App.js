import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate, useNavigate} from "react-router-dom"
import {  Feed, HomePage, Home, NavBar } from "./components"
import LoginScreen from './components/LoginScreen';
//import ErrorPage from './components/ErrorPage';
import {ThemeProvider} from "styled-components"
import { darkTheme, LightTheme } from './components/globalStyling/theme';
import styled from 'styled-components';
import PrivateRoutes from './authCheck/PrivateRoutes';
import ErrorPage from './components/ErrorPage';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { logOut, loginSuccess } from './redux/reducerSlice';
import { useSelector } from 'react-redux';



 

















    export default function App() {
  const [toggle, setToggle] = useState(false)
  const dispatch = useDispatch()

  const userEmail = useSelector((state)=> state.user.user?.email)

 

  const toggleHandler = ()=> setToggle(!toggle)
 
   const [Mode, setMode] = useState("dark")
   const isDarkTheme = Mode === "dark"
 
   const toggler = ()=>{
    setMode(isDarkTheme ? "light" : "dark")
   }

   useEffect(()=>{
    onAuthStateChanged(auth,((user)=>{
      if(user){
        <Navigate  to={"/"} />
    
        dispatch(loginSuccess({
          email: user.email,
          uid:user.uid,
          displayName:user.displayName,
          photoUrl: user.photoURL
        }))
       

     
         
      }else{
        dispatch(logOut())
      }

    }) )


   }, [])


  return (
  <> 
     <ThemeProvider theme={isDarkTheme ? darkTheme: LightTheme}> 
 
 <div className="App" > 
 
    


     <Router>  
    
   
    { userEmail &&  <Feed toggleHandler={toggleHandler} />   }

      <Routes>
    
      <Route path='/login' element={ <LoginScreen/> } />
    
    
     
     <Route  element={<PrivateRoutes/>}  >   
   
      <Route  path='/' element={<> < Home toggler={toggler} isDarkTheme={isDarkTheme} />  </>} />   



  <Route path='/search/*' exact element={   <> < HomePage toggler={toggler} isDarkTheme={isDarkTheme} />  </> }/>

  </Route>

      <Route path='*' element={<ErrorPage/>} />
   
   
      
      
      </Routes>

      </Router> 
  
   
      </div>
  
      </ThemeProvider> 
    </>
  );
}


