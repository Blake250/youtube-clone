import React from 'react'
import styled from "styled-components";
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from "./ChannelRow"
import VideoRow from './VideoRow';
import { useState } from 'react';



const SearchPage= () => {
  const [lightOn, LightOff] = useState()
  return (


    <Container>
      <Item>
        <TuneIcon/>
      <h3>FILTER</h3>
  
      </Item>
      <hr />
      <ChannelRow
      image = "https://yt3.ggpht.com/ytc/AMLnZu9UWrGceKWaqm8AF89vuxrEt8MO3E59qOoQ785Lew=s88-c-k-c0x00ffffff-no-rj"
      channel = "Blake Programmer"
      verified
      subs= "660k"
      noOfVideos = {382}
      description = 
      "persistance is the key of being  a programmer keep pushing and never give up for nothing good comes easy so keep striving for success.. "
                                      
                         
      />
    <br />
    <hr />
    
   <VideoRow
   views = "1.5M"
  
 
   subs= "660k"
   timestamp=" 59 secs ago"
   description = "How To Become A web Developer in Fifteen Days by putting more effort to see that everything goes smoothly and never give up fpr nothimg good comes easy "
   channel = "Blake Programmer"
   title = "Let's Build a Youtube Clone"
   image = "   https://cdn.pixabay.com/photo/2017/06/29/01/02/business-man-2452805__480.jpg "
   
   />
   
   <VideoRow
   views = "1.5M"
  
 
   subs= "660k"
   timestamp=" 59 secs ago"
   description = "How To Become A web Developer in Fifteen Days by putting more effort to see that everything goes smoothly and never give up fpr nothimg good comes easy "
   channel = "Blake Programmer"
   title = "Let's Build a Youtube Clone"
   image = "   https://cdn.pixabay.com/photo/2017/06/29/01/02/business-man-2452805__480.jpg "
   
   />
   
   <VideoRow
   views = "1.5M"
  
 
   subs= "660k"
   timestamp=" 59 secs ago"
   description = "How To Become A web Developer in Fifteen Days by putting more effort to see that everything goes smoothly and never give up fpr nothimg good comes easy "
   channel = "Blake Programmer"
   title = "Let's Build a Youtube Clone"
   image = "   https://cdn.pixabay.com/photo/2017/06/29/01/02/business-man-2452805__480.jpg "
   
   />
   
   <VideoRow
   views = "1.5M"
  
 
   subs= "660k"
   timestamp=" 59 secs ago"
   description = "How To Become A web Developer in Fifteen Days by putting more effort to see that everything goes smoothly and never give up fpr nothimg good comes easy "
   channel = "Blake Programmer"
   title = "Let's Build a Youtube Clone"
   image = "   https://cdn.pixabay.com/photo/2017/06/29/01/02/business-man-2452805__480.jpg "
   
   />
   
   <VideoRow
   views = "1.5M"
  
 
   subs= "660k"
   timestamp=" 59 secs ago"
   description = "How To Become A web Developer in Fifteen Days by putting more effort to see that everything goes smoothly and never give up fpr nothimg good comes easy "
   channel = "Blake Programmer"
   title = "Let's Build a Youtube Clone"
   image = "   https://cdn.pixabay.com/photo/2017/06/29/01/02/business-man-2452805__480.jpg "
   
   />
   
   <VideoRow
   views = "1.5M"
  
 
   subs= "660k"
   timestamp=" 59 secs ago"
   description = "How To Become A web Developer in Fifteen Days by putting more effort to see that everything goes smoothly and never give up fpr nothimg good comes easy "
   channel = "Blake Programmer"
   title = "Let's Build a Youtube Clone"
   image = "   https://cdn.pixabay.com/photo/2017/06/29/01/02/business-man-2452805__480.jpg "
   
   />
   
   <VideoRow
   views = "1.5M"
  
 
   subs= "660k"
   timestamp=" 59 secs ago"
   description = "How To Become A web Developer in Fifteen Days by putting more effort to see that everything goes smoothly and never give up fpr nothimg good comes easy "
   channel = "Blake Programmer"
   title = "Let's Build a Youtube Clone"
   image = "   https://cdn.pixabay.com/photo/2017/06/29/01/02/business-man-2452805__480.jpg "
   
   />
   
   <VideoRow
   views = "1.5M"
  
 
   subs= "660k"
   timestamp=" 59 secs ago"
   description = "How To Become A web Developer in Fifteen Days by putting more effort to see that everything goes smoothly and never give up fpr nothimg good comes easy "
   channel = "Blake Programmer"
   title = "Let's Build a Youtube Clone"
   image = "   https://cdn.pixabay.com/photo/2017/06/29/01/02/business-man-2452805__480.jpg "
   
   />
   
   <VideoRow
   views = "1.5M"
  
 
   subs= "660k"
   timestamp=" 59 secs ago"
   description = "How To Become A web Developer in Fifteen Days by putting more effort to see that everything goes smoothly and never give up fpr nothimg good comes easy "
   channel = "Blake Programmer"
   title = "Let's Build a Youtube Clone"
   image = "   https://cdn.pixabay.com/photo/2017/06/29/01/02/business-man-2452805__480.jpg "
   
   />
   <var>
   <VideoRow
   views = "1.5M"
  
 
   subs= "660k"
   timestamp=" 59 secs ago"
   description = "How To Become A web Developer in Fifteen Days by putting more effort to see that everything goes smoothly and never give up fpr nothimg good comes easy "
   channel = "Blake Programmer"
   title = "Let's Build a Youtube Clone"
   image = "   https://cdn.pixabay.com/photo/2017/06/29/01/02/business-man-2452805__480.jpg "
   
   /></var>

      
      </Container>
  )
}

export default SearchPage



const Container = styled.div`
grid-area: searchPage;
//background-color:#edf2f8;
background-color:${(props)=> props.theme.bgContent};

margin-right:30px;
margin-left:-50px;
width:150%;
flex:1;

@media (max-width:760px) {
 
  width:100%;
 background-color:${(props)=>props.theme.bgContent};
 margin-left:25px;
 

  
}
hr{
 border:0;
 height:1.5px;
 background-color:lightgray;
 margin-top:-5px;
 margin-bottom:10px;


}



`
const Item = styled.div`

display:flex;
align-items:center;
color:#606060;
font-size:xx-small !important;
padding: 20px ;
h3{
 margin-left:8px;
}

  



`