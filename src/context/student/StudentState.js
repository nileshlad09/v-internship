import React, { useState } from "react";
import studentContext from "./studentContext";

const StudentState = (props) => {



  const flattenObject = (obj) => {
    const flattened = {}
  
    Object.keys(obj).forEach((key) => {
      const value = obj[key]
  
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        Object.assign(flattened, flattenObject(value))
      } else {
        flattened[key] = value
      }
    })
  
    return flattened
  }

  const [crediantial2, setCrediential2] = useState({});
  const addInternship=(crediantial)=>{
    setCrediential2({ ...crediantial2, crediantial });
  }

  console.log(flattenObject(crediantial2));
  const formSubmit=()=>{
  }





  const[alert,setAlert]=useState(null);
  const  showAlert=(type,message)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }



  return (
    <studentContext.Provider value={{ addInternship,crediantial2,alert,showAlert,formSubmit }}>
      {props.children}
    </studentContext.Provider>
  );
};

export default StudentState;