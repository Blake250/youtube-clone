import React from 'react';
import styled from "styled-components";

const VideoRow = (  {views, subs, description, timestamp, channel, title, image}  ) => {
    
  return (
    <Container>
    <VideoBox> 
        <img src={image} alt="" />

  <VideoText>
    <h3>{title}</h3>
    <p>
    {channel} . {""}
    <span>   
    <span>  {subs}  </span> 
     Subscribers 
     </span> {" "}

    {views} views . {timestamp}
    </p>
    
    <p>{description}</p>


 </VideoText>
    
    </VideoBox>

    </Container>
  )
}

export default VideoRow

const Container = styled.div`
width:44rem;
padding-left:30px;


@media (max-width:768px) {
    width:22rem;
padding-left:12px;
    
}

`


const VideoBox = styled.div`

display:flex;
flex:1;
margin-bottom:10px;
max-width:900px;
img{
    width: 270px;
    height:auto;
    object-fit:contain;
    border-radius:20px;
    margin-bottom:17px;
}
@media (max-width:768px) {
    display:flex;
margin-bottom:30px;
max-width:700px;
object-fit:contain;
img{
    width: 160px;
    height:auto;
    object-fit:contain;
    border-radius:20px;
    //margin-top:10px;
    
  
}

    
}
    

`



const VideoText = styled.div`


@media (max-width:768px) {

    margin-left:8px;
p{


    font-size: 10px !important;
    overflow-wrap:break-word;
    color: #606060;
    :nth-child(2){
padding-bottom:5px !important;

span{
    color:blue;
    padding:2px;
    background-color:lightgray;
}

}}}



margin-left:25px;
p{


    font-size: 14px ;
 
    color: #606060;
    :nth-child(2){
padding-bottom:9px;

}

    
}
span{
    color:blue;
    padding:2px;
    background-color:lightgray;

    
}



`