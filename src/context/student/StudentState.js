import React, { useEffect, useState} from "react";
import studentContext from "./studentContext";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from "../../firebase";


const StudentState = (props) => {
  
  const [crediantial2, setCrediential2] = useState({});
  const addInternship = (crediantial) => {
    setCrediential2({ ...crediantial2, ...crediantial });
  }
  
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(firebaseApp);
  
  useEffect(()=>{
     onAuthStateChanged(auth,(data)=>{
      if(data){
        setCurrentUser(data);
        setLoading(true);
      }else{
        setLoading(false)
      }
    })
    // eslint-disable-next-line
  },[])

  return (
    <studentContext.Provider value={{addInternship, crediantial2, alert, showAlert,setCrediential2,currentUser,loading}}>
      {props.children}
    </studentContext.Provider>
  );
};

export default StudentState;