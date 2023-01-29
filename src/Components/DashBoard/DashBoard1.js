import React from 'react'
import './DashBoard1.css'
import { Link } from 'react-router-dom'
const DashBoard = () => {
    return (
        <div className='Dashboard_Section'>
            <div className="Dashboard_Section_1">
                <div className="Dashboard_box Dashboard_main_box">
                    <p className='Dashboard_title_1'>Total Number of Student</p>
                </div>
                <div className="Dashboard_box">
                    <p className='Dashboard_title_1'>Batch 2025(SE)</p>
                    <p className='Dashboard_title_1'>160</p>
                </div>
                <div className="Dashboard_box">
                    <p className='Dashboard_title_1'>Batch 2024(TE)</p>
                    <p className='Dashboard_title_1'>170</p>
                </div>
                <div className="Dashboard_box">
                    <p className='Dashboard_title_1'>Batch 2023(BE)</p>
                    <p className='Dashboard_title_1'>150</p>
                </div>
            </div>
            <div className="Dashboard_Section_1">
                <div className="Dashboard_box Dashboard_main_box">
                    <p className='Dashboard_title_1'>Total Number of student who completed Internship</p>
                </div>
                <div className="Dashboard_box">
                   <Link to="/dashboard/view"> <p className='Dashboard_title_2'>60</p></Link>
                </div>
                <div className="Dashboard_box">
                <Link to="/dashboard/view"> <p className='Dashboard_title_2'>60</p></Link>
                </div>
                <div className="Dashboard_box">
                <Link to="/dashboard/view"> <p className='Dashboard_title_2'>60</p></Link>
                </div>
            </div>
            <div className="Dashboard_Section_1">
                <div className="Dashboard_box Dashboard_main_box">
                    <p className='Dashboard_title_1'>Total Number of Internship Done</p>
                </div>
                <div className="Dashboard_box">
                    <p className='Dashboard_title_2'>60</p>
                </div>
                <div className="Dashboard_box">
                    <p className='Dashboard_title_2'>70</p>
                </div>
                <div className="Dashboard_box">
                    <p className='Dashboard_title_2'>50</p>
                </div>
            </div>
        </div>
    )
}

export default DashBoard
