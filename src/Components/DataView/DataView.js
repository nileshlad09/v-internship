import React, { useState } from 'react'
import { CgEye } from 'react-icons/cg'
import data from '../../DataFiles/studentdata'
import './dataview.css'

const View = () => {
  const [name, setname] = useState("");
  const [roll, setroll] = useState("");
  const [branch, setbranch] = useState("");
  const [batch, setbatch] = useState("");
  const [company, setcompany] = useState("");
  const [domain, setdomain] = useState("");
  return (
    <div>
      <div className="filter">
        <div class="search__container">
          <input class="search__input" value={batch} onChange={(e) => { setbatch(e.target.value) }} type="tel" placeholder="Batch" />
        </div>

        <div class="search__container">
          <select name="state" id="state" class="form-control search_input" option={branch} value={branch} onChange={(e) => { setbranch(e.target.value) }} >
            <option>Select Branch</option>
            <option >CMPN</option>
            <option >INFT</option>
            <option >EXTC</option>
            <option>BIOM</option>
          </select>
        </div>

        <div class="search__container">
          <input class="search__input" value={company} onChange={(e) => { setcompany(e.target.value) }} type="text" placeholder="Company" />
        </div>

        <div class="search__container">
          <input class="search__input" value={domain} onChange={(e) => {setdomain(e.target.value) }} type="text" placeholder="Domain" />
        </div>

        <div class="search__container">
          <input class="search__input" value={name} onChange={(e) => { setname(e.target.value) }} type="text" placeholder="Name" />
        </div>

        <div class="search__container">
          <input class="search__input" value={roll} onChange={(e) => { setroll(e.target.value) }} type="text" placeholder="Roll No." />
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
                <th style={{ textAlign: "center" }}>Branch</th>
                <th style={{ textAlign: "center" }}>organization</th>
                <th style={{ textAlign: "center" }}>Domain</th>
                <th style={{ textAlign: "center" }}>Certificate</th>
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
                  if (val.Company === company) {
                    return val;
                  } else if (val.Company.toLowerCase().includes(company.toLowerCase())) {
                    return val;
                  }
                })
                  // eslint-disable-next-line array-callback-return
                  .filter(function (val) {
                    if (val.Domain === domain) {
                      return val;
                    } else if (val.Domain.toLowerCase().includes(domain.toLowerCase())) {
                      return val;
                    }
                  })

                  // eslint-disable-next-line array-callback-return
                  .filter(function (val) {
                    if (val.Batch === batch) {
                      return val;
                    } else if (val.Batch.toLowerCase().includes(batch.toLowerCase())) {
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
                        <tr >
                          <td style={{ textAlign: "center" }}>{item.roll}</td>
                          <td style={{ textAlign: "center" }}>{item.fname}</td>
                          <td style={{ textAlign: "center" }}>{item.branch}</td>
                          <td style={{ textAlign: "center" }}>{item.Company}</td>
                          <td style={{ textAlign: "center" }}>{item.Domain}</td>
                          <td style={{ textAlign: "center" }}><CgEye /></td>
                        </tr>
                      </>
                    )
                  })


              }

            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default View