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
  const [div, setdiv] = useState("");
   
  const Duration=(a,b)=>{
    var day1 =  a.slice(0,2);
    var day2 =  b.slice(0,2);
    var month1 =  a.slice(3,5);
    var month2 =  b.slice(3,5);
    var year1 =  a.slice(6,10);
    var year2 =  b.slice(6,10);
    
    var date1 = new Date(`${month1}/${day1}/${year1}`);
    var date2 = new Date(`${month2}/${day2}/${year2}`);
    var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10); 
    return Math.round(diffDays/30);
  }  
  return (
    <div>
      <div className="filter">
        <div class="search__container">
          <input class="search__input" value={batch} onChange={(e) => { setbatch(e.target.value) }} type="tel" placeholder="Batch" />
        </div>

        <div class="search__container">
          <select name="branch" id="branch" class="form-control search_input" option={branch} value={branch} onChange={(e) => { setbranch(e.target.value) }} >
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
          <select name="div" id="div" class="form-control search_input" option={div} value={div} onChange={(e) => { setdiv(e.target.value) }} >
            <option>Select Div</option>
            <option >A</option>
            <option >B</option>
          </select>
        </div>

        <div class="search__container">
          <input class="search__input" value={name} onChange={(e) => { setname(e.target.value) }} type="text" placeholder="Name" />
        </div>

        <div class="search__container">
          <input class="search__input" value={roll} onChange={(e) => { setroll(e.target.value) }} type="text" placeholder="Roll No." />
        </div>

      </div>



      {/* table data */}
      <section className='dataview_section'>
        <div class="tbl-header">
          <table >
              <tr>
                <th style={{ textAlign: "center" }}>Roll No.</th>
                <th style={{ textAlign: "center" }}>Name</th>
                {/* <th style={{ textAlign: "center" }}>Branch</th> */}
                <th style={{ textAlign: "center" }}>organization</th>
                <th style={{ textAlign: "center" }}>Domain</th>
                <th style={{ textAlign: "center" }}>Starting Date</th>
                <th style={{ textAlign: "center" }}>Ending Date</th>
                <th style={{ textAlign: "center" }}>Duration</th>
                <th style={{ textAlign: "center" }}>Certificate</th>
                <th style={{ textAlign: "center" }}>Phone</th>
                <th style={{ textAlign: "center" }}>Email</th>
              </tr>
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
  // eslint-disable-next-line array-callback-return
  .filter(function (val) {
    if (val.div === div) {
      return val;
    } else if (val.div.toLowerCase().includes(div.toLowerCase())) {
      return val;
    }
  })
                  .map((item) => {
                    return (
                        <tr >
                          <td style={{ textAlign: "center" }}>{item.roll}</td>
                          <td style={{ textAlign: "center" }}>{item.fname}</td>
                          {/* <td style={{ textAlign: "center" }}>{item.branch}</td> */}
                          <td style={{ textAlign: "center" }}>{item.Company}</td>
                          <td style={{ textAlign: "center" }}>{item.Domain}</td>
                          <td style={{ textAlign: "center" }}>{item.start}</td>
                          <td style={{ textAlign: "center" }}>{item.end}</td>
                          <td style={{ textAlign: "center" }}>{Duration(item.start,item.end)} month</td>
                          <td style={{ textAlign: "center" }}><CgEye /></td>
                          <td style={{ textAlign: "center" }}>{item.phone}</td>
                          <td style={{ textAlign: "center" }}>{item.email}</td>
                        </tr>
                    )
                  })
              }
          </table>
        </div>
      </section>
    </div>
  )
}

export default View