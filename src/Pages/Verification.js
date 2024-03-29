import React, { useEffect, useState, useReducer, useRef, useContext } from 'react'
import './CSS/Verification.css'
import { collection, getDocs, deleteDoc, doc, query, limit, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import { addDoc } from 'firebase/firestore';
import { getStorage, ref, deleteObject } from "firebase/storage";
import studentContext from '../context/student/studentContext';
import Spinner from '../Components/Spinner/Spinner';

const Verification = () => {

    const context = useContext(studentContext);
    const { showAlert } = context;


    const [isLoading, setIsLoading] = useState(false);

    const [refesh, forceRefresh] = useReducer(x => x + 1, 0);
    const [data, setTodos] = useState([]);
    const ref2 = useRef(null);
    const refClose = useRef(null);

    const fetchPost = async () => {
        setIsLoading(true);
        await getDocs(query(collection(db, "students"), orderBy("startdate"), limit(12)))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setTodos(newData);
                setIsLoading(false)
            }).catch((e) => {
                showAlert("danger", "Internal error")
                setIsLoading(false)
            })
    }

    useEffect(() => {
        fetchPost();
        // eslint-disable-next-line
    }, [refesh])


    const Duration = (a, b) => {
        var day1 = a.slice(8, 10);
        var day2 = b.slice(8, 10);
        var month1 = a.slice(5, 7);
        var month2 = b.slice(5, 7);
        var year1 = a.slice(0, 4);
        var year2 = b.slice(0, 4);

        var date1 = new Date(`${month1}/${day1}/${year1}`);
        var date2 = new Date(`${month2}/${day2}/${year2}`);
        var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10);
        return Math.round(diffDays / 30);
    }
    const [note, setNote] = useState({});

    const onchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };



    const edit = (item) => {
        ref2.current.click()
        setNote({
            ebranch: item.branch,
            enameofstudent: item.nameofstudent,
            erollNumber: item.rollNumber,
            eemail: item.email,
            emobileNo: item.mobileNo,
            edivision: item.division,
            esemester: item.semester,
            eyear: item.year,
            econtactofcompany: item.contactofcompany,
            enameofcompany: item.nameofcompany,
            edomain: item.domain,
            estartdate: item.startdate,
            eenddate: item.enddate,
            ecertificate: item.certificate,
            eForyear: item.Foryear,
            eid: item.id
        });
    }


    const writetoDB = async (cred) => {
        try {
            await addDoc(collection(db, "acceptedStudents"), {
                Foryear: cred.Foryear ? cred.Foryear : cred.eForyear,
                branch: cred.branch ? cred.branch : cred.ebranch,
                nameofstudent: cred.nameofstudent ? cred.nameofstudent : cred.enameofstudent,
                rollNumber: cred.rollNumber ? cred.rollNumber : cred.erollNumber,
                email: cred.email ? cred.email : cred.eemail,
                mobileNo: cred.mobileNo ? cred.mobileNo : cred.emobileNo,
                division: cred.division ? cred.division : cred.edivision,
                semester: cred.semester ? cred.semester : cred.esemester,
                year: cred.year ? cred.year : cred.eyear,
                contactofcompany: cred.contactofcompany ? cred.contactofcompany : cred.econtactofcompany,
                nameofcompany: cred.nameofcompany ? cred.nameofcompany : cred.enameofcompany,
                domain: cred.domain ? cred.domain : cred.edomain,
                startdate: cred.startdate ? cred.startdate : cred.estartdate,
                enddate: cred.enddate ? cred.enddate : cred.eenddate,
                certificate: cred.certificate ? cred.certificate : cred.ecertificate
            });

            await deleteDoc(doc(db, "students", cred.id ? cred.id : cred.eid))
            forceRefresh();
            refClose.current.click();
            showAlert("success", "data accepted successfully")
        } catch (e) {
            showAlert("danger", "Internal error")
        }
    }

    const accept = (item) => {
        writetoDB(item)
    }

    const reject = async (item) => {
        try {
        const storage = getStorage();
        await deleteDoc(doc(db, "students", item.id ? item.id : item.eid)).then(()=>{deleteObject(ref(storage, item.certificate)).then(()=>{  showAlert("success", "data deleted successfully")})})
        showAlert("success", "data deleted successfully")
        forceRefresh();}
        catch (error) {
            showAlert("danger", "Internal Error")
        }
    }

    const handleClick = (e) => {
        writetoDB(note)
    }


    return (
        <>

            <>
                <button
                    type="button"
                    ref={ref2}
                    className="btn btn-primary d-none "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                    Launch demo modal
                </button>

                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"

                >
                    <div className="modal-dialog model-lg" style={{ width: "90%" }}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Edit Information
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form className="row g-3">
                                    <div className="col-md-12 col-lg-12 row">
                                        <div className="verification_input_box col-lg-3 col-md-4 col-sm-6">
                                            <label htmlFor="inputtext" className="form-label verification_title">Name</label>
                                            <input type="text" value={note.enameofstudent} className="form-control" id="inputEmail4" name='enameofstudent' onChange={onchange} />
                                        </div>
                                        <div className="verification_input_box col-lg-3 col-md-4 col-sm-6">
                                            <label htmlFor="inputAddress" className="form-label verification_title">Roll Number</label>
                                            <input type="text" value={note.erollNumber} className="form-control" id="inputAddress" placeholder="1234 Main St" name='erollNumber' onChange={onchange} />
                                        </div>
                                        <div className="verification_input_box col-lg-3 col-md-4 col-sm-6">
                                            <label htmlFor="inputPassword4" className="form-label verification_title">Email</label>
                                            <input type="email" value={note.eemail} className="form-control" id="inputPassword4" name='eemail' onChange={onchange} />
                                        </div>
                                        <div className="verification_input_box col-lg-3 col-md-4 col-sm-6">
                                            <label htmlFor="inputPassword4" className="form-label verification_title">Phone Number</label>
                                            <input type="tel" value={note.emobileNo} className="form-control" id="inputPassword4" name='emobileNo' onChange={onchange} />
                                        </div>

                                        <div className="verification_input_box col-lg-3 col-md-4 col-sm-6">
                                            <label htmlFor="inputAddress2" className="form-label verification_title">Branch</label>
                                            <input type="text" value={note.ebranch} className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" name='ebranch' onChange={onchange} />
                                        </div>
                                        <div className="verification_input_box col-lg-3 col-md-4 col-sm-6">
                                            <label htmlFor="inputCity" className="form-label verification_title">Div</label>
                                            <input type="text" value={note.edivision} name='edivision' onChange={onchange} className="form-control" id="inputCity" />
                                        </div>
                                        <div className="verification_input_box col-lg-3 col-md-4 col-sm-6">
                                            <label htmlFor="inputCity" className="form-label verification_title">Sem </label>
                                            <input type="text" value={note.esemester} name='esemester' onChange={onchange} className="form-control" id="inputCity" />
                                        </div>
                                        <div className="verification_input_box col-lg-3 col-md-4 col-sm-6">
                                            <label htmlFor="inputCity" className="form-label verification_title">Company </label>
                                            <input type="text" value={note.enameofcompany} name='enameofcompany' onChange={onchange} className="form-control" id="inputCity" />
                                        </div>
                                        <div className="verification_input_box col-lg-3 col-md-4 col-sm-6">
                                            <label htmlFor="inputCity" className="form-label verification_title">Domain</label>
                                            <input type="text" value={note.edomain} name='edomain' onChange={onchange} className="form-control" id="inputCity" />
                                        </div>
                                        <div className="verification_input_box col-lg-3 col-md-4 col-sm-6">
                                            <label htmlFor="inputCity" className="form-label verification_title">Start </label>
                                            <input type="text" value={note.estartdate} name='estartdate' onChange={onchange} className="form-control" id="inputCity" />
                                        </div>
                                        <div className="verification_input_box col-lg-3 col-md-4 col-sm-6">
                                            <label htmlFor="inputCity" className="form-label verification_title">End</label>
                                            <input type="text" value={note.eenddate} name='eenddate' onChange={onchange} className="form-control" id="inputCity" />
                                        </div>
                                        <div className="verification_input_box col-lg-3 col-md-6 col-sm-6">
                                            <label htmlFor="inputCity" className="form-label verification_title">Contact details of internship</label>
                                            <input type="text" value={note.econtactofcompany} name='econtactofcompany' onChange={onchange} className="form-control" id="inputCity" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    ref={refClose}
                                >
                                    Close
                                </button>
                                <button onClick={handleClick} type="button" className="btn btn-primary">
                                    Update & accept Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {isLoading ? <Spinner /> :
                    <div className="verificationPage">

                        {data.length <= 0 ? <h3 style={{ textAlign: "center" }}> Nothing to display</h3> :
                            <div className='container'>
                                <h2>Verification</h2>

                                {
                                    data.map((item) => {
                                        return (
                                            <div className="info verification_section" key={item.id}>
                                                <form className="row g-3">
                                                    <div className="col-md-12 row">
                                                        <div className="verification_input_box col-lg-3 col-md-4 col-sm-6">
                                                            <label htmlFor="inputtext" className="form-label verification_title">Name</label>
                                                            <input type="text" value={item.nameofstudent} readOnly className="form-control" id="inputEmail4" />
                                                        </div>
                                                        <div className="verification_input_box col-lg-3 col-md-4 col-sm-6">
                                                            <label htmlFor="inputAddress" className="form-label verification_title">Roll Number</label>
                                                            <input type="text" value={item.rollNumber} readOnly className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                                        </div>
                                                        <div className="verification_input_box col-lg-3 col-md-4 col-sm-6">
                                                            <label htmlFor="inputPassword4" className="form-label verification_title">Email</label>
                                                            <input type="email" value={item.email} readOnly className="form-control" id="inputPassword4" />
                                                        </div>
                                                        <div className="verification_input_box col-lg-3 col-md-4 col-sm-6">
                                                            <label htmlFor="inputPassword4" className="form-label verification_title">Phone Number</label>
                                                            <input type="tel" value={item.mobileNo} readOnly className="form-control" id="inputPassword4" />
                                                        </div>

                                                        <div className="verification_input_box col-lg-3 col-md-4 col-sm-6">
                                                            <label htmlFor="inputAddress2" className="form-label verification_title">Branch</label>
                                                            <input type="text" value={item.branch} readOnly className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                                        </div>
                                                        <div className="verification_input_box col-lg-3 col-md-4 col-sm-6">
                                                            <label htmlFor="inputCity" className="form-label verification_title">Div</label>
                                                            <input type="text" value={item.division} readOnly className="form-control" id="inputCity" />
                                                        </div>
                                                        <div className="verification_input_box col-lg-3 col-md-4 col-sm-6">
                                                            <label htmlFor="inputCity" className="form-label verification_title">Sem </label>
                                                            <input type="text" value={item.semester} readOnly className="form-control" id="inputCity" />
                                                        </div>
                                                        <div className="verification_input_box col-lg-3 col-md-4 col-sm-6">
                                                            <label htmlFor="inputCity" className="form-label verification_title">Company </label>
                                                            <input type="text" value={item.nameofcompany} readOnly className="form-control" id="inputCity" />
                                                        </div>
                                                        <div className="verification_input_box col-lg-3 col-md-4 col-sm-6">
                                                            <label htmlFor="inputCity" className="form-label verification_title">Domain</label>
                                                            <input type="text" value={item.domain} readOnly className="form-control" id="inputCity" />
                                                        </div>
                                                        <div className="verification_input_box col-lg-3 col-md-4 col-sm-6">
                                                            <label htmlFor="inputCity" className="form-label verification_title">Start </label>
                                                            <input type="text" value={item.startdate} readOnly className="form-control" id="inputCity" />
                                                        </div>
                                                        <div className="verification_input_box col-lg-3 col-md-4 col-sm-6">
                                                            <label htmlFor="inputCity" className="form-label verification_title">End</label>
                                                            <input type="text" value={item.enddate} readOnly className="form-control" id="inputCity" />
                                                        </div>
                                                        <div className="verification_input_box col-lg-3 col-md-4 col-sm-6">
                                                            <label htmlFor="inputCity" className="form-label verification_title">Duration</label>
                                                            <input type="text" value={(item.enddate === " " || item.enddate === "" ) ? "NA" : `${Duration(item.startdate, item.enddate)} months`} readOnly className="form-control" id="inputCity" />
                                                        </div>
                                                        <div className="verification_input_box col-lg-3 col-md-4 col-sm-6">
                                                            <label htmlFor="inputCity" className="form-label verification_title">Contact details of internship</label>
                                                            <input type="text" value={item.contactofcompany} readOnly className="form-control" id="inputCity" />
                                                        </div>
                                                        <div className="verification_input_box col-lg-3 col-md-4 col-sm-6">
                                                            <label htmlFor="inputCity" className="form-label verification_title">Certificate/Joining Letter</label>
                                                            <a href={item.certificate} target='_blank' rel="noreferrer" style={{ color: "blue", listStyle: "none" }}><button type="button" className="btn btn-info">view certificate</button></a>
                                                        </div>

                                                    </div>
                                                    <div className="col-12 verification_Btn">
                                                        <button type="button" className="btn btn-success" onClick={() => accept(item)}>Accept</button>
                                                        <button type="button" className="btn btn-danger" onClick={() => reject(item)}>Reject</button>
                                                        <button type="button" className="btn btn-primary" onClick={() => edit(item)}>Edit</button>
                                                    </div>
                                                </form>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }

                    </div>
                }
            </>

        </>
    )
}

export default Verification;
