import React from 'react'
import './Verification.css'

const Verification = () => {



    return (
        <div>
            <div class="selector">

                <label for="happy-radio" class="happy-card">
                    <form class="row g-3" style={{ padding: "5px" }} >
                        <div class="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input"  type="radio" name="flexRadioDefault"  />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Accept
                                </label>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault"  />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Reject
                                </label>
                            </div>
                        </div>
                    </form>
                    <h2>Nikhil Adhare</h2>
                    <li>PERSONAL</li>
                    <ul>
                        <li>Roll Number : 20102A0055</li>
                        <li>Email : Nikhil@vit.edu.in</li>
                        <li>Division : A</li>
                        <li>Batch : B3</li>
                        <li>Branch : CNPM</li>
                    </ul>
                    <li>INTERNSHIP</li>
                    <ul>
                        <li>Start : 24-12-2022</li>
                        <li>End : 24-01-2023</li>
                        <li>Organization : LETSGROWMORE</li>
                        <li>Domain : Web Development</li>
                        <li>Sem : 6th</li>
                        <li>HR Contact : 9593858385</li>
                        <li>Certificate/joining letter : Link</li>
                    </ul>
                    <p>Edit</p>
                </label>
            </div>
        </div>
    )
}

export default Verification;
