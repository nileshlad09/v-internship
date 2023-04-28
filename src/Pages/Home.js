import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import logo from '../Images/vitlogo.png'
import studentContext from '../context/student/studentContext';

const Home = () => {
  const {currentUser, loading} = useContext(studentContext);
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
            {(loading || currentUser)?
            <Link to={`/dashboard`}> <div className="homeOption_box">
            <p className='homeOption_title_2'>Dashboard</p>
          </div>
          </Link>:<Link to={`/adminlogin`}> <div className="homeOption_box">
              <p className='homeOption_title_2'>Admin Login  </p>
            </div>
            </Link>}
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Home