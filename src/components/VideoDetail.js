


















import styled from "styled-components";
import SearchFeed from './SearchFeed';
import GroupsBar from './GroupsBar';
import { fetchVideos } from '../redux/extraReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import moment from "moment";
import numeral from "numeral";
import request from "../redux/request";
import InfiniteScroll from "react-infinite-scroll-component";
import "./styling/styling.css"
import { fetchNextPage } from "../redux/videoReducer";
import SkeletonVideo from "./skeleton/SkeletonVideo";

const VideoDetail = ({ groupHandler }) => {
  const [views, setViews] = useState("");
  const [timing, setTiming] = useState("");
  const [channelIcons, setChannelIcons] = useState({});
  const [allVideos, setAllVideos] = useState([]);

  const [loadingVideos, setLoadingVideos] = useState(true);
  const isLoading = useSelector((state)=> state.user.youtube?.isLoading)

  console.log(`this is ${isLoading}`)

  const videos = useSelector((state) => state.user.youtube.obj);
  const Category = useSelector((state)=> state.user.youtube?.Category)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos())
      .then((response) => {
        // console.log(response)
      })
      .catch((error) => console.log(error));
  }, [dispatch]);




    // State and selector definitions...


  useEffect(() => {
    setLoadingVideos(isLoading); // Update the loading state when isLoading changes
  }, [isLoading]);


   const fetchData = (()=>{
    if(Category === "All"){
      dispatch(fetchVideos())
    } else{
      dispatch(fetchVideos(Category))
    }
    
  })


   useEffect(() => {
    dispatch(fetchNextPage())
      .then((response) => {
        console.log(response)
      })
      .catch((error) => console.log(error));
  }, [dispatch]);


 

  


  useEffect(() => {
    if (videos && videos.items && videos.items.length > 0) {
      setAllVideos((prevVideos) => [...prevVideos, ...videos.items]);
    }
  }, [videos]);
  
  





   useEffect(() => {
    if (videos && videos.items && videos.items.length > 0) {
      const videoIds = videos.items.map((video) => video.id);
  
      const getVideoDetails = async () => {
        try {
          const { data } = await request("/videos", {
            params: {
              part: "contentDetails,statistics",
              id: videoIds.join(","),
            },
          });
  
          console.log("API Response:", data); // Log the API response
  
          if (data.items && data.items.length > 0) {
            const { contentDetails, statistics } = data.items[0];
            console.log("Content Details:", contentDetails); // Log the contentDetails property
            console.log("Statistics:", statistics); // Log the statistics property
            setTiming(contentDetails?.duration || "");
            setViews(statistics?.viewCount || "");
          } else {
            console.log("No items found in the API response.");
          }
        } catch (error) {
          console.error("Error fetching video details:", error);
        }
      };
  
      getVideoDetails();
    }
  }, [videos]);
  



  useEffect(() => {
    if (videos && videos.items && videos.items.length > 0) {
      const channelIds = videos.items.map((channel) => channel.snippet.channelId);

      const getChannelData = async () => {
        const { data } = await request("/channels", {
          params: {
            part: "snippet",
            id: channelIds.join(","),
          },
        });





        // Set channel icons
       const icons = {};
        data.items.forEach((item) => {
          icons[item.id] = item.snippet.thumbnails.default;
        });
        setChannelIcons(icons);
      };

      getChannelData();
    }
  }, [videos]);

  return (
    <>    
  
    <Container >
      <h2>Recommended</h2>
      <GroupsBar groupHandler={groupHandler} />


      <VideoBox>
      <InfiniteScroll
  dataLength={allVideos.length} 
  next={fetchData} 
  hasMore={true}
  loader={<div  className="spinner"> 
    


 </div>} 
   
    style={{display:"flex", 
    justifContent:"flexStart" ,  
   flexWrap:"wrap", 
   overflowX:"hidden",
    whiteSpace:"nowrap" ,
     boxSizing:"border-box",
 
    }}    
     
             
>



        { !isLoading 
        //videos &&
          //videos.items &&
          //videos.items
  

           
          
          
       
          
        ?  allVideos
          .map((video) => {

           
            const {
              id,
              snippet: {
                channelId,
                channelTitle,
                title,
                publishedAt,
                thumbnails: { medium },
              },
            } = video;
          //const isVideoLoading = isLoading && !video.id;
      
             

            const seconds = moment.duration(timing).asSeconds();
            const duration = moment.utc(seconds * 1000).format("mm:ss");
                      

            return (
           
   
           <div>    
              <VideoContain  >
               { //!isVideoLoading ?(

         
        //   <span  style={{zIndex:"50", position:"relative"}} > {[...Array(20).fill()].map((_, index)=>{
              
      //  return( 
         //   <div  style={{zIndex:"600", position:"relative"}} >   
          //    <SkeletonVideo key={index}  className="showBtn"  />
     //    </div>
         //  )
                
    

       //  })}
         //   </span>
         
          //  ) :


          
              
            //   (
                <>  
            
                <SearchFeed video={video} id={id} channelId={channelId} />

               
               <VideoData>  

                {medium && <img src={medium.url} alt="" />}
                
                
                <p  >{duration}</p>
                </VideoData>   
               
                <AvatarPhoto>  
               
               
                  <img src={channelIcons[channelId]?.url} alt="" />
                  <h5>{title}</h5>
                  </AvatarPhoto>

                  <DataIcon>
                  <p>{channelTitle}</p>

                  </DataIcon>

                <TitleData>  
               
                
                <span>{numeral(views).format("0.a")}  views  </span>
               
                <span>{moment(publishedAt).fromNow()}</span>
                </TitleData>

             
              

    


               

               

         
          </>
        //  )

           }
              </VideoContain>
              </div>
              
             
            
         
              );
          
              }
          
          )
          : [...Array(20)].map((_, index) => <SkeletonVideo key={index} />)
          }

        
        </InfiniteScroll>
        
      </VideoBox>
     
    
    </Container>
  
 
    </>
  );
};

