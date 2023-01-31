import React from 'react'
import './Verification.css'
import data from '../../DataFiles/studentdata'
const Verification = () => {
    const Duration = (a, b) => {
        var day1 = a.slice(0, 2);
        var day2 = b.slice(0, 2);
        var month1 = a.slice(3, 5);
        var month2 = b.slice(3, 5);
        var year1 = a.slice(6, 10);
        var year2 = b.slice(6, 10);

        var date1 = new Date(`${month1}/${day1}/${year1}`);
        var date2 = new Date(`${month2}/${day2}/${year2}`);
        var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10);
        return Math.round(diffDays / 30);
    }

    return (
        <div>
            {
                data.map((item) => {
                    return (
                        <div className="info verification_section">
                            <form class="row g-3">
                                <div className="col-md-5 row">
                                    <div class="verification_input_box col-md-7">
                                        <label for="inputtext" class="form-label verification_title">Name</label>
                                        <input type="text" value={item.fname} class="form-control" id="inputEmail4" />
                                    </div>
                                    <div class="verification_input_box col-md-5">
                                        <label for="inputAddress" class="form-label verification_title">Roll Number</label>
                                        <input type="text" value={item.roll} class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                    </div>
                                    <div class="verification_input_box col-md-7">
                                        <label for="inputPassword4" class="form-label verification_title">Email</label>
                                        <input type="email" value={item.email} class="form-control" id="inputPassword4" />
                                    </div>
                                    <div class="verification_input_box col-md-5">
                                        <label for="inputPassword4" class="form-label verification_title">Phone Number</label>
                                        <input type="tel" value={723628936864} class="form-control" id="inputPassword4" />
                                    </div>
                                    
                                    <div class="verification_input_box col-md-3">
                                        <label for="inputAddress2" class="form-label verification_title">Branch</label>
                                        <input type="text" value={item.branch} class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                    </div>
                                    <div class="verification_input_box col-md-2">
                                        <label for="inputCity" class="form-label verification_title">Div</label>
                                        <input type="text" value={item.div} class="form-control" id="inputCity" />
                                    </div>
                                    <div class="verification_input_box col-md-2">
                                        <label for="inputCity" class="form-label verification_title">Sem </label>
                                        <input type="text" value={item.Sem} class="form-control" id="inputCity" />
                                    </div>
                                    <div class="verification_input_box col-md-3">
                                        <label for="inputCity" class="form-label verification_title">Batch</label>
                                        <input type="text" value={item.Batch} class="form-control" id="inputCity" />
                                    </div>

                                </div>
                                
                                <div className="col-md-6 row">
                                    <div class="verification_input_box col-md-6">
                                        <label for="inputCity" class="form-label verification_title">Company </label>
                                        <input type="text" value={item.Company} class="form-control" id="inputCity" />
                                    </div>
                                    <div class="verification_input_box col-md-6">
                                        <label for="inputCity" class="form-label verification_title">Domain</label>
                                        <input type="text" value={item.Domain} class="form-control" id="inputCity" />
                                    </div>
                                    <div class="verification_input_box col-md-4">
                                        <label for="inputCity" class="form-label verification_title">Start </label>
                                        <input type="text" value={item.start} class="form-control" id="inputCity" />
                                    </div>
                                    <div class="verification_input_box col-md-4">
                                        <label for="inputCity" class="form-label verification_title">End</label>
                                        <input type="text" value={item.end} class="form-control" id="inputCity" />
                                    </div>
                                    <div class="verification_input_box col-md-4">
                                        <label for="inputCity" class="form-label verification_title">Duration</label>
                                        <input type="text" value={`${Duration(item.start, item.end)} month`} class="form-control" id="inputCity" />
                                    </div>
                                    <div class="verification_input_box col-md-6">
                                        <label for="inputCity" class="form-label verification_title">Contact details of internship</label>
                                        <input type="text" value={1212893479} class="form-control" id="inputCity" />
                                    </div>
                                    <div class="verification_input_box col-md-6">
                                        <label for="inputCity" class="form-label verification_title">Certificate/Joining Letter</label>
                                        <input type="file" class="form-control" id="inputCity" />
                                    </div>
                                    
                                </div>
                                <div class="col-12 verification_Btn">
                                    <button type="submit" class="btn btn-primary">Edit</button>
                                    <button type="submit" class="btn btn-success">Accept</button>
                                    <button type="submit" class="btn btn-danger">Reject</button>
                                </div>
                            </form>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default Verification;
