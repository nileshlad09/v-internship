import React from 'react'
import './home.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { DatePicker } from '@mui/lab';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useState } from 'react';
const Home = () => {
  
  const [startdate, setStartdate] =useState<Date | null>(null);
  const [enddate, setEnddate] = useState(null);
  console.log({startdate});
  const [internshipdata, setInternshipdata] = useState({
    fullname: "",
    rollNo: "",
    emailId: "",
    mobileNo: "",
    semester: "",
    division: "",
    companyName: "",
    domain: "",
    hrcontactdetail: "",
    startingDate: `${startdate?.$D}/${startdate?.$M+1}/${startdate?.$y}`,
    endingDate: `${enddate?.$D}/${enddate?.$M+1}/${enddate?.$y}`,
  })
  const onchange = (e) => {
    setInternshipdata({ ...internshipdata, [e.target.name]: e.target.value });
  };
  

  const submit=(e)=>{
    e.preventDefault();
    console.log(internshipdata);
  }
  return (
    <div className="homeComponent">
      <form action="" onSubmit={submit}>
        <h3 className='headingText'>Personal Detail</h3>
        <div className="forminput">
          <div className='inputField'>
            <label>Enter Your Name</label>
            <TextField id="outlined-basic" variant="outlined" name="fullname" value={internshipdata.fullname}
              onChange={onchange}/>
          </div>
          <div className='inputField'>
            <label>Roll No</label>
            <TextField id="outlined-basic" variant="outlined" name="rollNo" value={internshipdata.rollNo}
              onChange={onchange}/>
          </div>
          <div className='inputField'>
            <label>Email id</label>
            <TextField id="outlined-basic" variant="outlined" name="emailId" value={internshipdata.emailId}
              onChange={onchange}/>
          </div>
          <div className='inputField'>
            <label>Mobile No</label>
            <TextField id="outlined-basic" variant="outlined" name="mobileNo" value={internshipdata.mobileNo} 
              onChange={onchange}  />
          </div>
          <div className="inputField">
            <label>Semester</label>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="semester"
              value={internshipdata.semester}
              onChange={onchange}
            >
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
            </Select>
          </div>
          <div className="inputField">
            <label>Division</label>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={internshipdata.division}
              onChange={onchange}
              name="division"
            >
              <MenuItem value={'A'}>A</MenuItem>
              <MenuItem value={'B'}>B</MenuItem>
            </Select>
          </div>
        </div>

        <h3 className='headingText'>Internship Detail</h3>
        <div className="forminput">
        <div className='inputField'>
            <label>Name of Company</label>
            <TextField id="outlined-basic" variant="outlined" 
            value={internshipdata.companyName}
            onChange={onchange}
            name="companyName"/>
          </div>
          <div className='inputField'>
            <label>Domain of Internship</label>
            <TextField id="outlined-basic" variant="outlined" name='domain' value={internshipdata.domain}
              onChange={onchange} />
          </div>
          <div className='inputField'>
            <label>Contact details of internship(HR)</label>
            <TextField id="outlined-basic" variant="outlined" name='hrcontactdetail' value={internshipdata.hrcontactdetail}
              onChange={onchange}/>
          </div>
          <div className='inputField'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <label>Starting Date</label>
          <DesktopDatePicker
          inputFormat="DD/MM/YYYY"
          views={["day","month","year"]}
          value={startdate}
          onChange={(newValue) => {
            setStartdate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
          </div>
          <div className='inputField'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <label>Ending Date</label>
          <DatePicker
          inputFormat="DD/MM/YYYY"
          value={enddate}
          onChange={(newValue) => {
            setEnddate(newValue);
          }}
          renderInput={(params) => <TextField {...params}  />}
        />
        </LocalizationProvider>
          </div>
        </div>
        <div className="btn">
        <Button variant="contained" type='submit'>submit</Button>
        </div>
      </form>
    </div>
  )
}

export default Home