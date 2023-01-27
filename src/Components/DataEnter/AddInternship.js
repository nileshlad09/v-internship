
import React from 'react'
function AddInternship() {
    const enableCreateUser = () => {
        document.getElementById("user_register").disabled = true;   
    }

    const disableCreateUser = () => {
        document.getElementById("user_register").disabled = false;
    }




    return (
        <div style={{ overflow: "hidden" }}>
            <div className="internship">
                <form class="row g-3" style={{ padding: "20px" }} >
                    <div class="col-md-3">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" onClick={disableCreateUser} />
                            <label class="form-check-label" for="flexRadioDefault2">
                                is Internship be done?
                            </label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" onClick={enableCreateUser} />
                            <label class="form-check-label" for="flexRadioDefault1">
                                is Internship going on?
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Start</label>
                        <input type="date" class="form-control" id="inputPassword4" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputAddress" class="form-label">End</label>
                        <input type="date" class="form-control" id="user_register" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputZip" class="form-label">Organization</label>
                        <input type="text" class="form-control" id="inputZip" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputAddress" class="form-label">Domain</label>
                        <select name="state" id="state" class="form-select" >
                            <option>Web Development</option>
                            <option >App Development</option>
                            <option >Data Science</option>
                            <option >Other</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="inputAddress" class="form-label">Sem</label>
                        <select name="state" id="state" class="form-select" >
                            <option >1</option>
                            <option >2</option>
                            <option >3</option>
                            <option >4</option>
                            <option >5</option>
                            <option >6</option>
                            <option >7</option>
                            <option >8</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="inputZip" class="form-label">HR Contact</label>
                        <input type="number" class="form-control" id="inputZip" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputZip" class="form-label">Certificate/Joining Letter</label>
                        <input class="form-control" type="file" id="formFile" />
                    </div>
                </form>
            </div>

            <button type="button" style={{ marginLeft: "20px", overflow: "hidden" }} class="btn btn-outline-success">Add</button>
        </div>
    )
}

export default AddInternship