import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <div className="navbar_Section">
      <nav className="navbar navbar-expand-lg navbar-success bg-success container">
       <Link className="navbar-brand" to="/dashboard" style={{color:"#fff",fontWeight:"700"}}>V-Internship </Link>
        <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0 ml-auto">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link active" aria-current="page" to="/dashboard" style={{ color: "#fff" }}>Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/verification" style={{ color: "#fff" }}>Verify</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/editinfo" style={{ color: "#fff" }}>Edit Information</Link>
              </li>
              <li className="nav-item">
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