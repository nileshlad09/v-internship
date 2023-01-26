import React, { useState, useEffect } from 'react'
import './ExcelData.css'
import * as xlsx from 'xlsx'


function ExcelData() {

    const [excelData, setexceldata] = useState([]);



    const readUploadFile = async (e) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                setexceldata(json);
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }

    };



    return (
        <div>
            <div class="mb-3" id='excelfrom'>
                <input class="form-control" type="file" id="formFile" onChange={(e) => readUploadFile(e)} />
            </div>

            {/* filter data */}
            <div className="filter">
                <div class="search__container">
                    <input class="search__input" type="number" placeholder="Day" />
                </div>

                <div class="search__container">
                    <input class="search__input" type="text" placeholder="Months" />
                </div>

                <div class="search__container">
                    <input class="search__input" type="text" placeholder="Years" />
                </div>

            </div>


            {/* excel data */}
            <section>
                <div class="tbl-header">
                    {excelData.length > 0 && (
                        <table cellpadding="0" cellspacing="0" border="0">
                            <thead>
                                <tr>
                                    <th style={{ textAlign: "center" }}>Name</th>
                                    <th style={{ textAlign: "center" }}>Branch</th>
                                    <th style={{ textAlign: "center" }}>Sem</th>
                                    {/* {
                                        for(var i=0;i<col.length;i++){
                                            <th style={{ textAlign: "center" }}>{col[i]}</th>
                                        }
                                    } */}


                                </tr>
                            </thead>
                        </table>
                    )
                    }
                </div>
                <div class="tbl-content">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <tbody style={{ margin: "20px" }}>
                            {excelData.map((item) => {
                                return (
                                    <tr>
                                        <td style={{ textAlign: "center" }}>{item.Fname}</td>
                                        <td style={{ textAlign: "center" }}>{item.branch}</td>
                                        <td style={{ textAlign: "center" }}>{item.sem}</td>
                                    </tr>
                                );
                            })}

                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}

export default ExcelData