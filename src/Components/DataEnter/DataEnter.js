import React from 'react'
import { Link } from 'react-router-dom'
import './DataEnter.css'
const DataEnter = () => {
    var data = JSON.parse(localStorage.getItem('forminfo'));
    console.log(data.year);
    return (
        <div>
            <div style={{ paddingTop: "30px", overflow: "hidden" }}>
                <form class="row g-3" style={{ padding: "20px" }}>
                    <h4>Internship Data {data.semster} sem ({data.year})</h4>
                    <div class="col-md-4">
                        <label for="inputEmail4" class="form-label">Name of Student</label>
                        <input type="email" class="form-control" id="inputEmail4" />
                    </div>
                    <div class="col-md-4">
                        <label for="inputPassword4" class="form-label">Roll Number</label>
                        <input type="text" class="form-control" id="inputPassword4" />
                    </div>
                    <div class="col-md-4">
                        <label for="inputAddress" class="form-label">Email id</label>
                        <input type="email" class="form-control" id="inputAddress" placeholder="Example@vit.edu.in" />
                    </div>
                    <div class="col-md-4">
                        <label for="inputAddress" class="form-label">Mobile No</label>
                        <input type="email" class="form-control" id="inputAddress"/>
                    </div>
                    <div class="col-md-4">
                        <label for="inputAddress" class="form-label">Semester</label>
                        <select name="semster" id="state" class="form-select" >
                            <option>Semster</option>
                            {data.semster==="Even"?
                            <>
                            <option >4</option>
                            <option >6</option>
                            <option >8</option>
                            </>:
                            <>
                            <option >3</option>
                            <option >5</option>
                            <option >7</option>
                            </>
                             } 
                        </select>
                    </div>
                    <div class="col-md-4">
                        <label for="inputAddress" class="form-label">Division</label>
                        <select name="state" id="state" class="form-select" >
                            <option>Division</option>
                            <option >A</option>
                            <option >B</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <label for="inputAddress" class="form-label">Select Batch</label>
                        <select name="state" id="state" class="form-select" >
                            <option>Select Batch</option>
                            <option >2023</option>
                            <option >2024</option>
                            <option >2025</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <label for="inputAddress" class="form-label">Select Branch</label>
                        <select name="state" id="state" class="form-select" >
                            <option>Select Branch</option>
                            <option >CMPN</option>
                            <option >INFT</option>
                            <option >EXTC</option>
                            <option>BIOM</option>
                        </select>
                    </div>
                </form>
            </div>
            <Link to="/AddInternship"><button type="button"  style={{ marginLeft:"20px", overflow: "hidden" }} class="btn btn-outline-success">Add Internship</button></Link>
        </div>
    )
}

export default DataEnter