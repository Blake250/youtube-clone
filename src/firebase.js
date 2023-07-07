

import { initializeApp } from "firebase/app";
import  {getFirestore} from "firebase/firestore";
import {GoogleAuthProvider, getAuth} from  "firebase/auth";
import {getStorage} from "firebase/storage"






const firebaseConfig = {
  apiKey: "AIzaSyBfCj3DSd6TOkbEuHQmXlpHvOAUvjJxp7o",
  authDomain: "clone-of-youtybe2.firebaseapp.com",
  projectId: "clone-of-youtybe2",
  storageBucket: "clone-of-youtybe2.appspot.com",
  messagingSenderId: "94992274138",
  appId: "1:94992274138:web:32828c70868cf2fd428be3"
};







const firebaseApp = initializeApp(firebaseConfig)

 const auth = getAuth(firebaseApp);

 const db = getFirestore(firebaseApp);

 const storage = getStorage(firebaseApp);

const provider = new GoogleAuthProvider(firebaseApp);
provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl")



export {auth, provider, storage}
export default db;