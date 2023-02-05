import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './DataEnter.css'
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
const DataEnter = () => {
    var data = JSON.parse(localStorage.getItem('forminfo'));

    const [crediantial, setCrediential] = useState({});

    const onchange = (e) => {
        setCrediential({ ...crediantial, [e.target.name]: e.target.value });
    };
    useEffect(()=>{
        setCrediential({...crediantial, "year": data?.year})
    },[])

    useEffect(()=>{
        console.log(crediantial)
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const docRef = await addDoc(collection(db, "todos"), {
            sanyog: crediantial,
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }

    }
    
    
    const handleClick = (e) => {
        e.preventDefault();
        console.log(crediantial);
    }
    

    return (
        <div>
            <div style={{ paddingTop: "30px", overflow: "hidden" }}>
                <form class="g-3" style={{ padding: "20px" }} onSubmit={handleClick}>
                    <h4>Internship Data ({data.year})</h4>
                    <div className="row">
                    <div class="col-md-4 dataEnter_input ">
                        <label for="inputnameofstudent" class="form-label">Name of Student</label>
                        <input type="text" name='nameofstudent' class="form-control" id="inputnameofstudent"
                        value={crediantial.nameofstudent}
                        onChange={onchange} 
                        required
                        />
                    </div>
                    <div class="col-md-4 dataEnter_input ">
                        <label for="inputrollNumber" class="form-label">Roll Number</label>
                        <input type="text" name='rollNumber' class="form-control" id="inputrollNumber"
                        value={crediantial.rollNumber}
                        onChange={onchange}
                        required />
                    </div>
                    <div class="col-md-4 dataEnter_input ">
                        <label for="inputEmail" class="form-label">Email id</label>
                        <input type="email" name='email' class="form-control" id="inputEmail" placeholder="Example@vit.edu.in"
                        value={crediantial.email}
                        onChange={onchange} 
                        required/>
                    </div>
                    <div class="col-md-4 dataEnter_input ">
                        <label for="inputMobile" class="form-label">Mobile No</label>
                        <input type="tel" name='mobileNo' class="form-control" id="inputMobile"
                        value={crediantial.mobileNo}
                        onChange={onchange}
                        required/>
                    </div>
                    <div class="col-md-4 dataEnter_input ">
                        <label for="inputSemester" class="form-label">Semester</label>
                        <select name="semster" id="InputSemester" class="form-select" required value={crediantial.semester}
                            onChange={onchange}>
                            <option>semester</option>
                            <>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            </>
                        </select>
                    </div>
                    <div class="col-md-4 dataEnter_input ">
                        <label for="inputDivision" class="form-label">Division</label>
                        <select name="division" id="inputDivision" class="form-select" required value={crediantial.division}
                            onChange={onchange}>
                            <option>Division</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                        </select>
                    </div>
                    <div class="col-md-4 dataEnter_input ">
                        <label for="inputBatch" class="form-label">Select Batch</label>
                        <select name="batch" id="inputBatch" class="form-select" required value={crediantial.batch}
                            onChange={onchange}>
                            <option>Select Batch</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                        </select>
                    </div>
                    <div class="col-md-4 dataEnter_input ">
                        <label for="inputBranch" class="form-label">Select Branch</label>
                        <select name="branch" id="inputBranch" class="form-select" required value={crediantial.branch}
                            onChange={onchange}>
                            <option>Select Branch</option>
                            <option value="CMPN">CMPN</option>
                            <option value="INFT">INFT</option>
                            <option value="EXTC">EXTC</option>
                            <option value="BIOM">BIOM</option>
                        </select>
                    </div>
                    </div>
                   <Link to="/addinternship/2"> <button type="submit" onClick={handleSubmit}  style={{ overflow: "hidden"  }} class="btn btn-outline-success">Add Internship</button></Link>
                </form>
            </div>
        </div>
    )
}

export default DataEnter