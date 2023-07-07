
import React, {useState, useEffect} from 'react'
import styled from  "styled-components";
import { fetchVideos } from '../redux/extraReducer';
import { classBar } from '../redux/videoReducer';
import request from '../redux/request';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNextPage } from '../redux/videoReducer';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import "./styling/styling.css"

const keyWords = [

  "All", "Vitality", "Bournemouth.",  "Sport." ,   "Barcelona", "Arsenal ",  "Emirates",  "Stadium. ",  " Chelsea", 
   " Community ",  "  Profile", " Java", "Python ",  " c++",  "Come On Eileen", "Eleanor Rigby" , 
   "Johnny B. Goode", "Darling Nikki," ,   "Caroline," , " Visual Basic ",  "  JavaScript",  " PHP.",  "C#",  "Rhiannon" , "Fleetwood Mac",
   "A Boy Named Sue",
 
 
 ]



















   


const GroupsBar = () => {
    const [group, setGroup] = useState("All")
    const [videos, setVideos] = useState([]);
    
    const dispatch = useDispatch()
 //const videoA = useSelector(state=> state.user.youTube.obj)
//console.log(videoA)

  //const videoData = useSelector((state)=> state.user.youtube?.obj)
   //console.log(videoData)
 
   //const nextPageToken = useSelector((state) => state.user.videos?.activeCategory);
 
    
   

/*useEffect(() => {
    dispatch(fetchNextPage())
      .then((response) => {
        console.log(response)
      })
      .catch((error) => console.log(error));
  }, [dispatch]);*/



  
  /*const fetchData = () => {
    if (group === "All") {
      dispatch(fetchVideos(""));
    } else {
      dispatch(fetchVideos(group));
    }
  };*/
  






     const groupHandler = (value) =>{
        setGroup(value)
       
      
    // dispatch(fetchVideos(value))
    if(value === "All"){
      dispatch(fetchVideos( ))
    }else{
      dispatch(fetchVideos(value))
    }

    
      
   
      console.log(value)
        }

    



  return (
    <>
   
    <Contain>
      
      <GroupItems  > 
     
      <div>
        {videos.map((video) => (
          <div key={video.id}>{video.title}</div>
        ))}
      </div>
      {
      keyWords.map((items, i)=>(

       <div
       onClick={()=> groupHandler(items)}
       key={i}
       className={group === items ? "selected" : ""}
   
  
        
   
       >{items}


       </div>


      ) )    
      

  

    }


</GroupItems>





    </Contain>
 
    </>
  )
}

export default GroupsBar






const Contain= styled.div`


width:100%;

`

const GroupItems = styled.button`


box-sizing:content-box;
  flex:1;
 width:100%;
  display:flex;
 
  flex-wrap:nowrap;

 
 

  border:none;
 background-color: transparent;
 //background-color:${({theme}) => theme.text};
 
//overflow-x:scroll;
padding:10px;
@media (max-width:760px){

}






&::-webkit-scrollbar{
  height:0px;
 // width:20px;
 

}


scrollbar-width:none;


div{
vertical-align:middle;


  border:1px solid black;
  padding:5px;
  border-radius:12px;
  margin:3px;
  padding-right:8px;

  white-space: nowrap;

  &:hover{
  background-color:lightgray;
  display:flex;
  
 }




&.selected{


 ${({id, group})=> group === id ? "background-color : #c7c3c3" : "  " };
 ${({id, group})=> group === id ? "border-color : #fff" : ""}
}

 
  
 }


`




