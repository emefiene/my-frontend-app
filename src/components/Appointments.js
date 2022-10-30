import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import { useParams ,useHistory } from 'react-router-dom'


const Appointments = ({appointmentObj:{date, patient,physician},appointmentObj}) => {

  const [appointmentData, setAppointmentData] = useState()

   const handleDelete = () => {
    fetch(`http://localhost:9292/appointment/${appointmentObj.id}`,{
        method: "DELETE"
    })
    .then(data => setAppointmentData(data))
  }

  return (
    <Card>
      <h3>Patient:</h3>
      <p>{patient.name}</p>
      <h3>Address:</h3>
      <p>{patient.address}</p>
      <h3>Physician:</h3>
      <p>Dr. {physician.name}</p>
      <h3>Specialty:</h3>
      <p>{physician.specialty}</p>
      <h3>Date:</h3>
      <p> {date}</p>
      <button onClick={handleDelete}>Delete</button>
    </Card>
  )
}

export default Appointments

const Card = styled.div`
  background-color: AliceBlue;
  box-shadow: 4px 4px 8px 0px rgb(0, 0,0,0.2);
  text-decoration: none;
 
  
`
