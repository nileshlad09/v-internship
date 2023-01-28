import React, { useState } from 'react'
import "./adminlogin.css";
const AdminLogin = () => {

  const [crediantial, setCrediential] = useState({});

  const onchange = (e) => {
    setCrediential({ ...crediantial, [e.target.name]: e.target.value });
  };

  const handleClick = () => {

  }
  return (
    <div>
      <div className="AdminLogin">
        <div className="AdminLogin_modalForm">
          <h2>Login</h2>
          <form action="" onSubmit={handleClick} className="form user userForm">
            <div className="AdminLogin_inputGroup">
              <select
                className="AdminLogin_select"
                onChange={onchange}
                value={crediantial.loginas}
                name="loginas"
                required
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
            </div>
            <div className="AdminLogin_inputGroup">
              <input
                type="text"
                placeholder="Enter Phone no."
                name="phone"
                value={crediantial.phone}
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
            <button type="button" style={{ overflow: "hidden" }} class="btn btn-outline-success">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin