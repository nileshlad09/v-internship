import React from 'react'
import Chart from 'react-apexcharts'
const Graph = ({arr1}) => {
  const batch3 = arr1[2].length;
    const batch2 = arr1[1].length;
    const batch1 = arr1[0].length;
  return (
    <div className='graph_section'>
        
      
      <Chart
        type="bar"
        width="100%"
        
        // height="400px"
        series={[
          {
            name: "no of internship completed",
            data: [batch1, batch2, batch3]
          },
        ]}
        

        options={{
          title: {
            style: { fontSize: 3 }
          },
          theme: {
            mode: 'lite',
          },
          xaxis: {
            categories: ["SE", "TE", "BE"],
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
