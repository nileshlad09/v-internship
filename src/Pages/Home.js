import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import logo from './vitlogo.png'
import SimpleImageSlider from "react-simple-image-slider";
const Home = () => {
  const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
    {
      url: "https://img.freepik.com/free-photo/wide-angle-shot-singletree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
    },
    {
      url: "https://thumbs.dreamstime.com/b/lone-tree-meadow-sunriseidyllic-fabulous-landscapes-39659821.jpg",
    },
    {
      url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcSprPgYofGmXXPfuEDcZ_XI294n0bME5dTX9TGvINmPiA&s",
    },
    {
      url: "https://i.pinimg.com/474x/81/ca/47/81ca47eaae35615ba9a9bb57560aaa3c.jpg",
    },
    {
      url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcTof2fniv0mZzN8DByLmb6ILU4MvV_SGr_wptMeAut_dPaYMBkeHnHhD5egzU7MB0GSqE&usqp=CAU",
    },
  ];
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