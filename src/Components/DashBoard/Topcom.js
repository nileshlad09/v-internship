import React from 'react'

const Topcom = ({ data2 }) => {
    let TScount=[];
        const id = ['Kids Galaxy', 'Bolt', 'YHills', 'Antenna', 'Cyber Secured India'];
        for(let i=0;i< id.length;i++){
            const count = data2.filter((obj) => obj.Company === id[i]).length;
            TScount[i]={sr:i+1,comp:id[i],count:count};
        }
    
    return (
        <table>
            <tr>
                <th style={{ textAlign: "center" }}>sr</th>
                <th style={{ textAlign: "center" }}>Company Name</th>
                <th style={{ textAlign: "center" }}>No of student Joined</th>
            </tr>
            {
                // eslint-disable-next-line
                TScount?.map((d) => (
                    <tr>
                        <td style={{ textAlign: "center" }}>{d.sr}</td>
                        <td style={{ textAlign: "center" }}>{d.comp}</td>
                        <td style={{ textAlign: "center" }}>{d.count}</td>
                    </tr>
                ))
            }

        </table>
    )
}

export default Topcom