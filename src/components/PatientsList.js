import React from 'react'
import { Link } from 'react-router-dom';


const PatientsList = ({patientsObj:{address,age,email,name,phone,symptoms},patientsObj}) => {
    
  return (
    <div>
       <h3>{name}</h3>
       <p>{age}</p>
       <p>{address}</p>
       <h4>{email}</h4>
       <p>{phone}</p>
       <Link to={`patients/${patientsObj.id}`}>Click</Link>


    </div>
  )
}

export default PatientsList
