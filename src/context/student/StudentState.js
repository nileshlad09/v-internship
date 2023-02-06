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
  console.log(crediantial2);
  console.log(flattenObject(crediantial2));



  return (
    <studentContext.Provider value={{ addInternship,crediantial2 }}>
      {props.children}
    </studentContext.Provider>
  );
};

export default StudentState;