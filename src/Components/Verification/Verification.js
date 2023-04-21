import React, { useEffect, useState,useReducer } from 'react'
import './Verification.css'
import data from '../../DataFiles/studentdata'
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const Verification = () => {
    const [refesh,forceRefresh]=useReducer(x=>x+1,0);
    const [data, setTodos] = useState([]);
    const reject = async (item) => {
        await deleteDoc(doc(db,"students",item.id))
        forceRefresh();
    }


    const fetchPost = async () => {
        await getDocs(collection(db, "students"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id:doc.id }));
                setTodos(newData);
            })
    }

    useEffect(() => {
        fetchPost();
    }, [refesh])

console.log(data)

    const Duration = (a, b) => {
        var day1 = a.slice(8, 10);
        var day2 = b.slice(8, 10);
        var month1 = a.slice(5, 7);
        var month2 = b.slice(5, 7);
        var year1 = a.slice(0, 4);
        var year2 = b.slice(0, 4);
        // console.log(year1)

        var date1 = new Date(`${month1}/${day1}/${year1}`);
        var date2 = new Date(`${month2}/${day2}/${year2}`);
        var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10);
        return Math.round(diffDays / 30);
    }

    return (
        <>
        {data.length<=0?<h3 style={{textAlign:"center"}}>Nothing to display</h3>:
        <div className='container'>
            {
                data.map((item,id) => {
                    return (
                        <div className="info verification_section" id={id}>
                            <form className="row g-3">
                                <div className="col-md-5 row">
                                    <div className="verification_input_box col-md-7">
                                        <label for="inputtext" className="form-label verification_title">Name</label>
                                        <input type="text" value={item.nameofstudent} className="form-control" id="inputEmail4" />
                                    </div>
                                    <div className="verification_input_box col-md-5">
                                        <label for="inputAddress" className="form-label verification_title">Roll Number</label>
                                        <input type="text" value={item.rollNumber} className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                    </div>
                                    <div className="verification_input_box col-md-7">
                                        <label for="inputPassword4" className="form-label verification_title">Email</label>
                                        <input type="email" value={item.email} className="form-control" id="inputPassword4" />
                                    </div>
                                    <div className="verification_input_box col-md-5">
                                        <label for="inputPassword4" className="form-label verification_title">Phone Number</label>
                                        <input type="tel" value={item.mobileNo} className="form-control" id="inputPassword4" />
                                    </div>

                                    <div className="verification_input_box col-md-3">
                                        <label for="inputAddress2" className="form-label verification_title">Branch</label>
                                        <input type="text" value={item.branch} className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                    </div>
                                    <div className="verification_input_box col-md-2">
                                        <label for="inputCity" className="form-label verification_title">Div</label>
                                        <input type="text" value={item.division} className="form-control" id="inputCity" />
                                    </div>
                                    <div className="verification_input_box col-md-2">
                                        <label for="inputCity" className="form-label verification_title">Sem </label>
                                        <input type="text" value={item.semester} className="form-control" id="inputCity" />
                                    </div>
                                    <div className="verification_input_box col-md-3">
                                        <label for="inputCity" className="form-label verification_title">Batch</label>
                                        <input type="text" value={item.batch} className="form-control" id="inputCity" />
                                    </div>

                                </div>

                                <div className="col-md-6 row">
                                    <div className="verification_input_box col-md-6">
                                        <label for="inputCity" className="form-label verification_title">Company </label>
                                        <input type="text" value={item.nameofcompany} className="form-control" id="inputCity" />
                                    </div>
                                    <div className="verification_input_box col-md-6">
                                        <label for="inputCity" className="form-label verification_title">Domain</label>
                                        <input type="text" value={item.domain} className="form-control" id="inputCity" />
                                    </div>
                                    <div className="verification_input_box col-md-4">
                                        <label for="inputCity" className="form-label verification_title">Start </label>
                                        <input type="text" value={item.startdate} className="form-control" id="inputCity" />
                                    </div>
                                    <div className="verification_input_box col-md-4">
                                        <label for="inputCity" className="form-label verification_title">End</label>
                                        <input type="text" value={item.enddate} className="form-control" id="inputCity" />
                                    </div>
                                    <div className="verification_input_box col-md-4">
                                        <label for="inputCity" className="form-label verification_title">Duration</label>
                                        <input type="text" value={item.enddate == " " ? "NA" : `${Duration(item.startdate, item.enddate)} months`} className="form-control" id="inputCity" />
                                    </div>
                                    <div className="verification_input_box col-md-6">
                                        <label for="inputCity" className="form-label verification_title">Contact details of internship</label>
                                        <input type="text" value={item.contactofcompany} className="form-control" id="inputCity" />
                                    </div>
                                    <div className="verification_input_box col-md-6">
                                        <label for="inputCity" className="form-label verification_title">Certificate/Joining Letter</label>
                                        <a href={item.certificate} target='_blank' style={{ color: "blue", listStyle: "none" }}> View</a>
                                    </div>

                                </div>
                                <div className="col-12 verification_Btn">
                                    <button type="submit" className="btn btn-primary">Edit</button>
                                    <button type="submit" className="btn btn-success">Accept</button>
                                    <button type="button" className="btn btn-danger" onClick={() => reject(item)}>Reject</button>
                                </div>
                            </form>
                        </div>
                    )
                })
            }
        </div>
}
        </>
    )
}

export default Verification;
