import React from 'react'
import { Link } from 'react-router-dom'
import './admin.css'
const Admin = () => {
  return (
    <div className='Admin_section'>
      <div className="admin_section--title">
        <h3>Admin Dashboard CMPN</h3>
      </div>
      <div className="Dashboard_Section_1">
        <div className="Dashboard_box main_box">
        <Link to="/admin/dashboard">
          <p className='Dashboard_title_1'>Dashboard</p>
        </Link>
        </div>
        <div className="Dashboard_box">
          <p className='Dashboard_title_1'>Verification</p>
        </div>
        <div className="Dashboard_box">
        <Link to="/admin/editinfo">
          <p className='Dashboard_title_1'>Edit Information</p>
        </Link>
        </div>
      </div>
      <div className="Dashboard_Section_1">
        <div className="Dashboard_box main_box">
          <p className='Dashboard_title_1'>Add Internship</p>
        </div>
      </div>
    </div>
  )
}

export default Admin