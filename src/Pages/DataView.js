import React, { useEffect, useState, useContext } from 'react'
import { CgEye } from 'react-icons/cg'
import './CSS/dataview.css'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore";
import studentContext from '../context/student/studentContext';
import { db } from "../firebase";
import * as XLSX from 'xlsx';
import Spinner from '../Components/Spinner/Spinner';

const View = () => {

  const context = useContext(studentContext);
  const { showAlert } = context;

  const [isLoading, setIsLoading] = useState(false);

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

  var fav = [];
  const downloadExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${b}_${y}_${div}_${domain}.xlsx`);
  };

  const fetchPost = async (foryear, year) => {
    // console.log(foryear,year)
    if (year === "ALL") {
      await getDocs(query(collection(db, "acceptedStudents"), where("Foryear", "==", foryear)))
        .then((querySnapshot) => {
          const newData = querySnapshot.docs
            .map((doc) => ({ ...doc.data() }));
          setTodos(newData);
          setIsLoading(false);
        }).catch((error) => {
          setIsLoading(false);
          showAlert("danger", "Internal error")
        });
    } else {
      await getDocs(query(collection(db, "acceptedStudents"), where("Foryear", "==", foryear), where("year", "==", year)))
        .then((querySnapshot) => {
          const newData = querySnapshot.docs
            .map((doc) => ({ ...doc.data() }));
          setTodos(newData);
          setIsLoading(false);
        }).catch((error) => {
          setIsLoading(false);
          showAlert("danger", "Internal error")
        });
    }
  }
  // console.log(data)

  useEffect(() => {
    setIsLoading(true);
    fetchPost(y, b);
    // eslint-disable-next-line 
  }, [y, b])



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
    <div className='container'>
      {isLoading ? <Spinner /> :
        <>
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

            <button className='btn btn2' style={{ width: "150px", marginTop: "20px" }} onClick={() => downloadExcel(fav)}>Export Data</button>

          </div>



          {/* table data */}
          <section className='dataview_section'>
            <div className="tbl-header">
              <table  >
                <tbody>
                  <tr >
                    <th >Roll No.</th>
                    <th >Name</th>
                    <th >organization</th>
                    <th >Domain</th>
                    <th >Starting Date</th>
                    <th >Ending Date</th>
                    <th >Duration</th>
                    <th >Certificate</th>
                    <th >Phone</th>
                    <th >Email</th>
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

                      // eslint-disable-next-line 
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


                      .map((item, i) => {
                        fav.push(item)
                        return (
                          <tr key={i}>
                            <td >{item.rollNumber}</td>
                            <td >{item.nameofstudent}</td>
                            <td >{item.nameofcompany}</td>
                            <td >{item.domain}</td>
                            <td >{item.startdate}</td>
                            <td > {item.enddate === " " || item.enddate === "" ? "---" : item.enddate}</td>
                            <td >{item.enddate === " " || item.enddate === "" ? "NA" : `${Duration(item.startdate, item.enddate)} months`}</td>
                            <td >
                              <a href={item.certificate} target='_blank' rel="noreferrer" ><CgEye /></a>
                            </td>
                            <td >{item.mobileNo}</td>
                            <td >{item.email}</td>
                          </tr>
                        )
                      })
                  }
                </tbody>
              </table>
            </div>
          </section>
        </>
      }
    </div>
  )
}

export default View