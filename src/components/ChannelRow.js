
import React from 'react';
import styled from "styled-components"
import Avatar from '@mui/material/Avatar';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const ChannelRow = ({image, channel,verified, subs, noOfVideos, description}) => {

  return (
    <Container>
  <ChannelBox>


    <ChannelLogo> 
   <img src={image} alt={channel}/>
        

    </ChannelLogo>
    

    <ChannelText> 
    <h4>{channel} {verified && <CheckCircleOutlineIcon/> }  </h4>
   <p>{subs} subscribers . {noOfVideos} videos </p>
   <p>{description}</p>
   </ChannelText>
  </ChannelBox>

    </Container>
  )
}

export default ChannelRow


const Container = styled.div`
width:70%;
display:flex;
align-items:center;



`


const ChannelBox = styled.div`
margin-left:8px;
display:flex;
align-items:center;

    


`
const ChannelLogo = styled(Avatar)`
  width:120px !important;
   height:120px !important;
   margin:10px 60px;
    img{
    width:120px !important;
height:120px !important;


  }  



`
const ChannelText = styled.div`
display:flex;
flex-direction:column;

p{
    color:#606060;
    font-size: small !important;

}
h4{
    display:flex;
    align-items:center;
   justify-content:space-between;
}


`