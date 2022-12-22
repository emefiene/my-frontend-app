import React from 'react'
import PatientsList from './PatientsList'

const PatientContainer = ({patientsData, handleDelete}) => {
 
  return (
    <div>
    
      {patientsData.map((patientsObj,index) => <PatientsList patientsObj={patientsObj} handleDelete={handleDelete} key={index}/>)}
    
    </div>
  )
}

export default PatientContainer
