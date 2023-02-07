import React, { useState,useEffect } from "react";
import { useContext } from "react";
import studentContext from '../../context/student/studentContext';
import './DataEnter.css'
function AddInternship() {



  const context = useContext(studentContext);
  const {addInternship,crediantial2} = context; 


  



  const enableCreateUser = () => {
    document.getElementById("user_register").disabled = true;
  };

  const disableCreateUser = () => {
    document.getElementById("user_register").disabled = false;
  };

  const [crediantial, setCrediential] = useState({});
  const onchange = (e) => {
    setCrediential({...crediantial, [e.target.name]: e.target.value });
  };
  useEffect(()=>{
    setCrediential({...crediantial2, ...crediantial});
},[])


  const handleClick = (e) => {
    e.preventDefault();
    var internshipContact = document.getElementById("internshipContact").value;
    var companyName = document.getElementById("companyName").value;
    var alert = document.getElementById("alert-caps");
    if(internshipContact.length!==10){
      alert.innerHTML="*Invalid Phone Number ";
      return false; 
   }

   for(var i=0;i<companyName.length;i++){
      if(companyName.charAt(i)===" "){
            alert.innerHTML="*No white Space allowed"; 
          return false;
      }
      else{
          alert.innerHTML="";
  }
   }
       
  addInternship(crediantial);
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
                <option >--select--</option>
                <option>Web Development</option>
                <option>App Development</option>
                <option>Data Science</option>
                <option>Other</option>
              </select>
            </div>
            <div class="col-md-4 dataEnter_input ">
              <label for="internshipContact" class="form-label">
                Contact details of internship
              </label>
              <input type="tel" class="form-control" id="internshipContact" name="contactofcompany"   maxlength="10" size="10" placeholder="+91" value={crediantial.contactofcompany}
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