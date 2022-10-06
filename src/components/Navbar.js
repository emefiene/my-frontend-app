import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
       <NavLink to="/">Home</NavLink>
       <NavLink to="/physicians">Physicians</NavLink>
       <NavLink to="/patients">Patients</NavLink>
       <NavLink to="/appointment">Appointments</NavLink>
       <NavLink to="/form">New Patients</NavLink>
       <NavLink to="/reviews">Reviews</NavLink>
    </div>
  )
}

export default Navbar