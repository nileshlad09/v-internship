import React from 'react'

const Topcom = ({ data2 }) => {
    let TScount = [];
    const id = ['Google', 'Oracle', 'Amazon', 'JP Morgan', 'IBM', 'Morgan Stanley', 'Accenture', 'LTI', 'Jio', 'TCS'];
    for (let i = 0; i < id.length; i++) {
        const count = data2.filter((obj) => obj.nameofcompany?.toLowerCase() === id[i]?.toLowerCase()).length;
        TScount[i] = { sr: i + 1, comp: id[i], count: count };
    }

    return (
        <table >
            <tbody>
            <tr style={{ backgroundColor: "orangered" }}>
                <th style={{ textAlign: "center" }}>sr</th>
                <th style={{ textAlign: "center" }}>Top Company Name</th>
                <th style={{ textAlign: "center" }}>No of student Joined</th>
            </tr>
            {
                // eslint-disable-next-line
                TScount?.map((d) => (
                    <tr style={{ textAlign: "center" }} key={d.sr}>
                        <td style={{ textAlign: "center" }}>{d.sr}</td>
                        <td style={{ textAlign: "center" }}>{d.comp}</td>
                        <td style={{ textAlign: "center" }}>{d.count}</td>
                    </tr>
                ))
            }
</tbody>
        </table>
    )
}

export default Topcom