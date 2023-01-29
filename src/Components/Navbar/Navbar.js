import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <div className="navbar_Section">
      <nav class="navbar navbar-expand-lg navbar-success bg-success container">

        <a class="navbar-brand" style={{color:"#fff"}} href="#">V-Internship</a>
        <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="form-inline my-2 my-lg-0 ml-auto">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link active" aria-current="page" to="/dashboard" style={{ color: "#fff" }}>Dash board</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Login" style={{ color: "#fff" }}>Verify</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/editinfo" style={{ color: "#fff" }}>Edit Information</Link>
              </li>
              <li class="nav-item">
                <button className='btn btn-outline-light'>Logout</button>
              </li>
            </ul>
          </form>
        </div>
      </nav>
      </div>
    </>
  );
}

export default Navbar;