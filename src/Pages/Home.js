import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './CSS/home.css'
import studentContext from '../context/student/studentContext';

const Home = () => {
  const { currentUser, loading } = useContext(studentContext);
  return (
    <>
      <div className="homeSec">
        <div className='homePage container'>

          <div className="homePageHeading">
            <h4 >Internship Portal of CMPN Department</h4>
            <h2>Vidyalankar Institute of Technology, Mumbai</h2>
          </div>

          <div className="homeOptions">
            <Link to={`/addinternship/1`}>
              <div className="homeOption_box">
                <p className='homeOption_title'>Add Internship Data</p>
              </div>
            </Link>
            {(loading || currentUser) ?
              <Link to={`/dashboard`}> <div className="homeOption_box homeOption_box2">
                <p className='homeOption_title'>Dashboard</p>
              </div>
              </Link> : <Link to={`/adminlogin`}> <div className="homeOption_box homeOption_box2 ">
                <p className='homeOption_title'>Admin Login  </p>
              </div>
              </Link>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home