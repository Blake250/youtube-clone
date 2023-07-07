import { createSlice } from '@reduxjs/toolkit'

/*const userInfo = localStorage.getItem("Info") ? localStorage.getItem("info"): null;

const userPhotoURL = localStorage.getItem("photo") ? localStorage.getItem("photo") : null;
const userDetails ={
  userInfo,
  userPhotoURL
}*/



let initialState = {
   name: " ",
   email: "",
   photo : " ",
   isloading: false,
   Error:false,
   
  
}
/*if(localStorage.getItem("userDetails")){
  initialState.name = JSON.parse(localStorage.getItem("userDetails"));
} else{
  initialState.name = userDetails
}*/

const loginSlice = createSlice({
  name: "users",
  initialState,
  reducers: {

loginSuccess : (state)=>{
      state.isloading = true;
      state.Error = false

      


   },
   createAccount : (state, action)=>{
      state.name= action.payload.name
      state.photo= action.payload.photo;
      state.email = action.payload.email
   

   },
   loginFailure: (state, action)=>{
       state.Error= true;
       state.isloading = action.payload
   },

   logOut: (state)=>{
     state.name = null;
     state.photo= null
     state.email = null
      state.isloading = false;
      state.Error = false
    
   }

   

  }


});




//MIDDLEWARE

export const { createAccount, loginFailure, logOut, loginSuccess} = loginSlice.actions

export default loginSlice.reducer



