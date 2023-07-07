import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect, useState } from "react";




 export function useAuth() {
    const [currentUser, setCurrentUser] = useState("")

  useEffect(()=>{
    const unSubScribed = onAuthStateChanged(auth, ((user)=>{
        setCurrentUser(user)

    }));
     return unSubScribed

  }, []);

  


return currentUser
}


export default useAuth







