import React from 'react'
import Appointments from "./Appointments"
const AppointmentContainer = ({appointment,handleDeleteAppoint}) => {

  return (
    <div>
    {appointment.map((appointmentObj,index) => <Appointments appointmentObj={appointmentObj} handleDeleteAppoint={handleDeleteAppoint} key={index} />)}
    </div>
  )
}

export default AppointmentContainer