import React, {useState, useEffect} from 'react'
import styled from "styled-components"


const Appointments = ({appointmentObj:{patient_id,physician_id, date}}) => {
 const [physicianData, setPhysicianData] = useState([])
 const [patientsData, setPatientsData] = useState([])

 useEffect(() => {

  fetch("http://localhost:9292/physicians")
    .then(res => res.json())
    .then(data => {
      setPhysicianData(data)
    })

    fetch("http://localhost:9292/patients")
    .then(res => res.json())
    .then(data => {
      setPatientsData(data)
    })

 }, [])

 const p = patientsData.map(patientName => {
  if(patient_id === patientName.id){
    return (patientName.name)
  }
 })

 const y = physicianData.map(physicianName => {
  if(physician_id === physicianName.id){
    return (physicianName.specialty)
  }
 })

 const x = physicianData.map(physicianName => {
   if(physician_id === physicianName.id){
     return (physicianName.name)
   }
 })
  
  return (
    <Card>
     <h2 style={{color: "blue"}}>Dr :{x}</h2><h4>Specialty :{y}</h4>

      <h4 style={{color: "red"}}>Patient Name: {p}</h4>
      <h3>{date}</h3>
    </Card>
  )
}

export default Appointments

const Card = styled.div`
  background-color: AliceBlue;
  box-shadow: 4px 4px 8px 0px rgb(0, 0,0,0.2);
  text-decoration: none;
 
  


`
