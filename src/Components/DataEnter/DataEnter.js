import React from 'react'
import { Link } from 'react-router-dom'
import './DataEnter.css'
const DataEnter = () => {
    return (
        <div>
            <div style={{ paddingTop: "30px", overflow: "hidden" }}>
                <form class="row g-3" style={{ padding: "20px" }}>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Name</label>
                        <input type="email" class="form-control" id="inputEmail4" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Roll Number</label>
                        <input type="text" class="form-control" id="inputPassword4" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputAddress" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputAddress" placeholder="Example@vit.edu.in" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputAddress" class="form-label">Division</label>
                        <select name="state" id="state" class="form-select" >
                            <option>Division</option>
                            <option >A</option>
                            <option >B</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="inputAddress" class="form-label">Select Batch</label>
                        <select name="state" id="state" class="form-select" >
                            <option>Select Batch</option>
                            <option >B1</option>
                            <option >B2</option>
                            <option >B3</option>
                            <option >B4</option>
                        </select>
                    </div>
                    <div class="col-md-6">
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