import React from 'react'
import PatientsList from './PatientsList'

const PatientContainer = ({patientsData}) => {
 
  return (
    <div>
      {patientsData.map((patientsObj,index) => <PatientsList patientsObj={patientsObj} key={index}/>)}
    </div>
  )
}

export default PatientContainer