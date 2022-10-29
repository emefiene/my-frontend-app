import React from 'react'
import styled from "styled-components"


const Appointments = ({appointmentObj:{date, patient,physician}}) => {



  
  return (
    <Card>
      <h2>Name: {patient.name}</h2>
      <h4>Address:  {patient.address}</h4>
      <h2>Name:  Dr. {physician.name}</h2>
      <h4>Specialty:  {physician.specialty}</h4>
      <h3>Date: {date}</h3>
    </Card>
  )
}

export default Appointments

const Card = styled.div`
  background-color: AliceBlue;
  box-shadow: 4px 4px 8px 0px rgb(0, 0,0,0.2);
  text-decoration: none;
 
  


`
