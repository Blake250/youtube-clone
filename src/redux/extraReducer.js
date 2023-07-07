import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import request from "./request";
import axios from "axios";





export const fetchVideos = createAsyncThunk(
  "youTubeSlice/fetchVideos",
  async (group, { rejectWithValue }) => {
    try {
      let params = {
        part: "snippet",
        maxResults: 20,
        pageToken: "",
        type: "video",
        activeCategory: ""
      };

      if (group !== "All") {
        params.q = group;
      }


      let url = "/search?"; // Start building the URL

      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          url += `${key}=${params[key]}&`; // Append each parameter to the URL
        }
      }

      const response = await request.get("/search", { params });
     return response.data;
   //const { items, nextPageToken } = response.data;
//return { videos: items, nextPageToken };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);





    


  
  
const  initialState ={
  obj:[],
  isLoading:false,
  nextPageToken: null,
  Category: "All"
  
  

}





const youTubeSlice = createSlice({
  name:"youtube",
  initialState,

  reducers:{
   

  },


 extraReducers:((builder)=>{
        builder
        .addCase(fetchVideos.pending,  ((state)=>{
            state.isLoading = true;
            console.log('Fetching videos pending...');
           
        }))

        .addCase(fetchVideos.fulfilled, ((state, action)=>{

      // state.obj = [...state.obj, ...action.payload]
       state.nextPageToken = action.payload.nextPageToken;
      state.Category = action.payload.Category;
       state.isLoading = false;
       state.obj = action.payload
    
  
           
       console.log('Fetching videos fulfilled...');

        
    
       
    }))   
        
          
          
    
        .addCase(fetchVideos.rejected, ((state)=>{
         
            state.isLoading = false
            console.log('Fetching videos rejected...');
        }))



      })





    })

    export default youTubeSlice.reducer