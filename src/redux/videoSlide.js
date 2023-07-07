import { createSlice } from "@reduxjs/toolkit";





const initialState = {
    name: [],
    selectedVideos : null,
 }





const videoSlice = createSlice({

     name:"slide",
     initialState,
     error: false,

     reducers:{


        setSelectedVideos: ((state, action)=>{

            state.selectedVideos = action.payload
            state.name = action.payload
            state.error = true
        }),

        notSelectedVideos:((state, action)=>{
            state.error = true
        })
     }



})


export default videoSlice.reducer
export const {setSelectedVideos, notSelectedVideos}  = videoSlice.actions