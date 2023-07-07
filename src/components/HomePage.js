import React from 'react'
import styled from 'styled-components'
import NavBar from './NavBar';
import SearchPage from './SearchPage';


const HomePage = ({toggler, isDarkTheme}) => {
  return (
    <Container>
        
        <LayOut>

    <NavBar  toggler={toggler} isDarkTheme={isDarkTheme} />
    <SearchPage/>

        </LayOut>

    
    </Container>
  )
}

export default HomePage


const Container = styled.div`
flex:1;
//display:flex;
`

const LayOut = styled.div`

display:grid;
grid-template-areas: "  navbar  searchPage ";
grid-template-columns: minmax(0, 20%), minmax( 0, 80% );

//display:flex;

flex: 1;

grid-template-rows:auto;


`