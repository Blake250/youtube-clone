import React, {useState, useEffect} from 'react'

import styled from "styled-components"
//import NavBar from './NavBar'
import { fetchData } from '../Utils/fetchFromAPI'



const NavRow = ({selected, title, Icon}) => {
    const [active, setActive] = useState(false)
   /* const [selectedCategory, setSelectedCategory] = useState("New")
    

   
    useEffect(() => {
     
    fetchData(`search?part=snippet&q=${selectedCategory}`)
    
      
    }, [selectedCategory])*/
   




  return (
    <>  
    
   
    {active && selected} 
    <Container onClick={()=> setActive(!active)} active= {active}>
       
       <IconBtn onClick={()=> setActive(!active)} active={active}>   
      
       <Icon/>
      </IconBtn>
        
   

    <Title onClick={()=> setActive(!active)} active={active} >
  <h4> {title}</h4>
  </Title>
    </Container>

    </>
  )
}

export default NavRow


const Container = styled.div`
display:flex;
align-items:center;
flex:1;


padding-bottom:10px;


background-color: ${(props)=> props.active ? "lightgray" : " " };
width: ${(props)=> props.active ? "130%" : ""};

&:hover{
    cursor:pointer;
    background-color:lightgray;
   
   width:130%;

 

   
    
}
@media (max-width:768px) {
 

  width:130%;
  height:100%;
    background-color: ${(props)=> props.active ? "lightgray" : " " };
   
  

     &:hover  {
   cursor:pointer;
   background-color:lightgray;
   margin:0;
   
 
     }
    };

      
    
`

const Title  = styled.div`
font-weight:600;
font-size:11px;
flex:1;
margin-left:-9px;
padding-right:6px;



&:hover{
    font-weight:600;
    font-size:12px;
    margin:0;
    
   
}
font-weight: ${(props)=> props.active ? "700" : ""};
white-space : nowrap;
margin-left:8px;



`

const IconBtn = styled.div`

font-size:large !important;





&:hover{
color:red;
}

color: ${(props)=> props.active ? "red" : " "}


    
`
const SideBar = styled.div`
color:#606060;
font-size: xx-large !important;
@media (min-width: 700px) {
  display:none
  
}




&:hover{
color:red;
}

color: ${(props)=> props.active ? "red" : " "}



    

`

const BoxContent = styled.span`


`