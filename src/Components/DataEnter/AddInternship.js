import React, { useState, useEffect } from "react";
import { useContext } from "react";
import studentContext from '../../context/student/studentContext';
import './DataEnter.css'
import { useHistory } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { domains } from '../../DataFiles/dataManages'
import Spinner from "../Spinner/Spinner"
import { useRef } from "react";
function AddInternship() {

  const ref = useRef(null);
  const history = useHistory();
  const context = useContext(studentContext);
  const { addInternship, setCrediential2, crediantial2, showAlert } = context;

  const [isLoading, setIsLoading] = useState(false);

  if (JSON.stringify(crediantial2) === "{}") {
    history.push('/addinternship/1');
  }


  const [crediantial, setCrediential] = useState({});
  const onchange = (e) => {
    setCrediential({ ...crediantial, [e.target.name]: e.target.value });
  };


  useEffect(() => {
    setCrediential({ ...crediantial2, ...crediantial });
    // eslint-disable-next-line 
  }, [])

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  var dummyYear;

  if (month >= 6) {
    dummyYear = `${year}-${Number(String(year).slice(2, 4)) + 1}`
  } else {
    dummyYear = `${year - 1}-${String(year).slice(2, 4)}`
  }


  //firebase code
  async function writetoDB(cred, imagelink) {
    try {
      await addDoc(collection(db, "students"), {
        Foryear: dummyYear,
        branch: cred.branch,
        nameofstudent: cred.nameofstudent,
        rollNumber: cred.rollNumber,
        email: cred.email,
        mobileNo: cred.mobileNo,
        division: cred.division,
        semester: cred.semester,
        year: cred.year,
        contactofcompany: cred.contactofcompany,
        nameofcompany: cred.nameofcompany,
        domain: cred.domain === "other" ? cred.domain2 : cred.domain,
        startdate: cred.startdate,
        enddate: cred.enddate ? cred.enddate : " ",
        certificate: imagelink,
      });
      setIsLoading(false);
      // showAlert("success", "Internship added successfully");
      setCrediential2(null);
      // history.push('/');
      ref.current.click()
    } catch (e) {
      setIsLoading(false);
      console.error("Error adding document: ", e);
      showAlert("danger", "Internal Error");
    }
  }



  // file upload 
  const [imageuploaded, setImageuploaded] = useState(null);

  // const [imageURL, setimageURL] = useState("");
  // useEffect(() => {
  //   // console.log(imageURL)
  // }, [imageURL])
  // useEffect(() => { console.log(imageuploaded) }, [imageuploaded])
  const fileUpload = (imageuploaded) => {

      var a = new Date();
      var b = String(a).slice(0,25).replaceAll(' ', '').toLowerCase()
      if (imageuploaded === null) return;
      // generate a unique filename
      const fileName = `${dummyYear}_${crediantial.year}_${crediantial.rollNumber}_${crediantial.startdate}_${b}.${imageuploaded.name.split('.').pop()}`
      // filename will look like rollNumber_startdate.extension
      // the actual code to upload the file
      var task = storage.ref(`/certificates/${dummyYear}/` + fileName).put(imageuploaded);
       
      // and getting the download URL
      task.then((res) => {
        res.ref.getDownloadURL().then((url) => {
          writetoDB(crediantial, url);
        }).catch(()=>{
          showAlert("danger", "Internal Error");
          setIsLoading(false);   
        }); //finally write to DB after we get the URL
      }).catch(()=>{
        showAlert("danger", "Internal Error");
        setIsLoading(false);   
      }) 
  }


  const handleClick = (e) => {

    e.preventDefault();
    if (crediantial.nameofcompany === undefined || crediantial.contactofcompany === undefined || crediantial.domain === undefined || crediantial.startdate === undefined) {
      showAlert("warning", "All fields are required");
    }
    else if (crediantial.nameofcompany.replaceAll(' ', '').length < 1) {
      showAlert("warning", "Company Name is required field");
    }
    else if (crediantial.contactofcompany.replaceAll(' ', '').length !== 10) {
      showAlert("warning", "Invalid contact Number");
    }
    else if (crediantial.domain === "other" && crediantial.domain2.replaceAll(' ', '').length < 1) {
      showAlert("warning", "Invalid domain");
    }
    else if (imageuploaded != null && imageuploaded?.size > 1e+6) {
      showAlert("warning", "Please upload a file smaller than 1 MB");
    }
    else {
      addInternship(crediantial);
      fileUpload(imageuploaded);
      setIsLoading(true);
      // showAlert("success", "Internship added successfully");
      //writetoDB(crediantial);
      // Commenting out this write because we need to write the data after the file is uploaded
      // so we can get the URL
      // Hence the writetoDB is called after we get the file URL
    }
  }

  const [isSubscribed, setIsSubscribed] = useState(false);
  const intStatus = (e) => {
    setIsSubscribed(current => !current);
  }

  const popupaccepted = ()=>{
    history.push("/")
    ref.current.click();
  }


  return (
    <>
      <button type="button" className="btn btn-primary" ref={ref} data-toggle="modal" style={{ display: "none" }} data-target=".bd-example-modal-sm">Small modal</button>
      <div className="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm modelPopup">
          <div className="modal-content modelPopup2">
            <div className="popupicon">
              <i className="far fa-check-circle"></i>
            </div>
            <h5 className="popupheading">Your submission has been received.</h5>
            <div className="popupBtn">
                <button className="btn btn-primary" onClick={popupaccepted}>Back to Home Page</button>
            </div>
          </div>
        </div>
      </div>

      {isLoading ? <Spinner /> :
        <div style={{ overflow: "hidden", border: "1px solid gray", marginTop: "40px" }}>
          <div className="internship">
            <form className="g-3" style={{ padding: "20px" }} onSubmit={handleClick}>
              <h4>Internship Detail</h4>
              <div className="row" style={{ marginTop: "30px" }}>
                <div className="col-md-4 dataEnter_input ">
                  <label htmlFor="startDate" className="form-label">
                    Starting Date{" "}
                  </label>
                  <input type="date" name="startdate" className="form-control" id="startDate"
                    value={crediantial.startdate}
                    onChange={onchange}
                    required
                  />
                </div>
                <div className="col-md-4 dataEnter_input ">
                  <label htmlFor="endDate" className="form-label">
                    Ending Date{" "}
                  </label>
                  <input type="date" className="form-control" name="enddate" id="user_register" required
                    value={crediantial.enddate}
                    onChange={onchange}
                    min={crediantial.startdate}
                    disabled={isSubscribed}
                  />

                  <div className="form-check mt-3" >
                    <input className="form-check-input" type="checkbox" value={isSubscribed} id="flexCheckDefault" onClick={intStatus} />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      is internship going on?
                    </label>
                  </div>

                </div>
                <div className="col-md-4 dataEnter_input ">
                  <label htmlFor="companyName" className="form-label">
                    Name of Company
                  </label>
                  <input type="text" className="form-control" name="nameofcompany" id="companyName"
                    value={crediantial.nameofcompany}
                    onChange={onchange}
                  />
                </div>
                <div className="col-md-4 dataEnter_input ">
                  <label htmlFor="Domain" className="form-label">
                    Domain of Internship
                  </label>
                  <select name="domain" id="Domain" className="form-select" value={crediantial.domain}
                    onChange={onchange}>
                    <option value="" defaultValue>--select--</option>
                    {
                      domains.map((d) => (
                        <option key={d.domain} value={d.domain}>{d.domain}</option>
                      ))
                    }
                  </select>
                </div>

                <div className="col-md-4 dataEnter_input " style={{ display: crediantial.domain === "other" ? "block" : "none" }}>
                  <label htmlFor="Domain2" className="form-label">
                    please specify(domain)
                  </label>
                  <input type="text" name="domain2" id="Domain2" className="form-control" value={crediantial.domain2}
                    onChange={onchange}
                  >
                  </input>
                </div>



                <div className="col-md-4 dataEnter_input ">
                  <label htmlFor="internshipContact" className="form-label">
                    Contact details of internship
                  </label>
                  <input type="tel" className="form-control" id="internshipContact" maxLength="10" name="contactofcompany" value={crediantial.contactofcompany}
                    onChange={onchange}
                  />
                </div>
                <div className="col-md-4 dataEnter_input ">
                  <label htmlFor="Certificate" className="form-label">
                    Certificate/Joining Letter
                  </label>
                  <input className="form-control" type="file" id="Certificate" accept="image/jpeg, image/png, application/pdf" name="certificate" required
                    value={crediantial.certificate} onChange={(e) => {
                      setImageuploaded(e.target.files[0]);
                    }} />
                </div>
              </div>
              <button type="submit" style={{ marginLeft: "10px", overflow: "hidden", marginBottom: "5px" }} className="btn btn-outline-danger" disabled={isLoading}>
                Add
              </button>
            </form>
          </div>
        </div>
      }
    </>
  );
}

export default AddInternship;