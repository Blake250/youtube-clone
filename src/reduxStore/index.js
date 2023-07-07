




import { configureStore,combineReducers } from "@reduxjs/toolkit";
import reducer from "../redux/reducerSlice";
import { loadState, saveState  } from "../localStorage";

import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage'


import  youTubeSlice  from "../redux/extraReducer"
import  youTubeData from "../redux/videoReducer";
import videoSlide from "../redux/videoSlide";




import {
 
    persistReducer,
   
  } from 'redux-persist';


  /*const perState = localStorage.getItem('reduxState') 
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {}*/


  


  const perState = loadState();




const rootReducer = combineReducers( {
  user:reducer,
  youtube:youTubeSlice,
  videos: youTubeData,



//  slide: videoSlide,

} )




  const persistConfig = {
    key: 'slice',
    version: 1,
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  
    const store =  configureStore({

      
     
   reducer:{
     
    user:persistedReducer,
      
  
    },
     // userReducer : userSlice,
    middleware: [thunk],
    devTools:process.env.NODE_ENV !== "production",
   
  
     
    
    perState:perState,
 
      
   
  })


  



 /* store.subscribe ( ()=>{
    saveState({
      todo: store.getState().todo
    });

  })

  store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  })*/


  
  export default store 

















/*import { configureStore,combineReducers } from "@reduxjs/toolkit";
import loginSlice from "../redux/reducerSlice";
import { loadState, saveState  } from "../localStorage";

import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage'



import youTubeSlice from "../redux/extraReducer"
import  videoSlice from "../redux/videoReducer";





import {
 
    persistReducer,
   
  } from 'redux-persist';

  //const perState = localStorage.getItem('reduxState') 
 // ? JSON.parse(localStorage.getItem('reduxState'))
 // : {}


  


  const perState = loadState();




const rootReducer = combineReducers( {
  users:loginSlice,
  youtube:youTubeSlice,
  videos: videoSlice,

} )




  const persistConfig = {
    key: 'slice',
    version: 1,
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  
    const store =  configureStore({

      
     
   
     
 
      
      reducer: persistedReducer,
    
     // userReducer : userSlice,
    middleware: [thunk],
    devTools:process.env.NODE_ENV !== "production",
   
  
     
    
    perState:perState,
 
      




   
  })


  store.subscribe ( ()=>{
    saveState({
      todo: store.getState().todo
    });

  })

  store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  })


  
  export default store */
  











  