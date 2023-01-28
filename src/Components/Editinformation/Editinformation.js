import React, { useState } from 'react'
import './editinformation.css'

const Editinformation = () => {
    const [crediantial, setCrediential] = useState({});

    const onchange = (e) => {
        setCrediential({ ...crediantial, [e.target.name]: e.target.value });
    };

    const handleClick = (e) => {
        e.preventDefault();
        localStorage.setItem('forminfo', JSON.stringify(crediantial));
        console.log(crediantial);
    }
    return (
        <div className="Editinfo_section">
            <div className="makeForm_section">
                <h4>Make a Form</h4>
                <form class="row g-3" onSubmit={handleClick} >
                    <div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="formstatus" id="exampleRadios1" 
                            value="on"
                            onChange={onchange} />
                            <label class="form-check-label" for="exampleRadios1">
                                Turn on Form
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="formstatus" id="exampleRadios1" 
                            value="off"
                            onChange={onchange} />
                            <label class="form-check-label" for="exampleRadios1">
                                Turn off Form
                            </label>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <label for="inputYear" class="form-label">Year</label>
                        <input type="text" name='year' class="form-control" id="inputYear"
                            value={crediantial.year}
                            onChange={onchange} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputAddress" class="form-label">Semester</label>
                        <select name="semester" id="state" class="form-select"
                            onChange={onchange}
                            value={crediantial.semester} >
                            <option>Semester</option>
                            <option value="Even">Even</option>
                            <option value="Odd">Odd</option>
                        </select>
                    </div>
                    <div>
                        <button type='submit' className='btn btn-primary'>Create Form</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Editinformation