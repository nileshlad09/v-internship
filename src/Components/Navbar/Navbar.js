import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = ()=> {
  return (
    <nav class="navbar" style={{ backgroundColor: "#299863", color: "#fff" }}>
      <div class="container-fluid" >
        <Link class="navbar-brand" to="/" style={{ color: "#fff" }}>V-Internship</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/" style={{ color: "#fff" }}>Home</Link>
            </li>  
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/ExcelData" style={{ color: "#fff" }}>Excel Data</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/Login" style={{ color: "#fff" }}>Login</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/Forgotpassword" style={{ color: "#fff" }}>Password</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;