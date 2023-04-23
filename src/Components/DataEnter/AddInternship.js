import React, { useState, useEffect } from "react";
import { useContext } from "react";
import studentContext from '../../context/student/studentContext';
import './DataEnter.css'
import { useHistory } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { domains } from '../../DataFiles/dataManages'


function AddInternship() {

  const history = useHistory();
  const context = useContext(studentContext);
  const { addInternship, setCrediential2, crediantial2, showAlert } = context;



  if (JSON.stringify(crediantial2) == "{}") {
    history.push('/addinternship/1');
  }

  const enableCreateUser = () => {
    document.getElementById("user_register").disabled = true;
  };

  const disableCreateUser = () => {
    document.getElementById("user_register").disabled = false;
  };


  const [crediantial, setCrediential] = useState({});
  const onchange = (e) => {
    setCrediential({ ...crediantial, [e.target.name]: e.target.value });
  };


  useEffect(() => {
    setCrediential({ ...crediantial2, ...crediantial });
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
  function writetoDB(cred, imagelink) {
    try {
      const docRef = addDoc(collection(db, "students"), {
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
        domain: cred.domain == "other" ? cred.domain2 : cred.domain,
        startdate: cred.startdate,
        enddate: cred.enddate ? cred.enddate : " ",
        certificate: imagelink,
      });

      showAlert("success", "Internship added successfully");
      setCrediential2(null);
      history.push('/');
    } catch (e) {
      // console.error("Error adding document: ", e);
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
    if (imageuploaded == null) return;
    // generate a unique filename
    const fileName = `${crediantial.dummyYear}_${crediantial.year}_${crediantial.rollNumber}_${crediantial.startdate}.${imageuploaded.name.split('.').pop()}`
    // filename will look like rollNumber_startdate.extension
    // the actual code to upload the file
    var task = storage.ref('/certificates/' + fileName).put(imageuploaded)
    // and getting the download URL
    task.then((res) => {
      res.ref.getDownloadURL().then((url) => {
        writetoDB(crediantial, url);
      }); //finally write to DB after we get the URL
    });
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
    else {
      addInternship(crediantial);
      fileUpload(imageuploaded);
      // showAlert("success", "Internship added successfully");
      //writetoDB(crediantial);
      // Commenting out this write because we need to write the data after the file is uploaded
      // so we can get the URL
      // Hence the writetoDB is called after we get the file URL
    }
  }

  const [isSubscribed, setIsSubscribed] = useState(false);
  const intStatus = (e) => {
    console.log(e.target.checked)
    setIsSubscribed(current => !current);
  }


  return (
    <div style={{ overflow: "hidden", border: "1px solid gray", marginTop: "40px" }}>
      <div className="internship">
        <form className="g-3" style={{ padding: "20px" }} onSubmit={handleClick}>
          <h4>Internship Detail</h4>
          <div className="row" style={{ marginTop: "30px" }}>
            <div className="col-md-4 dataEnter_input ">
              <label for="startDate" className="form-label">
                Starting Date{" "}
              </label>
              <input type="date" name="startdate" className="form-control" id="startDate"
                value={crediantial.startdate}
                onChange={onchange}
                required
              />
            </div>
            <div className="col-md-4 dataEnter_input ">
              <label for="endDate" className="form-label">
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
                <label className="form-check-label" for="flexCheckDefault">
                  is internship going on?
                </label>
              </div>

            </div>
            <div className="col-md-4 dataEnter_input ">
              <label for="companyName" className="form-label">
                Name of Company
              </label>
              <input type="text" className="form-control" name="nameofcompany" id="companyName"
                value={crediantial.nameofcompany}
                onChange={onchange}
              />
            </div>
            <div className="col-md-4 dataEnter_input ">
              <label for="Domain" className="form-label">
                Domain of Internship
              </label>
              <select name="domain" id="Domain" className="form-select" value={crediantial.domain}
                onChange={onchange}>
                <option value="" defaultValue>--select--</option>
                {
                  domains.map((d) => (
                    <option value={d.domain}>{d.domain}</option>
                  ))
                }
              </select>
            </div>

            <div className="col-md-4 dataEnter_input " style={{ display: crediantial.domain === "other" ? "block" : "none" }}>
              <label for="Domain2" className="form-label">
                please specify(domain)
              </label>
              <input type="text" name="domain2" id="Domain2" className="form-control" value={crediantial.domain2}
                onChange={onchange}
              >
              </input>
            </div>



            <div className="col-md-4 dataEnter_input ">
              <label for="internshipContact" className="form-label">
                Contact details of internship
              </label>
              <input type="tel" className="form-control" id="internshipContact" maxLength="10" name="contactofcompany" value={crediantial.contactofcompany}
                onChange={onchange}
              />
            </div>
            <div className="col-md-4 dataEnter_input ">
              <label for="Certificate" className="form-label">
                Certificate/Joining Letter
              </label>
              <input className="form-control" type="file" id="Certificate" name="certificate" required
                value={crediantial.certificate} onChange={(e) => {
                  setImageuploaded(e.target.files[0]);
                }} />
            </div>
          </div>
          <button type="submit" style={{ marginLeft: "10px", overflow: "hidden", marginBottom: "5px" }} className="btn btn-outline-danger">
            Add
          </button>
        </form>
      </div>


    </div>
  );
}

export default AddInternship;