import React from 'react'
import Chart from 'react-apexcharts'
const Graph2 = () => {
    var state = {
        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ['A', 'B', 'C', 'D', 'E']
    }
    return (
        <>
            <div className="donut">
                <Chart options={state.options} series={state.series} type="pie" width="100%" />
            </div>
        </>
    )
}

export default Graph2