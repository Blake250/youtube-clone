
import React from 'react'
import styled from "styled-components";
import NavBar from './NavBar';
import VideoDetail from './VideoDetail';
//import SearchPage from './SearchPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchVideos } from '../redux/extraReducer';










const Home = ({toggle, toggler, isDarkTheme}) => {



  return (
    <>
    <Container  >

      <LayOut>
     <NavBar toggler={toggler} isDarkTheme={isDarkTheme} />
     <VideoDetail />
    

   

      </LayOut>

   
    </Container>
      
  


    </>
  )
}

export default Home

const Container = styled.div`

`


const LayOut = styled.div`


display:grid;
grid-template-areas: "  navbar  videodetail ";
grid-template-columns: minmax(0, 20%), minmax( 0, 80% );



grid-template-rows:auto;

//flex:1;

@media (max-width:760px) {
  display:grid;
grid-template-areas: "  navbar  videodetail ";
grid-template-columns: minmax(0, 20%), minmax( 0, 80% );





grid-template-rows:auto;

//flex:1;
  
}











`