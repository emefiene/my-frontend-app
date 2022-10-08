import React, {useState, useEffect} from 'react'
import styled from "styled-components"


const PatientReviews = ({reviewObj:{comments,time,patient_id}}) => {
  
 const [patientsData, setPatientsData] = useState([])

 useEffect(() => {
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

  return(
    <Card>
       <h3  style={{color: "blue"}}>Name: {p}</h3>
       <strong>Comment :</strong><h3>{comments}</h3>
       <p>Time: {time}</p>
    </Card>
  )
}

export default PatientReviews

const Card = styled.div`
   background-color: AliceBlue;
   box-shadow: 4px 4px 8px 0px rgb(0, 0,0,0.2);
  
   text-align:center
   text-decoration: none;
 
   
   a {
    text-decoration: none;
  }
   

   .img{
    width: 300px;
    height: 200px;
    padding: 15px;
    marging: 10px 
   }

`