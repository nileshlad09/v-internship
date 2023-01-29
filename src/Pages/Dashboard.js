import React from 'react'
import DashBoard1 from '../Components/DashBoard/DashBoard1'
import Graph from '../Components/DashBoard/Graph'
import Graph2 from '../Components/DashBoard/Graph2'

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <DashBoard1 />
        <div className="row Dashboard_graph_section">
          <div className="col-md-12 col-lg-6">
            <Graph />
          </div>
          <div className="col-md-12 col-lg-6">
            <Graph2 />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard