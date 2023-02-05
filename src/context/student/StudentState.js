import React, { useState } from "react";
import studentContext from "./studentContext";
// import data from '../DataFiles/data';
import data from '../../DataFiles/data'
const StudentState = (props) => {

  const [batchdata,setBatchdata] = useState(null);
  const [yeardata,setYeardata] = useState(null);
  const dataFilter = (crediantial) => {
    console.log(crediantial);
    const data2 = data.filter(val => val.year === (crediantial?.year ? crediantial?.year : "2022-23"));
    const batch3 = data2.filter(val => val.Batch === 2023);
    const batch2 = data2.filter(val => val.Batch === 2024);
    const batch1 = data2.filter(val => val.Batch === 2025);
    const arr1 = [batch1, batch2, batch3];
    setBatchdata(arr1);
    setYeardata(data2);
  }
  console.log(batchdata);
  console.log(yeardata);




  return (
    <studentContext.Provider value={{ dataFilter,batchdata,yeardata }}>
      {props.children}
    </studentContext.Provider>
  );
};

export default StudentState;