export default VideoDetail;




const Container = styled.div`


grid-area:videodetail;

border:1px solid black;
//width:95vw;
//width:100%;
max-width:100%;
height:100%;

padding-right:5px;
flex:0.8;


margin:0 !important;
padding:0px !important;


background-color:${(props)=>props.theme.bgContent};
transition:all 0.5s ease-in-out;


box-sizing:border-box !important;
h2{
  padding:30px 100px;
padding-bottom:15px;
padding-top:30px;

};
border-radius:5px;
border:none !important;






@media (max-width:768px) {


  border:1px solid black;
//background-color:#edf2f8;

background-color:${(props)=>props.theme.bgContent};

border: none !important;
width:85vw;
//height:100%;



h2{
  padding:30px 90px;

padding-bottom:15px;
//padding-left: ${(props) => props.toggle ? "60px" : "90px " } !important;
};


}


`
const DataIcon = styled.div`
  color:gray;
  margin-left:50px;
  font-weight:400;
`

 
const VideoContain = styled.div`


  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  //padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  //flex-basis: 33.33%;
  





  

`


const VideoData = styled.div`
  display:flex;

 // padding:  0 10px 0px;
  position: relative;
 justify-content:flex-start;
max-width:100% !important;
height:auto;

img{

border-radius:20px;
object-fit:contain;
width:370px;
}
p{


  color:whitesmoke;
background-color:black;

width:40px !important;

text-align:center;
border-radius:20px;
font-size:14px;
font-weight:600;
position:absolute;
bottom:8px;
padding:4px;
//right:30%;
margin-left:8px;





}




`


const VideoBox = styled.div`


  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 10px;
  box-sizing: border-box !important;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  align-items: flex-start;



p{

&>:nth-child(1){
  margin-bottom:10px;
}
}




@media (max-width:768px) {
  align-items:center;
justify-content:space-around;
display:flex;
flex-wrap:wrap;
box-sizing:content-box;
margin-right:50px;
align-content:flex-start;
padding:10px;
  
}



svg{
  display: inline-block;
    padding: 1em;
    border: 2px solid #f00;
    padding-left:10px;

}





`



const TitleData = styled.div`
display:flex;
padding-left:45px;
align-items:center;
color:gray;
font-size:13px;
font-style:italic;


&:last-child{
  margin-right:5px;
}


  & :nth-child(1){
  color:gray;
 padding:0 5px 0px;
 font-size:14px;




}


  

`


