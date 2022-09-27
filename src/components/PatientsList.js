import React from 'react'

const PatientsList = ({patientsObj:{address,age,email,first_name,last_name,phone,symptoms}}) => {
    
  return (
    <div>
       <h3>{first_name}</h3>
       <h3>{last_name}</h3>
       <p>{age}</p>
       <p>{address}</p>
       <h4>{email}</h4>
       <p>{phone}</p>
       <h5>{symptoms}</h5>


    </div>
  )
}

export default PatientsList
