import React, { useState } from 'react'
import './Verification.css'
import data from '../../DataFiles/studentdata'
import { Link } from 'react-router-dom'
const Verification = () => {

    return (
        <div>
            {
                data.map((item) => {
                    return (
                        <div className="info">
                            <form class="row g-3">
                                <div class="col-md-6">
                                    <label for="inputtext" class="form-label">Name</label>
                                    <input type="text" value={item.fname} class="form-control" id="inputEmail4" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputPassword4" class="form-label">Email</label>
                                    <input type="email" value={item.email} class="form-control" id="inputPassword4" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputAddress" class="form-label">Roll Number</label>
                                    <input type="text" value={item.roll} class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputAddress2" class="form-label">Branch</label>
                                    <input type="text" value={item.branch} class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputCity" class="form-label">Div</label>
                                    <input type="text" value={item.div} class="form-control" id="inputCity" />
                                </div>
                                <div class="col-12">
                                    <label for="inputCity" class="form-label">Internship</label>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputCity" class="form-label">Company </label>
                                    <input type="text" value={item.Company} class="form-control" id="inputCity" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputCity" class="form-label">Domain</label>
                                    <input type="text" value={item.Domain} class="form-control" id="inputCity" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputCity" class="form-label">Start </label>
                                    <input type="text" value={item.start} class="form-control" id="inputCity" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputCity" class="form-label">End</label>
                                    <input type="text" value={item.end} class="form-control" id="inputCity" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputCity" class="form-label">Sem </label>
                                    <input type="text" value={item.Sem} class="form-control" id="inputCity" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputCity" class="form-label">Batch</label>
                                    <input type="text" value={item.Batch} class="form-control" id="inputCity" />
                                </div>
                                <div class="col-12">
                                    <button  type="submit" class="btn btn-success">Edit</button>
                                </div>
                            </form>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default Verification;
