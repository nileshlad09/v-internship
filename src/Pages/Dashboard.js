import React from 'react'
import DashBoard1 from '../Components/DashBoard/DashBoard1'
import Graph from '../Components/DashBoard/Graph'

const Dashboard = () => {
  return (
    <>
    <div className="dashboard">
     <DashBoard1/>
     <div className="Dashboard_graph_section">
     <Graph/>
     </div>
    </div>
    </>
  )
}

export default Dashboard