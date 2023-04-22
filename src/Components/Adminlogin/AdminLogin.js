import React, { useState } from 'react'
import "./adminlogin.css";
import { useContext } from "react";
import studentContext from '../../context/student/studentContext';
import { AuthErrorCodes, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from '../../firebase';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';



const AdminLogin = () => {
  const { state, dispatch } = useContext(UserContext)
  const context = useContext(studentContext);

  const { showAlert } = context;

  const [crediantial, setCrediential] = useState({});

  const onchange = (e) => {
    setCrediential({ ...crediantial, [e.target.name]: e.target.value });
  };
  const history = useHistory();

  const auth = getAuth(firebaseApp);

  const handleClick = (e) => {
    e.preventDefault();
    let email = crediantial.email.toLowerCase().trim();
    let password = crediantial.password;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch({ type: "USER", payload: true });
        localStorage.setItem("isVinternshipLogin", true);
        showAlert("success", "Login Successfully");
        history.push('/dashboard');
      })
      .catch((err) => {
        if (
          err.code === AuthErrorCodes.INVALID_PASSWORD ||
          err.code === AuthErrorCodes.USER_DELETED
        ) {
          showAlert("danger", "The email address or password is incorrect");
        } else {
          //  console.log(err.code);
          //  alert(err.code);
        }
      });
  }
  return (
    <div>
      <div className="AdminLogin">
        <div className="AdminLogin_modalForm">
          <h2>Login</h2>
          <form onSubmit={handleClick} className="form user userForm">
            {/* <div className="AdminLogin_inputGroup">
              <select
                className="AdminLogin_select"
                onChange={onchange}
                value={crediantial.loginas}
                name="loginas"
              >
                <option value="" style={{ fontSize: "14px" }}>
                  ---Select Branch---
                </option>
                <option value="CMPN" style={{ fontSize: "14px" }}>
                  CMPN
                </option>
                <option value="INFT" style={{ fontSize: "14px" }}>
                  INFT
                </option>
              </select>
            </div> */}
            <div className="AdminLogin_inputGroup">
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                value={crediantial.email}
                onChange={onchange}
              />
            </div>
            <div className="AdminLogin_inputGroup">
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                value={crediantial.password}
                onChange={onchange}
              />
            </div>
            <button type="submit" style={{ overflow: "hidden" }} className="btn btn-outline-danger">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin