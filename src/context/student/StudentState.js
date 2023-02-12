import React, { useState } from "react";
import studentContext from "./studentContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { getStorage, ref } from "firebase/storage";
import { write } from "xlsx";

const StudentState = (props) => {

  const storage = getStorage();
const storageRef = ref(storage, 'some-child');

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

  async function writetoDB(crediantial2){
  try {
    const docRef = await addDoc(collection(db, "students"), {
     crediantial2: crediantial2,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

  const formSubmit=()=>{
    console.log(crediantial2)
    console.log("REACHED HERE")
    writetoDB(flattenObject(crediantial2));
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