import React, { useEffect, useState, useContext } from 'react'
import DashBoard1 from '../Components/DashBoard/DashBoard1'
import Graph from '../Components/DashBoard/Graph'
import Graph2 from '../Components/DashBoard/Graph2'
import Topcom from '../Components/DashBoard/Topcom'
import { Link } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore";
import studentContext from '../context/student/studentContext';
import './Dashboard.css'
import { db } from "../firebase";
import Spinner from '../Components/Spinner/Spinner'

const Dashboard = () => {

  const context = useContext(studentContext);
  const { showAlert } = context;

  const [isLoading, setIsLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [crediantial, setCrediential] = useState({});


  const fetchPost = async (foryear) => {
    await getDocs(query(collection(db, "acceptedStudents"), where("Foryear", "==", foryear)))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data() }));
        setTodos(newData);
        setIsLoading(false);
      }).catch((error) => {
        showAlert("danger", "Internal error")
        setIsLoading(false);
      });
  }




  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  var dummyYear;

  if (month >= 6) {
    dummyYear = `${year}-${Number(String(year).slice(2, 4)) + 1}`
  } else {
    dummyYear = `${year - 1}-${String(year).slice(2, 4)}`
  }


  const onchange = (e) => {
    setCrediential({ ...crediantial, [e.target.name]: e.target.value });
  };

  const data2 = todos.filter(val => val.Foryear === (crediantial?.Foryear ? crediantial.Foryear : dummyYear));

  const batch3 = data2.filter(val => val.year === "BE");
  const batch2 = data2.filter(val => val.year === "TE");
  const batch1 = data2.filter(val => val.year === "SE");
  const arr1 = [batch1, batch2, batch3];

  var dummyYear1 = `${Number(String(dummyYear.slice(0, 4))) - 2}-${Number(String(dummyYear.slice(5, 7))) - 2}`;
  var dummyYear2 = `${Number(String(dummyYear.slice(0, 4))) - 1}-${Number(String(dummyYear.slice(5, 7))) - 1}`;;


  useEffect(() => {
    setIsLoading(true);
    fetchPost(crediantial.Foryear ? crediantial.Foryear : dummyYear);
    // eslint-disable-next-line 
  }, [crediantial.Foryear, dummyYear])

  return (
    <>
      {isLoading ? <Spinner /> :
        <div className="dashboard ">
          <div className="container">
            <div className="dashboardOptions">
              <div className="yearSelectBtn">
                <select name="Foryear" id="year" className="form-select" onChange={onchange} value={crediantial.Foryear}>
                  <option value={dummyYear1}>July {String(dummyYear1).slice(0, 4)} - June {String(dummyYear1).slice(5, 7)}</option>
                  <option value={dummyYear2}>July {String(dummyYear2).slice(0, 4)} - June {String(dummyYear2).slice(5, 7)}</option>
                  <option value={dummyYear} selected> July {String(dummyYear).slice(0, 4)} - June {String(dummyYear).slice(5, 7)}</option>
                </select>
              </div>
              <div className="dashBoardBtn">
                <Link to="/dashboard/deleteold"><button className='btn btn-dark'>Delete old data</button></Link>
              </div>
            </div>
            <DashBoard1 arr1={arr1} crediantial={crediantial} dummyYear={dummyYear} />
            <div className="row Dashboard_graph_section">
              <div className="graph_1 chart col-md-8 col-lg-5">
                <Graph arr1={arr1} />
                <p className='heading'>No.of students completed internship</p>
              </div>
              <div className="graph_1 chart col-md-8 col-lg-5">
                <Graph2 data2={data2} />
                <p className='heading'>Most frequent company's student join</p>
              </div>
              <div className="dashboard_table chart col-md-8 col-lg-4">
                <Topcom data2={data2} />
                <p className='heading'>Top Company</p>
              </div>
            </div>
          </div>
        </div>
      }

    </>
  )
}

export default Dashboard