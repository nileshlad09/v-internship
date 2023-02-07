import React, { useState, useEffect } from "react";
import { useContext } from "react";
import studentContext from '../../context/student/studentContext';
import './DataEnter.css'
import { useHistory } from 'react-router-dom';
function AddInternship() {
   const history=useHistory(); 
  
   
   

  const context = useContext(studentContext);
  const { addInternship, crediantial2 } = context;

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
    if (crediantial.nameofcompany == undefined || crediantial.nameofcompany.replaceAll(' ', '').length < 1) {
      alert("Company Name is required field");
    }
    else if (crediantial.contactofcompany.replaceAll(' ', '').length != 10) {
      console.log(crediantial.contactofcompany)
      alert("Invalid contact Number");
    }
    else if (crediantial.domain=="other" && crediantial.domain2.replaceAll(' ', '').length <1){
      alert("Invalid domain");
    }
    else {
      addInternship(crediantial);
    }
  }


  return (
    <div style={{ overflow: "hidden" }}>
      <div className="internship">
        <form class="g-3" style={{ padding: "20px" }} onSubmit={handleClick}>
          <div className="row">
            <div class="col-md-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  onClick={disableCreateUser}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  has Internship been done ?
                </label>
              </div>
            </div>
            <div class="col-md-3 ">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  onClick={enableCreateUser}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  is Internship going on?
                </label>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "30px" }}>
            <div class="col-md-4 dataEnter_input ">
              <label for="startDate" class="form-label">
                Starting Date{" "}
              </label>
              <input type="date" name="startdate" class="form-control" id="startDate"
                value={crediantial.startdate}
                onChange={onchange}
                required />
            </div>
            <div class="col-md-4 dataEnter_input ">
              <label for="endDate" class="form-label">
                Ending Date{" "}
              </label>
              <input type="date" class="form-control" name="enddate" id="user_register"
                value={crediantial.enddate}
                onChange={onchange}
                required />
            </div>
            <div class="col-md-4 dataEnter_input ">
              <label for="companyName" class="form-label">
                Name of Company
              </label>
              <input type="text" class="form-control" name="nameofcompany" id="companyName"
                value={crediantial.nameofcompany}
                onChange={onchange}
                required />
            </div>
            <div class="col-md-4 dataEnter_input ">
              <label for="Domain" class="form-label">
                Domain of Internship
              </label>
              <select name="domain" id="Domain" class="form-select" value={crediantial.domain}
                onChange={onchange}
                required>
                <option value="" >--select--</option>
                <option value="web development">Web Development</option>
                <option value="app development">App Development</option>
                <option value="data science">Data Science</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div class="col-md-4 dataEnter_input " style={{display: crediantial.domain=="other" ? "block":"none"}}>
              <label for="Domain2" class="form-label">
                please specify(domain)
              </label>
              <input type="text" name="domain2" id="Domain2" class="form-control" value={crediantial.domain2}
                onChange={onchange}
                >
              </input>
            </div>
            


            <div class="col-md-4 dataEnter_input ">
              <label for="internshipContact" class="form-label">
                Contact details of internship
              </label>
              <input type="tel" class="form-control" id="internshipContact" maxLength="10" name="contactofcompany" value={crediantial.contactofcompany}
                onChange={onchange}
                required />
            </div>
            <div class="col-md-4 dataEnter_input ">
              <label for="Certificate" class="form-label">
                Certificate/Joining Letter
              </label>
              <input class="form-control" type="file" id="Certificate" name="certificate" value={crediantial.certificate} onChange={onchange} />
            </div>
          </div>
          <error id="alert-caps"></error>
          <button type="submit" style={{ marginLeft: "10px", overflow: "hidden", marginBottom: "5px" }} class="btn btn-outline-success">
            Add
          </button>
        </form>
      </div>


    </div>
  );
}

export default AddInternship;