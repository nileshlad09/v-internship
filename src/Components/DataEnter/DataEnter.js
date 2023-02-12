import React, { useEffect, useState } from 'react'
import './DataEnter.css'
import { useHistory } from 'react-router-dom';

import { useContext } from "react";

import studentContext from '../../context/student/studentContext';


const DataEnter = () => {
    const history = useHistory();

    const context = useContext(studentContext);
    const { addInternship,showAlert } = context;

    const [crediantial, setCrediential] = useState({});



    const onchange = (e) => {
        setCrediential({ ...crediantial, [e.target.name]: e.target.value });
    };

    // useEffect(()=>{
    //     console.log(crediantial)
    // })

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //       const docRef = await addDoc(collection(db, "todos"), {
    //         sanyog: crediantial,
    //       });
    //       console.log("Document written with ID: ", docRef.id);
    //     } catch (e) {
    //       console.error("Error adding document: ", e);
    //     }

    // }


    const handleClick = (e) => {
        e.preventDefault();
        if(crediantial.nameofstudent === undefined || crediantial.rollNumber === undefined || crediantial?.mobileNo === undefined){
            showAlert("warning","All fields are required");
        }
        else if (crediantial.nameofstudent.replaceAll(' ', '').length < 1) {
            showAlert("warning","Name is required field");
        }
        else if (crediantial.rollNumber.replaceAll(' ', '').length !== 10 ) {
            showAlert("warning","Invalid Roll Number");
        }
        else if (crediantial?.mobileNo.replaceAll(' ', '').length !== 10) {
            showAlert("warning","Invalid Mobile Number");
        }
        else {
            addInternship(crediantial);
            history.push('/addinternship/2');
        }
    }

    return (
        <div>
            <div style={{ paddingTop: "30px", overflow: "hidden" }}>
                <form className="g-3" style={{ padding: "20px" }} onSubmit={handleClick}>
                    <h4>Internship Data </h4>
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
                            <input type="email" name='email' className="form-control" id="inputEmail" placeholder="Example@vit.edu.in"
                                value={crediantial.email}
                                onChange={onchange}
                                required />
                        </div>
                        <div className="col-md-4 dataEnter_input ">
                            <label htmlFor="inputMobile" className="form-label">Mobile No</label>
                            <input type="tel" name='mobileNo' className="form-control" id="inputMobile" maxLength="10"
                                value={crediantial.mobileNo}
                                onChange={onchange}
                            />
                        </div>
                        <div className="col-md-4 dataEnter_input ">
                            <label htmlFor="inputSemester" className="form-label">Semester</label>
                            <select name="semster" id="InputSemester" className="form-select" value={crediantial.semester}
                                onChange={onchange} required>
                                <option value="">--select--</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </div>
                        <div className="col-md-4 dataEnter_input ">
                            <label htmlFor="inputDivision" className="form-label">Division</label>
                            <select name="division" id="inputDivision" className="form-select" value={crediantial.division}
                                onChange={onchange} required>
                                <option value="">--select--</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                            </select>
                        </div>
                        <div className="col-md-4 dataEnter_input ">
                            <label htmlFor="inputBatch" className="form-label">Select Batch</label>
                            <select name="batch" id="inputBatch" className="form-select" value={crediantial.batch}
                                onChange={onchange} required>
                                <option value="">--select--</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                            </select>
                        </div>
                        <div className="col-md-4 dataEnter_input ">
                            <label htmlFor="inputBranch" className="form-label">Select Branch</label>
                            <select name="branch" id="inputBranch" className="form-select" value={crediantial.branch}
                                onChange={onchange} required>
                                <option value="">--select--</option>
                                <option value="CMPN">CMPN</option>
                                <option value="INFT">INFT</option>
                                <option value="EXTC">EXTC</option>
                                <option value="BIOM">BIOM</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" style={{ overflow: "hidden" }} className="btn btn-outline-success">Add Internship</button>
                </form>
            </div>
        </div>
    )
}

export default DataEnter