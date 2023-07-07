
import React, { useState, useEffect } from 'react'

import styled from "styled-components"
import NavRow from './NavRow'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LightModeIcon from '@mui/icons-material/LightMode';
import LogoutIcon from '@mui/icons-material/Logout';

import { signOut } from 'firebase/auth';
import { auth} from "../firebase"
import { logOut } from '../redux/reducerSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import { fetchData } from '../Utils/fetchFromAPI';




const NavBar = ({toggle, toggler, isDarkTheme}) => {
  //const [selectedCategory, setSelectedCategory] = useState("New")
  const [LightOn, setLightOff] = useState(isDarkTheme)

 const userName = useSelector((state)=> state.user.name )
  const userPhoto = useSelector((state)=> state.user.photo)


 const  dispatch = useDispatch()
 const navigate = useNavigate()




 const SwitchItOn = ()=>{
  setLightOff(!LightOn)
  toggler()
 }


 const signOutBtn = (()=>{
  console.log(`this is an error from the ${signOutBtn}` )
    signOut(auth).then((res)=>{
    
      dispatch(logOut())
      setTimeout(()=>{
        navigate("/login")
      }, 3000)
    }).catch((err)=> console.log(err))
  })



    

   


return (
  <>
    
    <Container  >
      
      <Item toggle={toggle}  >

    

     <NavRow  Icon={HomeIcon}          title="Home"/>
    
    
     <NavRow  Icon={WhatshotIcon}        title = "Trending"/>
   
  
     <NavRow   Icon={SubscriptionsIcon}   title = "subscription"  />
 
     <hr />
  
     <NavRow Icon={VideoLibraryIcon}      title="Library" />
   
    

     <NavRow Icon={HistoryIcon}         title="History" />
    
      

     <NavRow Icon={OndemandVideoIcon}    title="Your videos" />
   
     

       

     <NavRow Icon={WatchLaterIcon}      title="Watch Later" />
    
      

     <NavRow Icon={ThumbUpIcon}        title="Liked videos" />
     
     <BrightnessBtn onClick={SwitchItOn} >   
     <NavRow Icon={LightModeIcon}  title = "LightMode" />
     </BrightnessBtn>

     <ExitBtn  onClick={signOutBtn}>
     < NavRow  Icon= {LogoutIcon }    title="Log Out"/>
   
      </ExitBtn>
   
     </Item>  
     
    </Container>
 
  </>
)
}












export default NavBar

const Container  = styled.div`

background-color:white;

flex:0.2;



`

  


const Item = styled.div`
//display:inline-block;

grid-area: sidebar;
//font-weight:10px;

display:block;
//margin-left:10px;



hr{
  height: 1px;
  border:0;
background-color:lightgray;
 
  margin: 20px -30px 20px;
  

}
svg{
  font-size:15px;


}
transition: transform 0.4s ease-in; 



  @media(max-width: 760px ) {
   
  transform: ${(props)=> props.toggle ? "translateX(-150%)" : "" }

}
a{
  text-decoration:none;
}
`

  const ExitBtn = styled.span`
    
  `

const BrightnessBtn = styled.span`
  
`



