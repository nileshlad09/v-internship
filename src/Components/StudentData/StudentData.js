import React, { useState } from 'react'
import './StudentData.css';
import data from './Data.js'
function App() {
  const [sem, setsem] = useState("");
  const [name, setname] = useState("");
  const [roll, setroll] = useState("");
  const [branch, setbranch] = useState("");

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
                <th>Roll No.</th>
                <th>Name</th>
                <th>Sem</th>
                <th>Branch</th>
                <th>Certificate</th>
                <th>View</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              {

                data.filter(function (val) {
                  if (val.Sem === sem) {
                    return val;
                  } else if (val.Sem.toLowerCase().includes(sem.toLowerCase())) {
                    return val;
                  }
                })
                  .filter(function (val) {
                    if (val === "") {
                      return val;
                    } else if (val.fname.toLowerCase().includes(name.toLowerCase())) {
                      return val;
                    }
                  })
                  .filter(function (val) {
                    if (val.roll === roll) {
                      return val;
                    } else if (val.roll.toLowerCase().includes(roll.toLowerCase())) {
                      return val;
                    }
                  })

                  .filter(function (val) {
                    if (val.branch === branch) {
                      return val;
                    } else if (val.branch.toLowerCase().includes(branch.toLowerCase())) {
                      return val;
                    }
                  })
                  .map((item) => {
                    return (
                      <tr >
                        <td>{item.roll}</td>
                        <td>{item.fname}</td>
                        <td>{item.Sem}th</td>
                        <td>{item.branch}</td>
                        <td>{item.certificate}</td>
                        <td>View</td>
                      </tr>
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
export default App;