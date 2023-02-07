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
                            <form className="row g-3">
                                <div className="col-md-5 row">
                                    <div className="verification_input_box col-md-7">
                                        <label for="inputtext" className="form-label verification_title">Name</label>
                                        <input type="text" value={item.fname} className="form-control" id="inputEmail4" />
                                    </div>
                                    <div className="verification_input_box col-md-5">
                                        <label for="inputAddress" className="form-label verification_title">Roll Number</label>
                                        <input type="text" value={item.roll} className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                    </div>
                                    <div className="verification_input_box col-md-7">
                                        <label for="inputPassword4" className="form-label verification_title">Email</label>
                                        <input type="email" value={item.email} className="form-control" id="inputPassword4" />
                                    </div>
                                    <div className="verification_input_box col-md-5">
                                        <label for="inputPassword4" className="form-label verification_title">Phone Number</label>
                                        <input type="tel" value={723628936864} className="form-control" id="inputPassword4" />
                                    </div>
                                    
                                    <div className="verification_input_box col-md-3">
                                        <label for="inputAddress2" className="form-label verification_title">Branch</label>
                                        <input type="text" value={item.branch} className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                    </div>
                                    <div className="verification_input_box col-md-2">
                                        <label for="inputCity" className="form-label verification_title">Div</label>
                                        <input type="text" value={item.div} className="form-control" id="inputCity" />
                                    </div>
                                    <div className="verification_input_box col-md-2">
                                        <label for="inputCity" className="form-label verification_title">Sem </label>
                                        <input type="text" value={item.Sem} className="form-control" id="inputCity" />
                                    </div>
                                    <div className="verification_input_box col-md-3">
                                        <label for="inputCity" className="form-label verification_title">Batch</label>
                                        <input type="text" value={item.Batch} className="form-control" id="inputCity" />
                                    </div>

                                </div>
                                
                                <div className="col-md-6 row">
                                    <div className="verification_input_box col-md-6">
                                        <label for="inputCity" className="form-label verification_title">Company </label>
                                        <input type="text" value={item.Company} className="form-control" id="inputCity" />
                                    </div>
                                    <div className="verification_input_box col-md-6">
                                        <label for="inputCity" className="form-label verification_title">Domain</label>
                                        <input type="text" value={item.Domain} className="form-control" id="inputCity" />
                                    </div>
                                    <div className="verification_input_box col-md-4">
                                        <label for="inputCity" className="form-label verification_title">Start </label>
                                        <input type="text" value={item.start} className="form-control" id="inputCity" />
                                    </div>
                                    <div className="verification_input_box col-md-4">
                                        <label for="inputCity" className="form-label verification_title">End</label>
                                        <input type="text" value={item.end} className="form-control" id="inputCity" />
                                    </div>
                                    <div className="verification_input_box col-md-4">
                                        <label for="inputCity" className="form-label verification_title">Duration</label>
                                        <input type="text" value={`${Duration(item.start, item.end)} month`} className="form-control" id="inputCity" />
                                    </div>
                                    <div className="verification_input_box col-md-6">
                                        <label for="inputCity" className="form-label verification_title">Contact details of internship</label>
                                        <input type="text" value={1212893479} className="form-control" id="inputCity" />
                                    </div>
                                    <div className="verification_input_box col-md-6">
                                        <label for="inputCity" className="form-label verification_title">Certificate/Joining Letter</label>
                                        {/* <input type="file" className="form-control" id="inputCity" /> */}
                                         <a href=" " style={{color:"blue",listStyle:"none"}}> View</a>
                                    </div>
                                    
                                </div>
                                <div className="col-12 verification_Btn">
                                    <button type="submit" className="btn btn-primary">Edit</button>
                                    <button type="submit" className="btn btn-success">Accept</button>
                                    <button type="submit" className="btn btn-danger">Reject</button>
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
