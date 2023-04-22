import React, {  useEffect, useState } from 'react'
import DashBoard1 from '../Components/DashBoard/DashBoard1'
import Graph from '../Components/DashBoard/Graph'
import Graph2 from '../Components/DashBoard/Graph2'
// import data from '../DataFiles/data';
import Topcom from '../Components/DashBoard/Topcom'
import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase";

const Dashboard = () => {

  const [todos, setTodos] = useState([]);
  
 
  const fetchPost = async () => {    
      await getDocs(collection(db, "acceptedStudents"))
          .then((querySnapshot)=>{               
              const newData = querySnapshot.docs
                  .map((doc) => ({...doc.data() }));
              setTodos(newData);
          })
  }
 
  useEffect(()=>{
      fetchPost();
  }, [])


  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  var dummyYear;

  if(month>=6){
      dummyYear = `${year}-${Number(String(year).slice(2,4)) + 1}`
  }else{
      dummyYear = `${year - 1}-${String(year).slice(2,4)}`
  }

  const [crediantial, setCrediential] = useState({});

  const onchange = (e) => {
    setCrediential({ ...crediantial, [e.target.name]: e.target.value });
  };

  const data2 = todos.filter(val => val.Foryear === (crediantial?.Foryear ? crediantial.Foryear : dummyYear));
  
  const batch3 = data2.filter(val => val.year === "BE");
  const batch2 = data2.filter(val => val.year === "TE");
  const batch1 = data2.filter(val => val.year === "SE");
  const arr1 = [batch1, batch2, batch3];
  
  var dummyYear1=`${Number(String(dummyYear.slice(0,4))) - 2}-${Number(String(dummyYear.slice(5,7))) - 2}`;
  var dummyYear2=`${Number(String(dummyYear.slice(0,4))) - 1}-${Number(String(dummyYear.slice(5,7))) - 1}`;;

  return (
    <>
      
      <div className="dashboard ">
        <div className="container">
      <div className="row">
        <div className="col-md-8">
        <div class="col-md-4">
          <select name="Foryear" id="year" class="form-select" onChange={onchange} value={crediantial.Foryear}>
            <option value={dummyYear1}>July {String(dummyYear1).slice(0,4)} - June {String(dummyYear1).slice(5,7)}</option>
            <option value={dummyYear2}>July {String(dummyYear2).slice(0,4)} - June {String(dummyYear2).slice(5,7)}</option>
            <option value={dummyYear} selected> July {String(dummyYear).slice(0,4)} - June {String(dummyYear).slice(5,7)}</option>
          </select>
        </div>
        </div>
      </div>
        <DashBoard1 arr1={arr1} crediantial={crediantial} dummyYear={dummyYear}/>
        <div className="row Dashboard_graph_section">
          <div className="graph_1 chart col-md-8 col-lg-5">
            <Graph arr1={arr1} />
            <p className='heading'>No.of students completed internship</p>
          </div>
          { data2.length?
          <div className="graph_1 chart col-md-8 col-lg-5">
            <Graph2 data2={data2} />
            <p className='heading'>Most frequent company's student join</p>
          </div>:""
          }
          <div className="dashboard_table chart col-md-8 col-lg-4">
            <Topcom data2={data2} />
            <p className='heading'>Top Company</p>
          </div>
        </div>
      </div>
      </div>

    </>
  )
}

export default Dashboard