const AvatarPhoto = styled.div`
display:flex;
align-items:center;
max-width: 350px !important;
padding-top:10px;

h5{



  overflow-wrap:break-word;
 white-space:wrap;
 margin-left:6px;
// color:lightskyblue;
font-weight:600;
text-transform:uppercase;

}

img{
  width:40px;
  border-radius:50%;


}

`





























































  





     

        






     


/*import styled from "styled-components";
import SearchFeed from './SearchFeed';
import GroupsBar from './GroupsBar';
import { fetchVideos } from '../redux/extraReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import moment from "moment";
import numeral from "numeral";
import request from "../redux/request";
import InfiniteScroll from "react-infinite-scroll-component";
import "./styling/styling.css"
import { fetchNextPage } from "../redux/videoReducer";
import SkeletonVideo from "./skeleton/SkeletonVideo";

const VideoDetail = ({ groupHandler }) => {
  const [views, setViews] = useState("");
  const [timing, setTiming] = useState("");
  const [channelIcons, setChannelIcons] = useState({});
  const [allVideos, setAllVideos] = useState([]);
  const isLoading = useSelector((state)=> state.user.youtube?.isLoading)
  console.log(`this is ${isLoading}`)

  const videos = useSelector((state) => state.user.youtube.obj);
  const Category = useSelector((state)=> state.user.youtube?.Category)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos())
      .then((response) => {
        // console.log(response)
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  


   const fetchData = (()=>{
    if(Category === "All"){
      dispatch(fetchVideos())
    } else{
      dispatch(fetchVideos(Category))
    }
    
  })


   useEffect(() => {
    dispatch(fetchNextPage())
      .then((response) => {
        console.log(response)
      })
      .catch((error) => console.log(error));
  }, [dispatch]);


 

  


  useEffect(() => {
    if (videos && videos.items && videos.items.length > 0) {
      setAllVideos((prevVideos) => [...prevVideos, ...videos.items]);
    }
  }, [videos]);
  
  





   useEffect(() => {
    if (videos && videos.items && videos.items.length > 0) {
      const videoIds = videos.items.map((video) => video.id);
  
      const getVideoDetails = async () => {
        try {
          const { data } = await request("/videos", {
            params: {
              part: "contentDetails,statistics",
              id: videoIds.join(","),
            },
          });
  
          console.log("API Response:", data); // Log the API response
  
          if (data.items && data.items.length > 0) {
            const { contentDetails, statistics } = data.items[0];
            console.log("Content Details:", contentDetails); // Log the contentDetails property
            console.log("Statistics:", statistics); // Log the statistics property
            setTiming(contentDetails?.duration || "");
            setViews(statistics?.viewCount || "");
          } else {
            console.log("No items found in the API response.");
          }
        } catch (error) {
          console.error("Error fetching video details:", error);
        }
      };
  
      getVideoDetails();
    }
  }, [videos]);
  



  useEffect(() => {
    if (videos && videos.items && videos.items.length > 0) {
      const channelIds = videos.items.map((channel) => channel.snippet.channelId);

      const getChannelData = async () => {
        const { data } = await request("/channels", {
          params: {
            part: "snippet",
            id: channelIds.join(","),
          },
        });





        // Set channel icons
       const icons = {};
        data.items.forEach((item) => {
          icons[item.id] = item.snippet.thumbnails.default;
        });
        setChannelIcons(icons);
      };

      getChannelData();
    }
  }, [videos]);

  return (
    <>    
  
    <Container>
      <h2>Recommended</h2>
      <GroupsBar groupHandler={groupHandler} />


      <VideoBox>
      <InfiniteScroll
  dataLength={allVideos.length} 
  next={fetchData} 
  hasMore={true}
  loader={<div  className="spinner" 


 > </div>} 
   
    style={{display:"flex", 
    justifContent:"flexStart" ,  
   flexWrap:"wrap", 
   overflowX:"hidden",
    whiteSpace:"nowrap" ,
     boxSizing:"border-box"  }}         
             
>



        {//videos &&
          //videos.items &&
          //videos.items
          
          
          
          allVideos
          .map((video) => {
           
            const {
              id,
              snippet: {
                channelId,
                channelTitle,
                title,
                publishedAt,
                thumbnails: { medium },
              },
            } = video;
         //   const isVideoLoading = isLoading && !video.id;

            const seconds = moment.duration(timing).asSeconds();
            const duration = moment.utc(seconds * 1000).format("mm:ss");

            return (
           
   
           <div>    
              <VideoContain>
               {//isVideoLoading ?(

         
           //  <span style={{zIndex:"999", position:"relative"}}> { [...Array(20).fill()].map((_, index)=>{
              
           // return(
             //  <SkeletonVideo key={index} />
         //   )
                
              

             //})} </span>
         //      ) :



              
             //  (
                <>  
            
                <SearchFeed video={video} id={id} channelId={channelId} />

               
               <VideoData>  

                {medium && <img src={medium.url} alt="" />}
                
                
                <p  >{duration}</p>
                </VideoData>   
               
                <AvatarPhoto>  
               
               
                  <img src={channelIcons[channelId]?.url} alt="" />
                  <h5>{title}</h5>
                  </AvatarPhoto>

                  <DataIcon>
                  <p>{channelTitle}</p>

                  </DataIcon>

                <TitleData>  
               
                
                <span>{numeral(views).format("0.a")}  views  </span>
               
                <span>{moment(publishedAt).fromNow()}</span>
                </TitleData>

             
              

    


               

               

         
          </>
           )}
              </VideoContain>
              </div>
              
               
            
         
            );
          })}
        </InfiniteScroll>
      </VideoBox>
     
    
    </Container>
  
 
    </>
  );
};

export default VideoDetail;




const Container = styled.div`


grid-area:videodetail;

border:1px solid black;
//width:95vw;
//width:100%;
max-width:100%;
height:100%;

padding-right:5px;
flex:0.8;

margin:0 !important;
padding:0px !important;


background-color:${(props)=>props.theme.bgContent};
transition:all 0.5s ease-in-out;


box-sizing:border-box !important;
h2{
  padding:30px 100px;
padding-bottom:15px;
padding-top:30px;

};
border-radius:5px;
border:none !important;






@media (max-width:768px) {


  border:1px solid black;
//background-color:#edf2f8;

background-color:${(props)=>props.theme.bgContent};

border: none !important;
width:85vw;
//height:100%;



h2{
  padding:30px 90px;

padding-bottom:15px;
//padding-left: ${(props) => props.toggle ? "60px" : "90px " } !important;
};


}


`
const DataIcon = styled.div`
  color:gray;
  margin-left:50px;
  font-weight:400;
`

 
const VideoContain = styled.div`


  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  //padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  //flex-basis: 33.33%;
  





  

`


const VideoData = styled.div`
  display:flex;

 // padding:  0 10px 0px;
  position: relative;
 justify-content:flex-start;
max-width:100% !important;
height:auto;
img{

border-radius:20px;
object-fit:contain;
width:370px;
}
p{


  color:whitesmoke;
background-color:black;

width:40px !important;

text-align:center;
border-radius:20px;
font-size:14px;
font-weight:600;
position:absolute;
bottom:8px;
padding:4px;
//right:30%;
margin-left:8px;





}




`


const VideoBox = styled.div`




  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 10px;
  box-sizing: border-box !important;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  align-items: flex-start;




p{

&>:nth-child(1){
  margin-bottom:10px;
}
}




@media (max-width:768px) {
  align-items:center;
justify-content:space-around;
display:flex;
flex-wrap:wrap;
box-sizing:content-box;
margin-right:50px;
align-content:flex-start;
padding:10px;
  
}



svg{
  display: inline-block;
    padding: 1em;
    border: 2px solid #f00;
    padding-left:10px;

}





`



const TitleData = styled.div`
display:flex;
padding-left:45px;
align-items:center;
color:gray;
font-size:13px;
font-style:italic;


&:last-child{
  margin-right:5px;
}


  & :nth-child(1){
  color:gray;
 padding:0 5px 0px;
 font-size:14px;




}


  

`


const AvatarPhoto = styled.div`
display:flex;
align-items:center;
max-width: 350px !important;
padding-top:10px;

h5{



  overflow-wrap:break-word;
 white-space:wrap;
 margin-left:6px;
// color:lightskyblue;
font-weight:600;
text-transform:uppercase;

}

img{
  width:40px;
  border-radius:50%;


}

`*/












































  





     

        
























