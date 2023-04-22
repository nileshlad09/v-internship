import React, { useState} from "react";
import studentContext from "./studentContext";

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
    }, 1500);
  }
  
  return (
    <studentContext.Provider value={{addInternship, crediantial2, alert, showAlert,setCrediential2 }}>
      {props.children}
    </studentContext.Provider>
  );
};

export default StudentState;