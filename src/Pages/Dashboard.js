import React from 'react'
import DashBoard1 from '../Components/DashBoard/DashBoard1'
import Graph from '../Components/DashBoard/Graph'
import Graph2 from '../Components/DashBoard/Graph2'
import data from '../DataFiles/topcompany'

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <DashBoard1 />
        <div className="row Dashboard_graph_section">
          <div className="graph_1 col-md-12 col-lg-4">
            <Graph />
          </div>
          <div className="graph_1 col-md-12 col-lg-4">
            <Graph2 />
          </div>
          <div className="dashboard_table col-md-12 col-lg-4">
            <table>
              <tr>
                <th>sr</th>
                <th>Company Name</th>
                <th>No of student Joined</th>
              </tr>
              {
                // eslint-disable-next-line
                data?.map((d) => (
                  <tr>
                    <td>{d.id}</td>
                    <td>{d.companyname}</td>
                    <td>{d.noofstu}</td>
                  </tr>
                ))
              }

            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard