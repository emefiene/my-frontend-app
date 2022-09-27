import React, {useEffect, useState} from 'react'

const PatientDetails = () => {
    const [patientsDetail, setPatientsDetail] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/patients/:id")
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