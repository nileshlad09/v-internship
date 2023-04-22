import React from "react";
import { useContext } from "react";
import studentContext from "../context/student/studentContext";

const Alert = () => {
  const context = useContext(studentContext);
  const { alert } = context;
  const capitalize = (word) => {
    if (word === "danger") {
      word = "error";
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div>
      <div style={{ height: "50px",position:"absolute",width:"100%",zIndex:"1" }} className="alertmsg">
        {alert && (
          <div
            className={`alert alert-${alert.type} alert-dismissible fade show`}
            role="alert"
          >
            <strong>{capitalize(alert.type)}</strong>: {alert.msg}
          </div>
        )}
      </div>
    </div>
  );
};

export default Alert;