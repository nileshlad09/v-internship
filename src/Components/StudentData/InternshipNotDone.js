import { display } from '@mui/system';
import React, { useState, useEffect } from 'react'
import data from './Data.js'
import { Link } from 'react-router-dom';
import {CgEye} from 'react-icons/cg'
function CertificateNotupld() {
    const [sem, setsem] = useState("");
    const [name, setname] = useState("");
    const [roll, setroll] = useState("");
    const [branch, setbranch] = useState("");
    const [len, setlen] = useState(0);

    useEffect(() => {
        getdata();
    })
    var i = 0;
    const getdata = () => {
        data.map((item) => {
            if (item.certificate.charAt(0) === "u") {
                i = i + 1;
            }
        })
        setlen(i);
    }

    return (
        <>

            {/* filter */}
            <div className="filter">
                <div class="search__container">
                    <input class="search__input" value={sem} onChange={(e) => { setsem(e.target.value) }} type="number" placeholder="SEM" />
                </div>

                <div class="search__container">
                    <input class="search__input" value={name} onChange={(e) => { setname(e.target.value) }} type="text" placeholder="Name" />
                </div>

                <div class="search__container">
                    <input class="search__input" value={roll} onChange={(e) => { setroll(e.target.value) }} type="text" placeholder="Roll No." />
                </div>

                <div class="search__container">
                    <select name="state" id="state" class="form-control" option={branch} value={branch} onChange={(e) => { setbranch(e.target.value) }} >
                        <option>Select Branch</option>
                        <option >CMPN</option>
                        <option >INFT</option>
                        <option >EXTC</option>
                        <option>BIOM</option>
                    </select>
                </div>
            </div>



            {/* table data */}
            <section>
                <div class="tbl-header">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <thead>
                            <tr>
                                <th style={{ textAlign: "center" }}>Roll No.</th>
                                <th style={{ textAlign: "center" }}>Name</th>
                                <th style={{ display: "none" }}>Sem</th>
                                <th style={{ display: "none" }}>Branch</th>
                                <th style={{ textAlign: "center" }}>Certificate</th>
                                <th style={{ textAlign: "center" }}>View</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div class="tbl-content">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <tbody>
                            {
                                // eslint-disable-next-line array-callback-return
                                data.filter(function (val) {
                                    if (val.Sem === sem) {
                                        return val;
                                    } else if (val.Sem.toLowerCase().includes(sem.toLowerCase())) {
                                        return val;
                                    }
                                })
                                    // eslint-disable-next-line array-callback-return
                                    .filter(function (val) {
                                        if (val === "") {
                                            return val;
                                        } else if (val.fname.toLowerCase().includes(name.toLowerCase())) {
                                            return val;
                                        }
                                    })
                                    // eslint-disable-next-line array-callback-return
                                    .filter(function (val) {
                                        if (val.roll === roll) {
                                            return val;
                                        } else if (val.roll.toLowerCase().includes(roll.toLowerCase())) {
                                            return val;
                                        }
                                    })

                                    // eslint-disable-next-line array-callback-return
                                    .filter(function (val) {
                                        if (val.branch === branch) {
                                            return val;
                                        } else if (val.branch.toLowerCase().includes(branch.toLowerCase())) {
                                            return val;
                                        }
                                    })
                                    .map((item) => {
                                        return (
                                            <>
                                                {
                                                    item.certificate !== "uploaded" ?
                                                        (<tr >
                                                            <td style={{ textAlign: "center" }}>{item.roll}</td>
                                                            <td style={{ textAlign: "center" }}>{item.fname}</td>
                                                            <td style={{ display: "none" }}>{item.Sem}th</td>
                                                            <td style={{ display: "none" }}>{item.branch}</td>
                                                            <td style={{ textAlign: "center" }}>{item.certificate}</td>
                                                            <td style={{ textAlign: "center" }}><Link to={'/View/' + item.fname + '/' + item.roll + '/' + item.Sem + '/' + item.branch + '/' + item.organization + '/' + item.email + '/' + item.start + '/' + item.end + '/' + item.id + '/' + item.domain}><CgEye/></Link></td>
                                                        </tr>) : (<p></p>)
                                                }
                                            </>
                                        )
                                    })


                            }

                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );

}

export default CertificateNotupld;
