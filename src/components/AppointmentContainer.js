import React from 'react'
import Appointments from "./Appointments"
const AppointmentContainer = ({appointment}) => {

  return (
    <div>
    {appointment.map((appointmentObj,index) => <Appointments appointmentObj={appointmentObj} key={index} />)}
    </div>
  )
}

export default AppointmentContainer