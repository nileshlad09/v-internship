import React, { useEffect, useState } from 'react'
import { CgEye } from 'react-icons/cg'
import './dataview.css'
import { useParams } from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore";

import { db } from "../../firebase";
import * as XLSX from 'xlsx';

const View = () => {



  const params = useParams();
  const b = params.batch;
  const y = params.year;

  const [name, setname] = useState("");
  const [roll, setroll] = useState("");
  const [branch, setbranch] = useState("");
  const [year, setyear] = useState("");
  const [company, setcompany] = useState("");
  const [domain, setdomain] = useState("");
  const [div, setdiv] = useState("");
  const [foryear, setforyear] = useState("");



  const [data, setTodos] = useState([]);


  var fav = [];
  const downloadExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${b}_${y}_${div}_${domain}.xlsx`);
  };

  const fetchPost = async () => {
    await getDocs(collection(db, "acceptedStudents"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data() }));
        setTodos(newData);
      })
  }

  useEffect(() => {
    fetchPost();
  }, [])





  useEffect(() => {
    if (b === "ALL") {
      setyear("ALL")
      setforyear(y);
    }
    else {
      setyear(`${b}`)
      setforyear(y);
    }
    // eslint-disable-next-line
  }, [])




  const Duration = (a, b) => {
    var day1 = a.slice(8, 10);
    var day2 = b.slice(8, 10);
    var month1 = a.slice(5, 7);
    var month2 = b.slice(5, 7);
    var year1 = a.slice(0, 4);
    var year2 = b.slice(0, 4);


    var date1 = new Date(`${month1}/${day1}/${year1}`);
    var date2 = new Date(`${month2}/${day2}/${year2}`);
    var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10);
    return Math.round(diffDays / 30);
  }

  return (
    <div>
      <div className="filter">
        <div className="search__container">
          <p>For a Year: {foryear} ({year})</p>
        </div>

        <div className="search__container"  >
          <select name="branch" id="branch" className="form-control search_input" option={branch} value={branch} onChange={(e) => { setbranch(e.target.value) }} >
            <option value="">Select Branch</option>
            <option value="CMPN">CMPN</option>
            <option value="INFT">INFT</option>
            <option value="EXTC">EXTC</option>
            <option value="BIOM">BIOM</option>
          </select>
        </div>

        <div className="search__container">
          <input className="search__input" value={company} onChange={(e) => { setcompany(e.target.value) }} type="text" placeholder="Company" />
        </div>

        <div className="search__container">
          <input className="search__input" value={domain} onChange={(e) => { setdomain(e.target.value) }} type="text" placeholder="Domain" />
        </div>

        <div className="search__container">
          <select name="div" id="div" className="form-control search_input" option={div} value={div} onChange={(e) => { setdiv(e.target.value) }} >
            <option value="">Select Div</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
        </div>

        <div className="search__container">
          <input className="search__input" value={name} onChange={(e) => { setname(e.target.value) }} type="text" placeholder="Name" />
        </div>

        <div className="search__container">
          <input className="search__input" value={roll} onChange={(e) => { setroll(e.target.value) }} type="text" placeholder="Roll No." />
        </div>

        <button className='btn btn-primary' style={{width:"150px",marginTop:"20px"}} onClick={() => downloadExcel(fav)}>Export Data</button>

      </div>



      {/* table data */}
      <section className='dataview_section'>
        <div className="tbl-header">
          <table  >
            <tr >
              <th style={{ textAlign: "center", backgroundColor: "orangered" }}>Roll No.</th>
              <th style={{ textAlign: "center", backgroundColor: "orangered" }}>Name</th>
              <th style={{ textAlign: "center", backgroundColor: "orangered" }}>organization</th>
              <th style={{ textAlign: "center", backgroundColor: "orangered" }}>Domain</th>
              <th style={{ textAlign: "center", backgroundColor: "orangered" }}>Starting Date</th>
              <th style={{ textAlign: "center", backgroundColor: "orangered" }}>Ending Date</th>
              <th style={{ textAlign: "center", backgroundColor: "orangered" }}>Duration</th>
              <th style={{ textAlign: "center", backgroundColor: "orangered" }}>Certificate</th>
              <th style={{ textAlign: "center", backgroundColor: "orangered" }}>Phone</th>
              <th style={{ textAlign: "center", backgroundColor: "orangered" }}>Email</th>
            </tr>
            {
              // eslint-disable-next-line array-callback-return
              data.filter(function (val) {
                if (val.nameofcompany === company) {
                  return val;
                } else if (val.nameofcompany.toLowerCase().includes(company.toLowerCase())) {
                  return val;
                }
              })

                // eslint-disable-next-line array-callback-return
                .filter(function (val) {
                  return val;
                })
                // eslint-disable-next-line array-callback-return
                .filter(function (val) {
                  if (val.domain === domain) {
                    return val;
                  } else if (val.domain.toLowerCase().includes(domain.toLowerCase())) {
                    return val;
                  }
                })

                // eslint-disable-next-line array-callback-return
                .filter(function (val) {
                  if (val.year === year) {
                    return val;
                  }
                  else if (year === "ALL") {
                    return val;
                  }
                })

                .filter(function (val) {
                  if (val.Foryear === foryear) {
                    return val;
                  }
                })

                // eslint-disable-next-line array-callback-return
                .filter(function (val) {
                  if (val === "") {
                    return val;
                  } else if (val.nameofstudent.toLowerCase().includes(name.toLowerCase())) {
                    return val;
                  }
                })
                // eslint-disable-next-line array-callback-return
                .filter(function (val) {
                  if (val.rollNumber === roll) {
                    return val;
                  } else if (val.rollNumber.toLowerCase().includes(roll.toLowerCase())) {
                    return val;
                  }
                })


                // eslint-disable-next-line array-callback-return
                .filter(function (val) {
                  if (val.division === div) {
                    return val;
                  }
                  else if (val.division.toLowerCase().includes(div.toLowerCase())) {
                    if (val.division.valueOf === "Both") {
                      return val;
                    }
                    return val;
                  }
                })

                // eslint-disable-next-line array-callback-return
                .filter(function (val) {
                  if (val.branch === branch) {
                    return val;
                  }
                  else if (val.branch.toLowerCase().includes(branch.toLowerCase())) {
                    if (val.branch.valueOf === "Both") {
                      return val;
                    }
                    return val;
                  }
                })


                .map((item,i) => {
                  fav.push(item)
                  return (
                    <tr style={{ backgroundColor: "#000000ba" }} key={i}>
                      <td style={{ textAlign: "center" }}>{item.rollNumber}</td>
                      <td style={{ textAlign: "center" }}>{item.nameofstudent}</td>
                      <td style={{ textAlign: "center" }}>{item.nameofcompany}</td>
                      <td style={{ textAlign: "center" }}>{item.domain}</td>
                      <td style={{ textAlign: "center" }}>{item.startdate}</td>
                      <td style={{ textAlign: "center" }}> {item.enddate}</td>

                      <td style={{ textAlign: "center" }}>{item.enddate == " " ? "NA" : `${Duration(item.startdate, item.enddate)} months`}</td>
                      <td style={{ textAlign: "center" }}>
                        <a href={item.certificate} target='_blank'><CgEye /></a>
                      </td>
                      <td style={{ textAlign: "center" }}>{item.mobileNo}</td>
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