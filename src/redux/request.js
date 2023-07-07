import axios from "axios";


const KEYA  = "AIzaSyADQ99_g_VS_fVF7kVcWZdwgdru6vVN2VE"
const KEY =   "AIzaSyB7uq9--01MffhXoVxVO-AnLBPxgnfn-zo"

const request = axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3",
    params:{


      KEY: KEYA

    }
       // key: process.env.REACT_APP_YOUTUBE_DATA_API_KEYS 
    
    
    
})


export default request