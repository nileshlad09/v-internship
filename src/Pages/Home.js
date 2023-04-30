import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import logo from '../Images/vitlogo.png'
import studentContext from '../context/student/studentContext';

const Home = () => {
  const { currentUser, loading } = useContext(studentContext);
  return (
    <>
      <div className="homeSec">
        <div className='Homeimages container'>
          <img src={logo} alt='logo' className='vitlogo'></img>
          <div className='homePage'>
            <h4 className="homePageHeading">Internship Portal of <span className='logoColor'>Vidyalankar Institute of Technology(VIT)</span>, Mumbai</h4>
            <div className="homeOptions">
              <Link to={`/addinternship/1`}><div className="homeOption_box">
                <p className='homeOption_title_2'>Add Internship Data</p>
              </div>
              </Link>
              {(loading || currentUser) ?
                <Link to={`/dashboard`}> <div className="homeOption_box">
                  <p className='homeOption_title_2'>Dashboard</p>
                </div>
                </Link> : <Link to={`/adminlogin`}> <div className="homeOption_box">
                  <p className='homeOption_title_2'>Admin Login  </p>
                </div>
                </Link>}
            </div>
          </div>
        </div>
      </div>
        <div className="credits container">
          <p>Developed by <a href="https://www.linkedin.com/in/nileshlad09"  rel="noreferrer" target='_blank'> Nilesh</a>, <a href="https://www.linkedin.com/in/nikhil-adhare-7a6994219/"  rel="noreferrer" target='_blank'> Nikhil</a>,<a href="https://linkedin.com/in/sanyog-jain"  rel="noreferrer" target='_blank'> Sanyog</a></p>
        </div>
    </>
  )
}

export default Home