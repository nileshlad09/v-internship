import React from 'react'
import './studentadddata.css'
import { useState } from 'react';
const StudentaddData = () => {
    const [crediantial, setCrediantial] = useState({
        semester: "",
        domain: "",
        companyname: "",
        hrcontact: "",
        semester: "",
        startDate: "",
        endDate: "",
    });
    const onchange = (e) => {
        setCrediantial({ ...crediantial, [e.target.name]: e.target.value });
    };
    const handleclick = (e) => {
        e.preventDefault();
        console.log(crediantial);
    }
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
                </form>
            </div>

            <div style={{ paddingTop: "30px", overflow: "hidden" }}>
                <h3 style={{ paddingLeft: "20px" }}>Enter Internship Detail</h3>
                <form class="row g-3" style={{ padding: "20px" }} onSubmit={handleclick}>
                    <div class="col-md-4">
                        <label for="inputSem" class="form-label">Semester</label>
                        <select
                            required
                            class="form-control" id="inputSem"
                            onChange={onchange}
                            value={crediantial.semester}
                            name="semester"
                        >
                            <option disabled selected>
                                --select--
                            </option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <label for="inputCompany" class="form-label">Company Name</label>
                        <input type="text" class="form-control" id="inputCompany"
                        required
                        value={crediantial.companyname}
                        name="companyname"
                        onChange={onchange}/>
                    </div>
                    <div class="col-md-4">
                        <label for="inputDomain" class="form-label">Domain</label>
                        <select
                            required
                            class="form-control" id="inputDomain"
                            onChange={onchange}
                            value={crediantial.domain}
                            name="domain"
                        >
                            <option disabled selected>
                                --select--
                            </option>
                            <option value="Web development">Web development</option>
                            <option value="Data Science">Data Science</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <label for="inputhr" class="form-label">HR Contact Detail</label>
                        <input type="text" class="form-control" id="inputhr"
                        required
                        value={crediantial.hrcontact}
                        name="hrcontact"
                        onChange={onchange} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputStartDate" class="form-label">Start Date</label>
                        <input type="date" class="form-control" id="inputStartDate"
                        required
                        value={crediantial.startDate}
                        name="startDate"
                        onChange={onchange} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputEndDate" class="form-label">End Date</label>
                        <input type="date" class="form-control" id="inputEndDate"
                        required
                        value={crediantial.endDate}
                        name="endDate"
                        onChange={onchange} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputfile" class="form-label">Internship Certificate</label>
                        <input type="file" class="form-control" id="inputfile"
                        value={crediantial.certificate}
                        name="certificate"
                        onChange={onchange} />
                    </div>
                    <div class="col-md-4 btnGroup">
                      <button type="submit" class="btn btn-success">Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default StudentaddData