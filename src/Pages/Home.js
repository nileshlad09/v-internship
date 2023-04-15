import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
// import logo from './vitlogo.png'
const Home = () => {





  return (
    <div className='images'>
       <div className='homePage'>
      <h3 className="homePageHeadingmain"><span style={{color:"blue"}}>V</span><span style={{color:"blue"}}>I</span>n<span style={{color:"blue"}}>T</span>ernship </h3>
     {/* <div className='homePageHeadingmain'><img scr={logo} ></img></div>  */}
      <h4 className="homePageHeading">Internship Portal of <span style={{ color: "blue" }}>Vidyalankar Institute of Technology(VIT)</span>, Mumbai</h4>
      <div className="homeOptions">
        <Link to={`/addinternship/1`} style={{textDecoration:"none"}}><div className="homeOption_box">
          <p className='homeOption_title_2'>Add Internship Data</p>
        </div>
        </Link>
        <Link to={`/adminlogin`} style={{textDecoration:"none"}}> <div className="homeOption_box">
          <p className='homeOption_title_2'>Admin Login  </p>
        </div>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Home