import React, { useEffect, useState } from 'react'
import './DataEnter.css'
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useHistory } from 'react-router-dom';

import { useContext } from "react";

import studentContext from '../../context/student/studentContext';


const DataEnter = () => {
    const history = useHistory();

    const context = useContext(studentContext);
    const { addInternship } = context;

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
        if (crediantial.nameofstudent == undefined || crediantial.nameofstudent.replaceAll(' ', '').length < 1) {
            alert("Name can't be blank");
        }
        else if (crediantial.rollNumber == undefined || crediantial.rollNumber.replaceAll(' ', '').length != 10) {
            console.log(crediantial.rollNumber)
            alert("Invalid Roll Number");
        }
        else if (crediantial?.mobileNo == undefined || crediantial?.mobileNo.replaceAll(' ', '').length != 10) {
            alert("Invalid mobile Number");
        }
        else {
            addInternship(crediantial);
            history.push('/addinternship/2');
        }
    }

    return (
        <div>
            <div style={{ paddingTop: "30px", overflow: "hidden" }}>
                <form class="g-3" style={{ padding: "20px" }} onSubmit={handleClick}>
                    <h4>Internship Data </h4>
                    <div className="row">
                        <div class="col-md-4 dataEnter_input ">
                            <label for="inputnameofstudent" class="form-label">Name of Student</label>
                            <input type="text" name='nameofstudent' class="form-control" id="inputnameofstudent"
                                value={crediantial.nameofstudent}
                                onChange={onchange}
                            />
                        </div>
                        <div class="col-md-4 dataEnter_input ">
                            <label for="inputrollNumber" class="form-label">Roll Number</label>
                            <input type="text" name='rollNumber' class="form-control" id="inputrollNumber" maxlength="10"
                                value={crediantial.rollNumber}
                                onChange={onchange}
                            />
                        </div>
                        <div class="col-md-4 dataEnter_input ">
                            <label for="inputEmail" class="form-label">Email id</label>
                            <input type="email" name='email' class="form-control" id="inputEmail" placeholder="Example@vit.edu.in"
                                value={crediantial.email}
                                onChange={onchange}
                                required />
                        </div>
                        <div class="col-md-4 dataEnter_input ">
                            <label for="inputMobile" class="form-label">Mobile No</label>
                            <input type="tel" name='mobileNo' class="form-control" id="inputMobile" maxlength="10"
                                value={crediantial.mobileNo}
                                onChange={onchange}
                            />
                        </div>
                        <div class="col-md-4 dataEnter_input ">
                            <label for="inputSemester" class="form-label">Semester</label>
                            <select name="semster" id="InputSemester" class="form-select" value={crediantial.semester}
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
                        <div class="col-md-4 dataEnter_input ">
                            <label for="inputDivision" class="form-label">Division</label>
                            <select name="division" id="inputDivision" class="form-select" value={crediantial.division}
                                onChange={onchange} required>
                                <option value="">--select--</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                            </select>
                        </div>
                        <div class="col-md-4 dataEnter_input ">
                            <label for="inputBatch" class="form-label">Select Batch</label>
                            <select name="batch" id="inputBatch" class="form-select" value={crediantial.batch}
                                onChange={onchange} required>
                                <option value="">--select--</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                            </select>
                        </div>
                        <div class="col-md-4 dataEnter_input ">
                            <label for="inputBranch" class="form-label">Select Branch</label>
                            <select name="branch" id="inputBranch" class="form-select" value={crediantial.branch}
                                onChange={onchange} required>
                                <option value="">--select--</option>
                                <option value="CMPN">CMPN</option>
                                <option value="INFT">INFT</option>
                                <option value="EXTC">EXTC</option>
                                <option value="BIOM">BIOM</option>
                            </select>
                        </div>
                    </div>
                    <error id="alert-caps"></error>
                    <button type="submit" style={{ overflow: "hidden" }} class="btn btn-outline-success">Add Internship</button>
                </form>
            </div>
        </div>
    )
}

export default DataEnter