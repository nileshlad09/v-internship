import React from 'react'
import Chart from 'react-apexcharts'
const Graph = () => {
  return (
    <div className='graph_section'>
        
      
      <Chart
        type="bar"
        width="100%"
        
        // height="400px"
        series={[
          {
            name: "no of internship completed",
            data: [44, 55, 41]
          },
        ]}
        

        options={{
          title: {
            style: { fontSize: 3 }
          },
          colors: ['#299863'],
          theme: {
            mode: 'lite',
          },
          xaxis: {
            categories: ["Batch 2025", "Batch 2024", "Batch 2023"],
          },
          yaxis: {
            title: {
              text: "No of Student"
            }
          },
          responsive: [{
            breakpoint: undefined,
            options: {},
          }]


        }}
      >
      </Chart>

    </div>
  )
}

export default Graph
