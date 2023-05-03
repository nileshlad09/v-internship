import React from 'react'
import './DashBoard1.css'
import { Link } from 'react-router-dom'
const DashBoard = ({ arr1, crediantial, dummyYear }) => {

    const batch3 = arr1[2].length;
    const batch2 = arr1[1].length;
    const batch1 = arr1[0].length;
    const Foryear = crediantial ? crediantial.Foryear : dummyYear;
    var studentCount = ["SE", "TE", "BE"];
    return (
        <div className='Dashboard_Section'>
            <div className="Dashboard_Section_1">
                <div className="Dashboard_box Dashboard_main_box">
                    <p className='Dashboard_title_1'>Total Number of Students</p>
                </div>
                {studentCount.map((d, i) => {
                    return (
                        <div className="Dashboard_box" key={i}>
                            <p className='Dashboard_title_1' style={{ fontSize: "1.6rem" }}>{d}</p>
                        </div>
                    )
                })}
            </div>
            <div className="Dashboard_Section_1">
                <Link to={`/dashboard/view/${Foryear ? Foryear : dummyYear}/ALL`}>
                    <div className="Dashboard_box Dashboard_main_box">
                        <p className='Dashboard_title_1'>Total Number of Internship completed</p>
                    </div>
                </Link>

                <Link to={`/dashboard/view/${Foryear ? Foryear : dummyYear}/SE`}>
                    <div className="Dashboard_box">
                        <p className='Dashboard_title_2'>{batch1}</p>
                    </div>
                </Link>

                <Link to={`/dashboard/view/${Foryear ? Foryear : dummyYear}/TE`}>
                    <div className="Dashboard_box">
                        <p className='Dashboard_title_2'>{batch2}</p>
                    </div>
                </Link>
                <Link to={`/dashboard/view/${Foryear ? Foryear : dummyYear}/BE`}>
                    <div className="Dashboard_box">
                        <p className='Dashboard_title_2'>{batch3}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default DashBoard
