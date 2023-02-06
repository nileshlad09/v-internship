import React, { useState,useEffect } from "react";
import { useContext } from "react";
import studentContext from '../../context/student/studentContext';

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
              <label for="inputPassword4" class="form-label">
                Starting Date{" "}
              </label>
              <input type="date" name="startdate" class="form-control" id="inputPassword4"
                value={crediantial.startdate}
                onChange={onchange}
                required />
            </div>
            <div class="col-md-4 dataEnter_input ">
              <label for="inputAddress" class="form-label">
                Ending Date{" "}
              </label>
              <input type="date" class="form-control" name="enddate" id="user_register"
                value={crediantial.enddate}
                onChange={onchange}
                required />
            </div>
            <div class="col-md-4 dataEnter_input ">
              <label for="inputZip" class="form-label">
                Name of Company
              </label>
              <input type="text" class="form-control" name="nameofcompany" id="inputZip"
                value={crediantial.nameofcompany}
                onChange={onchange}
                required />
            </div>
            <div class="col-md-4 dataEnter_input ">
              <label for="inputAddress" class="form-label">
                Domain of Internship
              </label>
              <select name="domain" id="domain" class="form-select" value={crediantial.domain}
                onChange={onchange}
                required>
                <option>--select--</option>
                <option>Web Development</option>
                <option>App Development</option>
                <option>Data Science</option>
                <option>Other</option>
              </select>
            </div>
            <div class="col-md-4 dataEnter_input ">
              <label for="inputZip" class="form-label">
                Contact details of internship
              </label>
              <input type="tel" class="form-control" id="inputZip" name="contactofcompany" value={crediantial.contactofcompany}
                onChange={onchange}
                required />
            </div>
            <div class="col-md-4 dataEnter_input ">
              <label for="inputZip" class="form-label">
                Certificate/Joining Letter
              </label>
              <input class="form-control" type="file" id="formFile" name="certificate" value={crediantial.certificate} onChange={onchange} />
            </div>
          </div>
          <button
            type="submit"
            style={{ marginLeft: "20px", overflow: "hidden", marginBottom: "5px" }}
            class="btn btn-outline-success"

          >
            Add
          </button>
        </form>
      </div>


    </div>
  );
}

export default AddInternship;