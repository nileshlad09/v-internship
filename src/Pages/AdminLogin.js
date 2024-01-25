import React, { useContext, useState } from 'react'
import "./CSS/adminlogin.css";
import { AuthErrorCodes, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import studentContext from '../context/student/studentContext';
import { firebaseApp } from '../firebase';
import { useHistory } from 'react-router-dom';
import Spinner from '../Components/Spinner/Spinner';



const AdminLogin = () => {
  const context = useContext(studentContext);
  const { showAlert } = context;

  const [isLoading, setIsLoading] = useState(false);

  const [crediantial, setCrediential] = useState({});
  const onchange = (e) => {
    setCrediential({ ...crediantial, [e.target.name]: e.target.value });
  };
  const history = useHistory();

  const auth = getAuth(firebaseApp);

  const handleClick = (e) => {
    e.preventDefault();
    let email = crediantial.email;
    let password = crediantial.password;
    if(!(email && password)){
      showAlert("warning", "The email address or password are required");
    }else{
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsLoading(false)
        showAlert("success", "Login Successfully");
        history.push('/dashboard');
      })
      .catch((err) => {
        setIsLoading(false)
        if (
          err.code === AuthErrorCodes.INVALID_PASSWORD ||
          err.code === AuthErrorCodes.USER_DELETED
        ) {
          showAlert("warning", "The email address or password is incorrect");
        } else {
          showAlert("danger", "Internal error");
        }
      });
    }
    
  }



  return (
    <div>
      {isLoading? <Spinner/>:
      <div className="AdminLogin">
        <div className="AdminLogin_modalForm">
          <h2>Admin Login</h2>
          <form onSubmit={handleClick} className="form user userForm">
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
            <button type="submit" style={{ overflow: "hidden"}} className="btn btn-outline-danger">Login</button>
          </form>
        </div>
      </div>
      }
    </div>
  )
}

export default AdminLogin