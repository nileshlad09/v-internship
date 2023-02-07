import React, { useState, useEffect } from "react";
import { useContext } from "react";
import studentContext from '../../context/student/studentContext';
import './DataEnter.css'
import { useHistory } from 'react-router-dom';
function AddInternship() {
   const history=useHistory(); 
  
  const context = useContext(studentContext);
  const { addInternship, crediantial2 ,showAlert,formSubmit} = context;

  if(JSON.stringify(crediantial2)=="{}"){
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


  const handleClick = (e) => {
    e.preventDefault();
    if(crediantial.nameofcompany === undefined || crediantial.contactofcompany === undefined ){
      showAlert("warning","All fields are required");
  }
    else if ( crediantial.nameofcompany.replaceAll(' ', '').length < 1) {
      showAlert("danger","Company Name is required field");
    }
    else if (crediantial.contactofcompany.replaceAll(' ', '').length !== 10) {
      showAlert("danger","Invalid contact Number");
    }
    else if (crediantial.domain==="other" && crediantial.domain2.replaceAll(' ', '').length <1){
      showAlert("danger","Invalid domain");
    }
    else {
      addInternship(crediantial);
      showAlert("success","Internship added successfully");
      formSubmit();
    }
  }


  return (
    <div style={{ overflow: "hidden" }}>
      <div className="internship">
        <form className="g-3" style={{ padding: "20px" }} onSubmit={handleClick}>
          <div className="row">
            <div className="col-md-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  onClick={disableCreateUser}
                />
                <label className="form-check-label" for="flexRadioDefault2">
                  has Internship been done ?
                </label>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  onClick={enableCreateUser}
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  is Internship going on?
                </label>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "30px" }}>
            <div className="col-md-4 dataEnter_input ">
              <label for="startDate" className="form-label">
                Starting Date{" "}
              </label>
              <input type="date" name="startdate" className="form-control" id="startDate"
                value={crediantial.startdate}
                onChange={onchange}
                required />
            </div>
            <div className="col-md-4 dataEnter_input ">
              <label for="endDate" className="form-label">
                Ending Date{" "}
              </label>
              <input type="date" className="form-control" name="enddate" id="user_register"
                value={crediantial.enddate}
                onChange={onchange}
                required />
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
                onChange={onchange}
                required>
                <option value="" >--select--</option>
                <option value="web development">Web Development</option>
                <option value="app development">App Development</option>
                <option value="data science">Data Science</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="col-md-4 dataEnter_input " style={{display: crediantial.domain==="other" ? "block":"none"}}>
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
              <input className="form-control" type="file" id="Certificate" name="certificate" value={crediantial.certificate} onChange={onchange} />
            </div>
          </div>
          <error id="alert-caps"></error>
          <button type="submit" style={{ marginLeft: "10px", overflow: "hidden", marginBottom: "5px" }} className="btn btn-outline-success">
            Add
          </button>
        </form>
      </div>


    </div>
  );
}

export default AddInternship;