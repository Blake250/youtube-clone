import React, {useState, useEffect} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import styled from  "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import { Link, useNavigate } from 'react-router-dom';
import {  signOut } from 'firebase/auth';
import { auth} from "../firebase"
import { logOut } from '../redux/reducerSlice';
import { useSelector, useDispatch } from 'react-redux';






const Feed = ({toggleHandler}) => {
//  const userName = useSelector((state)=> state.name )
  //const userPhoto = useSelector((state)=> state.photoURL)
 // const userEmail = useSelector((state)=> state.email)
 const  dispatch = useDispatch()
 const navigate = useNavigate()
   

const logOutBtn = (()=>{

  signOut(auth).then(()=>{
   
    dispatch(logOut())
    setTimeout(()=>{
      navigate("/login")
    })
  })
})


  const [SearchInput, setSearchInput] =  useState(" ")


  const handleSubmit = ((e)=>{
    e.preventDefault()
    console.log(`user input is ${setSearchInput}`)
     setSearchInput( "")
  })
  return (
    <Container>
      
     <Header>
    <Logo> 
    <MenuIcon 
       onClick = {()=> toggleHandler()} />
   <Link to={"/"}> 
        
  <img src="https://cdn.pixabay.com/photo/2015/09/15/22/47/logo-941916_1280.png" alt="" />
   </Link>
   
    
    </Logo>

  
    < TextInput  onClick={handleSubmit}  >
    <input value={SearchInput}
     onChange={(e) => setSearchInput(e.target.value)} 
     type="text" 
     placeholder='search' 
 
    
     />
    
    <Link    to={`/search/${SearchInput}`}
      
    >
     
      
    <SearchIcon  

    />
    </Link>
    </TextInput>

    <HeaderIcons>    

    <VideoCallIcon/>
    <AppsIcon/>
    <NotificationsIcon/>
  
      
    <span  onClick={logOutBtn}  >  
   
   <img    src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" alt="" /> 
 

   </span>
       
  


 
  
    
    
    
  
  

   
    </HeaderIcons>

    </Header>
    
    </Container>
   
  )
}

export default Feed
const Container = styled.div`


 
`


  const TextInput= styled.div.attrs({
    className: "text"
  })`
  display:flex;
  align-items:center;
  width:40vw;
  height:18px;
    border:1px solid black;
    margin-left:18px;
    border-radius:4px;
 

  input{
    flex:1;
  border:none;
  
  
    
  }
   svg{
    height:20px;
    width:40px !important; 
    border-left:1px solid black;
    display:flex;
   align-items:center;
    justify-content:center;
    text-decoration:none;
   
  
   }
    a>svg{
      color:#2b2b2b;
     

    }

    
  `



const Header = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding: 10px;
position: sticky;
top:0;
z-index:100;
margin-left:20px;







`
const Logo = styled.div`
 
 display:flex;
 align-items:center;
 

img{
  width:80px;
  height:50px;
  padding-left:10px;
  margin-top:7px;


}
svg{

}

@media (max-width:768px) {
  svg{
  margin-left:-18px;
}

}

  
` 


const HeaderIcons = styled.div`
display:flex;
align-items:center;

 svg{
  padding:0 10px;
 }

 span{
  img{
    vertical-align: middle;
  width: 40px;
  height: 40px;
  border-radius: 40px;
 // object-fit:contain;
  }
 }



@media (max-width:768px) {
  svg{
  margin-left:-9px;
  vertical-align:middle;
}
  
}
`
  


