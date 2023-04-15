import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
const Home = () => {

  return (
    <div className='homePage'>
    <div className='homePage_container'>
        <h3 className="homePageHeadingmain">V-Internship</h3>
        <h4 className="homePageHeading">Internship Portal of <span style={{ color: "red" }}>Vidyalankar Institute of Technology(VIT)</span>, Mumbai</h4>
        <div className="homeOptions">
          <Link to={`/addinternship/1`}><div className="homeOption_box">
            <p className='homeOption_title_2'>Add Internship Data</p>
          </div>
          </Link>
          <Link to={`/adminlogin`}> <div className="homeOption_box">
            <p className='homeOption_title_2'>Admin Login  </p>
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home