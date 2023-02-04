import React from 'react'
import DashBoard1 from '../Components/DashBoard/DashBoard1'
import Graph from '../Components/DashBoard/Graph'
import Graph2 from '../Components/DashBoard/Graph2'
import data from '../DataFiles/data';
import Topcom from '../Components/DashBoard/Topcom'
const Dashboard = () => {
  const batch3 = data.filter(val => val.Batch === 2023);
  const batch2 = data.filter(val => val.Batch === 2024);
  const batch1 = data.filter(val => val.Batch === 2025);
  const arr1 = [batch1, batch2, batch3];

  return (
    <>
      <div className="dashboard">
        <DashBoard1 arr1={arr1} />
        <div className="row Dashboard_graph_section">
          <div className="graph_1 col-md-12 col-lg-4">
            <Graph arr1={arr1} />
          </div>
          <div className="graph_1 col-md-12 col-lg-5">
            <Graph2 data={data} />
          </div>
          <div className="dashboard_table col-md-12 col-lg-4">
            <Topcom data={data}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard