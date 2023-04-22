import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import logo from './vitlogo.png'

const Home = () => {

  return (
    <>
      <div className='images'>
        <img src={logo} ></img>
        <div className='homePage'>
          <h4 className="homePageHeading">Internship Portal of <span className='logoColor'>Vidyalankar Institute of Technology(VIT)</span>, Mumbai</h4>
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
    </>
  )
}

export default Home