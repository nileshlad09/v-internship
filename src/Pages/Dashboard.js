import React, {  useState } from 'react'
import DashBoard1 from '../Components/DashBoard/DashBoard1'
import Graph from '../Components/DashBoard/Graph'
import Graph2 from '../Components/DashBoard/Graph2'
import data from '../DataFiles/data';
import Topcom from '../Components/DashBoard/Topcom'

const Dashboard = () => {

  const [crediantial, setCrediential] = useState({});

  const onchange = (e) => {
    setCrediential({ ...crediantial, [e.target.name]: e.target.value });
  };
console.log(crediantial)
  const data2 = data.filter(val => val.Foryear === (crediantial?.Foryear ? crediantial.Foryear : "2022-23"));
  console.log(data2)
  const batch3 = data2.filter(val => val.Batch === 2023);
  const batch2 = data2.filter(val => val.Batch === 2024);
  const batch1 = data2.filter(val => val.Batch === 2025);
  const arr1 = [batch1, batch2, batch3];


  return (
    <>
      
      <div className="dashboard">
      <div className="row">
        <div className="col-md-8">
        <div class="col-md-4">
          <select name="Foryear" id="year" class="form-select" onChange={onchange} value={crediantial.division}>
            <option value="2020-21">July 2020 - June 21</option>
            <option value="2021-22">July 2021 - June 22</option>
            <option value="2022-23" selected> July 2022 - June 23</option>
          </select>
        </div>
        </div>
      </div>
        <DashBoard1 arr1={arr1} crediantial={crediantial} />
        <div className="row Dashboard_graph_section">
          <div className="graph_1 col-md-12 col-lg-6">
            <Graph arr1={arr1} />
          </div>
          <div className="graph_1 col-md-12 col-lg-6">
            <Graph2 data2={data2} />
          </div>
          <div className="dashboard_table col-md-12 col-lg-4">
            <Topcom data2={data2} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard