
import './admin.css'
import { FaUserAlt } from 'react-icons/fa'
import { AiFillSafetyCertificate } from 'react-icons/ai'
import { FaDatabase } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import data from '../StudentData/Data';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
const Admin = () => {

    const [len, setlen] = useState(0);

    useEffect(() => {
        getdata();
    })
    var i = 0;
    const getdata = () => {
        data.map((item) => {
            if (item.certificate.charAt(0) === "u") {
                i = i + 1;
            }
        })
        setlen(i);
    }

    return (
        <div>
            {/* main info */}
            <div className="main">
                <div className="cards">
                    <div className="card">
                        <div className="card-content">
                            <div className="number">50+</div>
                            <div className="card-name">STUDENTDS</div>
                        </div>
                        <div className="icon-box">
                            <FaUserAlt/>
                        </div>
                    </div>
                    <Link to="/StudentData">
                        <div className="card">
                            <div className="card-content">
                                <div className="number">{data.length}</div>
                                <div className="card-name">VIEW DATA</div>
                            </div>
                            <div className="icon-box">
                                <FaDatabase />
                            </div>
                        </div>
                    </Link>
                   <Link to='/InternshipDone'>
                   <div className="card">
                        <div className="card-content">
                            <div className="number">{len}</div>
                            <div className="card-name">INTERNSHIP HAS BEEN DONE</div>
                        </div>
                        <div className="icon-box">
                            <AiFillSafetyCertificate/>
                        </div>
                    </div>
                    </Link> 
                    <Link to="/InternshipNotDone">
                    <div className="card">
                        <div className="card-content">
                            <div className="number">{data.length - len}</div>
                            <div className="card-name">INTERNSHIP HAS NOT BEEN DONE</div>
                        </div>
                        <div className="icon-box">
                            <AiFillSafetyCertificate  />
                        </div>
                    </div>
                    </Link>

                </div>
            </div>
            {/* main end */}
            <div className="charts">
                <Chart
                    type="line"
                    width="100%"
                    height="400px"
                    series={[
                        {
                            data: [50,data.length,len, data.length - len],
                        }
                    ]}



                    options={{
                        title: {
                            style: { fontSize: 3 }
                        },
                        colors: ['#299863'],
                        theme: {
                            mode: 'light',
                        },
                        xaxis: {
                            categories: ["Students", "From Submitted", "uploaded", "Not uploaded"],
                        },
                        yaxis: {
                            title: {
                                text: ""
                            }
                        },
                        stroke: {
                            curve: 'straight'
                        },
                        responsive: [{
                            breakpoint: undefined,
                            options: {},
                        }]


                    }}
                >
                </Chart>
            </div>
        </div>
    );
}


export default Admin;