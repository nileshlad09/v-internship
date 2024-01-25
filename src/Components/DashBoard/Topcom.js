import React from 'react'

const Topcom = ({ data2 }) => {
    let TScount = [];
    const id = ['Google', 'Oracle', 'Amazon', 'JP Morgan', 'IBM', 'Morgan Stanley', 'Accenture', 'LTI', 'Jio', 'TCS'];
    for (let i = 0; i < id.length; i++) {
        const count = data2.filter((obj) => obj.nameofcompany?.replaceAll(' ','').toLowerCase() === id[i]?.replaceAll(' ','').toLowerCase()).length;
        TScount[i] = { sr: i + 1, comp: id[i], count: count };
    }

    return (
        <table >
            <tbody>
            <tr >
                <th >sr</th>
                <th >Top Company Name</th>
                <th >No of student Joined</th>
            </tr>
            {
                // eslint-disable-next-line
                TScount?.map((d) => (
                    <tr  key={d.sr}>
                        <td >{d.sr}</td>
                        <td >{d.comp}</td>
                        <td >{d.count}</td>
                    </tr>
                ))
            }
</tbody>
        </table>
    )
}

export default Topcom