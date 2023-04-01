import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
const Home = () => {



    
 
    return (
        <div className='homePage'>
             <h3 className="homePageHeading">V-Internship</h3>
             <h4 className="homePageHeading">Internship Portal of Vidyalankar Institute of Technology, Mumbai</h4>
            <div className="homeOptions">
              <div className="homeOption_box"> 
                 <Link to={`/addinternship/1`}>
                    <p className='homeOption_title_2'>Add Internship Data</p>
                </Link>
              </div>
              <div className="homeOption_box">
                  <Link to={`/adminlogin`}>
                    <p className='homeOption_title_2'>Admin Login  </p>
                </Link>
              </div>
            </div>
            
        </div>
    )
}

export default Home