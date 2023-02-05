import React from "react";

function AddInternship() {

  const enableCreateUser = () => {
    document.getElementById("user_register").disabled = true;
  };

  const disableCreateUser = () => {
    document.getElementById("user_register").disabled = false;
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <div className="internship">
        <form class="g-3" style={{ padding: "20px" }}>
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
              <input type="date" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-md-4 dataEnter_input ">
              <label for="inputAddress" class="form-label">
                Ending Date{" "}
              </label>
              <input type="date" class="form-control" id="user_register" />
            </div>
            <div class="col-md-4 dataEnter_input ">
              <label for="inputZip" class="form-label">
                Name of Company
              </label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
            <div class="col-md-4 dataEnter_input ">
              <label for="inputAddress" class="form-label">
                Domain of Internship
              </label>
              <select name="state" id="state" class="form-select">
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
              <input type="number" class="form-control" id="inputZip" />
            </div>
            <div class="col-md-4 dataEnter_input ">
              <label for="inputZip" class="form-label">
                Certificate/Joining Letter
              </label>
              <input class="form-control" type="file" id="formFile" />
            </div>
          </div>
        </form>
      </div>

      <button
        type="button"
        style={{ marginLeft: "20px", overflow: "hidden", marginBottom: "5px" }}
        class="btn btn-outline-success"
      >
        Add
      </button>
    </div>
  );
}

export default AddInternship;