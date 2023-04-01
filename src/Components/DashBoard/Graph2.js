import React from 'react'
import Chart from 'react-apexcharts'

const Graph2 = ({ data2 }) => {


    function findOcc(data2, key) {
        let arr2 = [];

        data2.forEach((x) => {
            if (arr2.some((val) => { return val[key].toLowerCase() == x[key].toLowerCase() })) {

                arr2.forEach((k) => {
                    if (k[key].toLowerCase() === x[key].toLowerCase()) {
                        k["occurrence"]++
                    }
                })

            } else {
                let a = {}
                a[key] = x[key]
                a["occurrence"] = 1
                arr2.push(a);
            }
        })

        return arr2
    }


    let key = "nameofcompany";
	const topCompany = findOcc(data2, key);

    let sortedProducts = topCompany.sort(
        (p1, p2) => (p1.occurrence < p2.occurrence) ? 1 : (p1.occurrence > p2.occurrence) ? -1 : 0);
        console.log(sortedProducts)





    var state = {
        options: {
            labels: [sortedProducts[0]?.nameofcompany, sortedProducts[1]?.nameofcompany,
            sortedProducts[2]?.nameofcompany, sortedProducts[3]?.nameofcompany
    , sortedProducts[4]?.nameofcompany]
        },
        series: [sortedProducts[0].occurrence, sortedProducts[1].occurrence,
                sortedProducts[2].occurrence, sortedProducts[3].occurrence
        , sortedProducts[4].occurrence]
        
       
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