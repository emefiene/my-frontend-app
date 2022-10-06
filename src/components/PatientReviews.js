import React, {useState, useEffect} from 'react'


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
    <div>
       <h2>Name: {p}</h2>
       <strong>Comment :</strong><h4>{comments}</h4>
       <p>Time: {time}</p>
    </div>
  )
}

export default PatientReviews