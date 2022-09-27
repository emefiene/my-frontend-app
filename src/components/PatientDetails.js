import React, {useEffect, useState} from 'react'
 import { useParams  } from 'react-router-dom'

const PatientDetails = () => {
    const [patientsDetail, setPatientsDetail] = useState([])

    const itemsId = useParams().id

    useEffect(() => {
        fetch(`http://localhost:9292/patients/${itemsId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    }, [])
  return (
    <div>

    
    </div>
  )
}

export default PatientDetails

