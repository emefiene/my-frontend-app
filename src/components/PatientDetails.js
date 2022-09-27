import React, {useEffect, useState} from 'react'
 import { useParams  } from 'react-router-dom'

const PatientDetails = () => {
    const [patientsDetail, setPatientsDetail] = useState([])

    const itemsId = useParams().id

    useEffect(() => {
        fetch(`http://localhost:9292/patients/${itemsId}`)
        .then(res => res.json())
        .then(data => {
            setPatientsDetail(data)
        })

    }, [])
  return (
    <div>
        <h4>{patientsDetail.first_name}</h4>
        <h4>{patientsDetail.last_name}</h4>
        <h4>{patientsDetail.email}</h4>
        <h4>{patientsDetail.address}</h4>
        <h4>{patientsDetail.first_name}</h4>
        <p>{patientsDetail.age}</p>
        <p>{patientsDetail.phone}</p>
        <h4>{patientsDetail.symptoms}</h4>
    
    </div>
  )
}

export default PatientDetails

