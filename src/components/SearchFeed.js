import React, {useEffect} from 'react'
import styled from "styled-components";

import Avatar from '@mui/material/Avatar';

//import { Avatar } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../redux/extraReducer';

import request from '../redux/request';







const SearchFeed = ({image, title, channel, views, timestamp,channelImage}) => {

 //const {id,snippet:{channelId, channelTitle, title, pusblishedAt,thumbnails:{medium}}} = video
 


 /*const videos= useSelector((state)=> state.user.youtube?.obj)
 console.log(videos)

const dispatch = useDispatch()



useEffect(()=>{
   dispatch(fetchVideos())
   .then((response)=>{
  
    
   console.log(response)
 

   })


   .catch((error)=> console.log(error))
 
 
 
 }, [dispatch])

  useEffect (()=>{
   if (videos && videos.items && videos.items.length > 0) {
     const videoIds = videos.items.map((video) => video.id);

   const getVideoDetails = async ()=>{
     const {data} = await request("/videos", {
       params:{
         part:"contentDetails,  statistics",
         id:videoIds.join(","),
       }
     })
     console.log(data.items)
   }
   getVideoDetails()
   }
 
  },[videos])*/









  return (
    <Container>
         
         {
     /*  videos &&  videos.items && videos.items.map((video, id)=>(

            <div  key={id}>  
         
        
            
            <p>   
            video={video}
            id= {video.id}
            
            </p>
            
            </div>
          ))*/

        
        }

      <VideoCard>  
      <PhotoCard>  
      <img src={image} alt="" />

      </PhotoCard>
      <VideoInfo>

   
       
      
    
       
        <VideoText>

          <h4>{title}</h4>
          <p> {channel} </p>
          <p> {views} . {timestamp} </p>
         
        </VideoText>
        </VideoInfo>

        </VideoCard>
      </Container>
  )
}

export default SearchFeed





const Container = styled.div`
width:100%;
height:100%;





`
const VideoCard = styled.div`
  
  //width:270px;
  width:100%;
 // margin-bottom:30px;
 // padding-right:20px;
  h4{
    font-size:14px;
    margin-bottom:5px;
    

  }
 p{
  font-size:13px;
  //color:gray;
  color:${({theme}) => theme.text};
 }
 
  

  
`

const VideoInfo = styled.div`
//display:flex;
margin-top:5px;


svg{
  height:30px !important;
  width:30px !important;
}


 
`

const VideoText = styled.div`

font-size:14px;
margin-left:10px;

  
`

const PhotoCard= styled.div`
line-height:10px;
width:270px;
display:flex;
align-content:flex-start;

img{
  width:100%;
  border-radius:5px;
  


}

  
`