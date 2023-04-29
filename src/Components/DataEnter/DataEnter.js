import React, { useState } from 'react'
import './DataEnter.css'
import { useHistory } from 'react-router-dom';

import { useContext } from "react";

import studentContext from '../../context/student/studentContext';
import Spinner from '../Spinner/Spinner';


const DataEnter = () => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const context = useContext(studentContext);
    const { addInternship} = context;

    const [crediantial, setCrediential] = useState({});
    const [warning, setWarning] = useState("");


    const onchange = (e) => {
        setCrediential({ ...crediantial, [e.target.name]: e.target.value });
    };

    // eslint-disable-next-line
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const handleClick = (e) => {
        e.preventDefault();
        if (crediantial.nameofstudent === undefined || crediantial.rollNumber === undefined ||
             crediantial?.mobileNo === undefined || crediantial.email === undefined) {
            // showAlert("warning", "All fields are required");
            setWarning("All fields are required");
        }
        else if (crediantial.semester === undefined || crediantial.division === undefined || 
            crediantial.branch === undefined || crediantial.year === undefined ) {
            // showAlert("warning", "All fields are required");
            setWarning("All fields are required");
        }
        else if (crediantial.semester.replaceAll(' ', '').length < 1 || crediantial.division.replaceAll(' ', '').length < 1 ||
         crediantial.branch.replaceAll(' ', '').length < 1 || crediantial.year.replaceAll(' ', '').length < 1) {
            // showAlert("warning", "All fields are required");
            setWarning("All fields are required");
        }
        else if (!crediantial.email.match(mailformat)) {
            // showAlert("warning", "invalid email address");
            setWarning("invalid email address");
        }
        else if (crediantial.nameofstudent.replaceAll(' ', '').length < 1) {
            // showAlert("warning", "Name is required field");
            setWarning("Name is required field");
        }
        else if (crediantial.rollNumber.replaceAll(' ', '').length !== 10) {
            // showAlert("warning", "Invalid Roll Number");
            setWarning("Invalid Roll Number");
        }
        else if (crediantial?.mobileNo.replaceAll(' ', '').length !== 10) {
            // showAlert("warning", "Invalid Mobile Number");
            setWarning("Invalid Mobile Number");
        }
        else {
            setIsLoading(false)
            setWarning("");
            addInternship(crediantial);
            history.push('/addinternship/2');
        }
    }
    return (
        <div style={{ border: "1px solid gray", marginTop: "40px" }}>
            {isLoading ? <Spinner /> :
                <div style={{ paddingTop: "10px", overflow: "hidden" }}>
                    <form className="g-3" style={{ padding: "20px" }} onSubmit={handleClick}>
                        <h4>Personal Detail</h4>
                        <div className="row">
                            <div className="col-md-4 dataEnter_input ">
                                <label htmlFor="inputnameofstudent" className="form-label">Name of Student</label>
                                <input type="text" name='nameofstudent' className="form-control" id="inputnameofstudent"
                                    value={crediantial.nameofstudent}
                                    onChange={onchange}
                                />
                            </div>

                            <div className="col-md-4 dataEnter_input ">
                                <label htmlFor="inputrollNumber" className="form-label">Roll Number</label>
                                <input type="text" name='rollNumber' className="form-control" id="inputrollNumber" maxLength="10"
                                    value={crediantial.rollNumber}
                                    onChange={onchange}
                                />
                            </div>
                            <div className="col-md-4 dataEnter_input ">
                                <label htmlFor="inputEmail" className="form-label">Email id</label>
                                <input type="text" name='email' className="form-control" id="inputEmail" placeholder="Example@vit.edu.in"
                                    value={crediantial.email}
                                    onChange={onchange}
                                />
                            </div>
                            <div className="col-md-4 dataEnter_input ">
                                <label htmlFor="inputMobile" className="form-label">Mobile No</label>
                                <input type="tel" name='mobileNo' className="form-control" id="inputMobile" maxLength="10"
                                    value={crediantial.mobileNo}
                                    onChange={onchange}
                                />
                            </div>
                            <div className="col-md-4 dataEnter_input ">
                                <label htmlFor="inputYear" className="form-label">Year</label>
                                <select name="year" id="InputYear" className="form-select" value={crediantial.year}
                                    onChange={onchange}>
                                    <option value="">--select--</option>
                                    <option value="SE" >SE</option>
                                    <option value="TE" >TE</option>
                                    <option value="BE" >BE</option>
                                </select>
                            </div>
                            <div className="col-md-4 dataEnter_input ">
                                <label htmlFor="inputSemester" className="form-label">Semester</label>
                                <select name="semester" id="InputSemester" className="form-select" value={crediantial.semester}
                                    onChange={onchange}>
                                    <option value="">--select--</option>
                                    {(crediantial.year === "SE") ?
                                        <>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </> : ""
                                    }
                                    {(crediantial.year === "TE") ?
                                        <>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                        </> : ""
                                    }
                                    {(crediantial.year === "BE") ?
                                        <>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                        </> : ""
                                    }

                                </select>
                            </div>

                            <div className="col-md-4 dataEnter_input ">
                                <label htmlFor="inputDivision" className="form-label">Division</label>
                                <select name="division" id="inputDivision" className="form-select" value={crediantial.division}
                                    onChange={onchange} >
                                    <option value="">--select--</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                </select>
                            </div>
                            <div className="col-md-4 dataEnter_input ">
                                <label htmlFor="inputBranch" className="form-label">Select Branch</label>
                                <select name="branch" id="inputBranch" className="form-select" value={crediantial.branch}
                                    onChange={onchange} >
                                    <option value="">--select--</option>
                                    <option value="CMPN">CMPN</option>
                                    <option value="INFT">INFT</option>
                                    <option value="EXTC">EXTC</option>
                                    <option value="BIOM">BIOM</option>
                                </select>
                            </div>
                        </div>
                        <p className="warning" style={{color:"red"}}>{warning?`*${warning}`:""}</p>
                        <button type="submit" style={{ overflow: "hidden" }} className="btn btn-outline-danger">Add Internship</button>
                    </form>
                </div>
            }
        </div>
    )
}

export default DataEnter