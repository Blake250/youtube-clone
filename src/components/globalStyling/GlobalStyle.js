import { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`



::-webkit-scrollbar {
   width: 5px;
   height:40px;
    
   
  };
  
  ::-webkit-scrollbar-corner {
   height: 0px;
   
  
  }

  ::-webkit-scrollbar-track {
    background-color: #edf2f8;
    border-radius: 100vw;
    margin:10px 0;
   margin-block:0.5em ;
  

  }

  ::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 100vw;
    border:0.3em solid grey;
   
  
  
  }
 
`







export default GlobalStyle