import React from 'react'
import { Link } from 'react-router-dom';


const PatientsList = ({patientsObj:{address,age,email,first_name,last_name,phone,symptoms},patientsObj}) => {
    
  return (
    <div>
       <h3>{first_name}</h3>
       <h3>{last_name}</h3>
       <p>{age}</p>
       <p>{address}</p>
       <h4>{email}</h4>
       <p>{phone}</p>
       <h5>{symptoms}</h5>
       <Link to={`patients/${patientsObj.id}`}>Click</Link>


    </div>
  )
}

export default PatientsList
