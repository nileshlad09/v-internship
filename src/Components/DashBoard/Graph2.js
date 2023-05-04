import React from 'react'
import Chart from 'react-apexcharts'

const Graph2 = (props) => {
    const { data2 } = props;

    function findOcc(data2, key) {
        let arr2 = [];
        data2.forEach((x) => {
            if (arr2.some((val) => { return val[key].replaceAll(' ', '').toLowerCase() === x[key].replaceAll(' ', '').toLowerCase() })) {
                arr2.forEach((k) => {
                    if (k[key].replaceAll(' ', '').toLowerCase() === x[key].replaceAll(' ', '').toLowerCase()) {
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





    var state = {
        options: {
            labels:
                [sortedProducts[0] ? sortedProducts[0].nameofcompany : "undefined", sortedProducts[1] ? sortedProducts[1].nameofcompany : "undefined",
                sortedProducts[2] ? sortedProducts[2].nameofcompany : "undefined", sortedProducts[3] ? sortedProducts[3].nameofcompany : "undefined"
                    , sortedProducts[4] ? sortedProducts[4].nameofcompany : "undefined"]
        },
        series:
            [sortedProducts[0] ? sortedProducts[0].occurrence : 0, sortedProducts[1] ? sortedProducts[1].occurrence : 0,
            sortedProducts[2] ? sortedProducts[2].occurrence : 0, sortedProducts[3] ? sortedProducts[3].occurrence : 0
                , sortedProducts[4] ? sortedProducts[4].occurrence : 0]
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