import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

//import { async } from "@firebase/util"
import { HOME_VIDEOS_REQUEST } from "../redux/actionType"
import request from "../api"





























//export   const BASE_URL =


/*const initialState = {
    loading: false,
    users : [],
    error : "",
}



export const fetchUsers = createAsyncThunk("user/fetchUsers", async (arg,{ rejectWithValue})=>{

    
try {
  
    fetch(` https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=${process.env.REACT_APP_API_KEY}`)
    .then((res)=>{
      res.json()
    })
  
    
} catch (error) {
    rejectWithValue(error.response)
    
}

 


    

    

   // .then((resp)=> resp.data)


})


const userSlice = createSlice({
    name : "user",
    initialState,
    extraReducers: ((builder)=>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfiiled, ((state, action)=>{
           state.loading = false
           state.users = action.payload
           state.error = ''

        }))
        builder.addCase(fetchUsers.rejected, ((state, action)=>{

            state.loading = false
            state.users = action.payload
            state.error = action.error.message

        }))

    })

    



})

export default userSlice.reducer */





/*export const getPopularVideos = ()=> async dispatch => {
    try {
        dispatch({
            type : HOME_VIDEOS_REQUEST
        })

     const res = await  request.get("/videos",{
            params :{
                part: "snippet, contentDetails, statistics",
                chart: "mostPopular",
                regionCode : "IN",
                maxResults : 20,
                pageToken: " "
            }

        })
        console.log(res)

        
    } catch (error) {
        
    }

}*/
    

    































