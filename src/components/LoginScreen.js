import React, {useState} from 'react'
import styled from 'styled-components'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword,updateProfile, signInWithEmailAndPassword } from 'firebase/auth'
import { createAccount, loginFailure, loginSuccess } from '../redux/reducerSlice'
import { useDispatch } from 'react-redux'
import { useTransition } from 'react'
import {  useNavigate } from 'react-router-dom'

function LoginScreen() {


  const [name, setName] = useState("")
  const [email, setEmail] = useState(" ")
  const [password, setPassword] = useState("")
  const [profilePic, setProfilePic] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  
const register = (async(e)=>{
  if(!name){
    return alert("Please enter your Full Name")
  }
  else {
   createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential)=>{
    navigate("/")
        const user = userCredential.user
     
        console.log(user)

        updateProfile(user,{

          displayName:name,
          photoURL:profilePic
        }).then(()=>{
          dispatch(createAccount({
            email:user.email,
            uid:user.uid,
            displayName:name,
            photourl:profilePic,

          }))
         
        })
        setEmail("");
        setPassword("");
        setProfilePic(" ")

        
   }

   
   ).catch((error)=> dispatch(loginFailure(error)))
  }

 
  


})




  
   

  




const loginToApp = (()=>{
 

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential)=>{

    navigate("/")
    const user = userCredential.user
    console.log(user)
    dispatch(createAccount({
      email:user.email,
      uid:user.uid,
      displayName:user.displayName,
      photoUrl:user.photoURL,

    }))

    setEmail("");
    setPassword("");

  }).catch((error)=> console.log(error))

})



  const handleSubmit = ((e)=>{
    e.preventDefault()


   
   
  })


  return (


    <Container>
      <Item>
     <img src="/image/youtube-logo.jpg" alt="" />

   
     
      <InputData>
    
      
      <form onClick={handleSubmit}  >
       <input type="text" 
       placeholder='Full Name (required if registering) '
       value = {name}
       onChange={((e)=> setName(e.target.value))}
       
       />


       <input type="text" 
       placeholder='Profile Pic URL(optional)'
       value={profilePic}
       onChange={((e)=> setProfilePic(e.target.value))}
     
       />


       <input type="email"
         placeholder='Email' 
         value={email}
         onChange={((e)=> setEmail(e.target.value))}
         
         />


        <input type="password"
         placeholder='Password'
         value={password}
         
         onChange={((e)=> setPassword(e.target.value))}/>

        <span>
          <button type='submit' onClick={loginToApp}  >Sign In</button>
        </span>
 
 
      </form>
      <p>
      Not a member? {""}
      <span onClick={ register} >Register Now</span>
      </p>
      
      </InputData>
   
      </Item>
      </Container>
  )
}

export default LoginScreen



const Container = styled.div`

//background-color:lightgray;
//background-color:"#626469";
background-color:#ccddff;
width:100%;
height:100%;

;

`

const Item = styled.div`

display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
height:100%;


  @media (max-width: 768px) {
  
    
  img{
      
    width: 40% !important;;
   // height:40vh;
    // margin-top:20px;
     object-fit:contain;
    border-radius:25px !important;
  
  }
  form{


    input{
      width:280px !important;
      height:30px;
    }
  }
  
   &>button{
    width:300px;
    height:40px !important;
    padding:5px;
   } 
 
  }
  

img{
     
  width:20%;
  //height:30%;
   margin-top:30px;
   object-fit:contain;
   border-radius:10px;

}
  
`

const InputData = styled.div`
margin-top:12px;
margin-bottom:20px;
z-index:5;
  position: relative;


p{
  cursor: pointer;
  color:#0074b1;
  font-size:12px;
  text-align:center;
  margin-top:10px;
  font-weight:600;
  z-index:5;
  position: relative;
  

  span{
      color:black;
 
  
      &:hover{
        color:gray!important;
       
      }
  }
}
form{
  display:flex;
  flex-direction:column;
  input{
   // padding:0 12px;
   width:350px;
   height:40px;
   font-size:13px;
   opacity:0.5 ;

   border-radius:5px;
   border:1px solid lightgray;
   margin-bottom:5px;
   padding-left:8px;
   &:hover{
      background-color:lightblue;
   }
  
  }


  span{
  
    button{
    width:100%;
    padding:8px;
    background-color:#0074b1;
    border-radius:5px;
    font-size:14px;
    font-weight:400;

    &:hover{
     background-color:rgb(37, 150, 190)
    }


  }

}
}
  
`