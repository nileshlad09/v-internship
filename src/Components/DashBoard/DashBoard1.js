import React, {useState} from 'react'
import './DashBoard1.css'
import { Link } from 'react-router-dom'

import data from '../../DataFiles/data';
const DashBoard = ({arr1}) => {
    
    const batch3 = arr1[2].length;
    const batch2 = arr1[1].length;
    const batch1 = arr1[0].length;
      
    return (
        <div className='Dashboard_Section'>
            <div className="Dashboard_Section_1">
                <div className="Dashboard_box Dashboard_main_box">
                    <p className='Dashboard_title_1'>Total Number of Students</p>
                </div>
                <div className="Dashboard_box">
                    <p className='Dashboard_title_1'>SE</p>
                    <p className='Dashboard_title_1'>Batch 2025</p>
                    <p className='Dashboard_title_1'>167</p>
                </div>
                <div className="Dashboard_box">
                    <p className='Dashboard_title_1'>TE</p>
                    <p className='Dashboard_title_1'>Batch 2024</p>
                    <p className='Dashboard_title_1'>157</p>
                </div>
                <div className="Dashboard_box">
                    <p className='Dashboard_title_1'>BE</p>
                    <p className='Dashboard_title_1'>Batch 2023</p>
                    <p className='Dashboard_title_1'>158</p>
                </div>
            </div>
            <div className="Dashboard_Section_1">
                <div className="Dashboard_box Dashboard_main_box">
                    <p className='Dashboard_title_1'>Total Number of Internship completed</p>
                </div>
                <div className="Dashboard_box">
                   <Link to="/dashboard/view/batch1">
                    <p className='Dashboard_title_2'>{batch1}</p></Link>
                </div>
                <div className="Dashboard_box">
                <Link to="/dashboard/view/batch2"> <p className='Dashboard_title_2'>{batch2}</p></Link>
                </div>
                <div className="Dashboard_box">
                <Link to="/dashboard/view/batch3"> <p className='Dashboard_title_2'>{batch3}</p></Link>
                </div>
            </div>
        </div>
    )
}

export default DashBoard
