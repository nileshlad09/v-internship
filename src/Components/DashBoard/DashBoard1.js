import React from 'react'
import './DashBoard1.css'
import { Link } from 'react-router-dom'
import { studentCount } from '../../DataFiles/dataManages'
const DashBoard = ({ arr1, crediantial,dummyYear }) => {

    const batch3 = arr1[2].length;
    const batch2 = arr1[1].length;
    const batch1 = arr1[0].length;
    const Foryear = crediantial ? crediantial.Foryear : dummyYear;
    return (
        <div className='Dashboard_Section'>
            <div className="Dashboard_Section_1">
                <div className="Dashboard_box Dashboard_main_box">
                    <p className='Dashboard_title_1'>Total Number of Students</p>
                </div>
                {studentCount.map((d,i) => {
                    return (
                        <div className="Dashboard_box">
                            <p className='Dashboard_title_1' style={{display:i==0?"block":"none" ,fontSize:"1.6rem"} }>SE</p>
                            <p className='Dashboard_title_1' style={{display:i==1?"block":"none",fontSize:"1.6rem"}}>TE</p>
                            <p className='Dashboard_title_1' style={{display:i==2?"block":"none",fontSize:"1.6rem"}}>BE</p>
                        </div>
                    )
                })}
            </div>
            <div className="Dashboard_Section_1">
                <div className="Dashboard_box Dashboard_main_box">
                    <Link to={`/dashboard/view/${Foryear ? Foryear : dummyYear}/ALL`}>
                        <p className='Dashboard_title_1'>Total Number of Internship completed</p>
                    </Link>
                </div>

                <div className="Dashboard_box">
                    <Link to={`/dashboard/view/${Foryear ? Foryear : dummyYear}/SE`}>
                        <p className='Dashboard_title_2'>{batch1}</p></Link>
                </div>
                <div className="Dashboard_box">
                    <Link to={`/dashboard/view/${Foryear ? Foryear : dummyYear}/TE`}> <p className='Dashboard_title_2'>{batch2}</p></Link>
                </div>
                <div className="Dashboard_box">
                    <Link to={`/dashboard/view/${Foryear ? Foryear : dummyYear}/BE`}> <p className='Dashboard_title_2'>{batch3}</p></Link>
                </div>
            </div>
        </div>
    )
}

export default DashBoard
