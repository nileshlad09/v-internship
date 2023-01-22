import './admin.css'
import { FaUserAlt } from 'react-icons/fa'
import { AiFillSafetyCertificate } from 'react-icons/ai'
import { FaDatabase } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import data from '../StudentData/Data';
function Admin() {
    return (
        <div>


            {/* main info */}

            <div className="main">
                <div className="cards">
                    <div className="card">
                        <div className="card-content">
                            <div className="number">100+</div>
                            <div className="card-name">Students</div>
                        </div>
                        <div className="icon-box">
                            <FaUserAlt />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <div className="number">50+</div>
                            <div className="card-name">Certificate</div>
                        </div>
                        <div className="icon-box">
                            <AiFillSafetyCertificate />
                        </div>
                    </div>
                    <Link to="/StudentData">
                     <div className="card">
                      <div className="card-content">
                            <div className="number">{data.length}</div>
                            <div className="card-name">View Data</div>
                        </div>
                            <div className="icon-box">
                                <FaDatabase />
                            </div>
                    </div>
                    </Link>

                </div>
            </div>
            {/* main end */}

        </div>
    );
}

export default Admin;