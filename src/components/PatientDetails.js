 import React, {useEffect, useState} from 'react'
 import { useParams , useHistory } from 'react-router-dom'
 import { Link } from 'react-router-dom';

const PatientDetails = ({}) => {
  
    const [patientsDetail, setPatientsDetail] = useState([])

    const itemsId = useParams().id
     
    const history = useHistory()


    

    useEffect(() => {
        fetch(`http://localhost:9292/patients/${itemsId}`)
        .then(res => res.json())
        .then(data => {
            setPatientsDetail(data)
        })

    }, [])

    const handleDelete = () => {
        fetch(`http://localhost:9292/patients/${patientsDetail.id}`,{
          method: "DELETE"
        })
        .then(res => res.json)
        .then(detelePatient => {
            setPatientsDetail(detelePatient)
            history.push("/patients")
        })
    }

  return (
    <div>
        <h4>{patientsDetail.name}</h4>
        <h4>{patientsDetail.email}</h4>
        <h4>{patientsDetail.address}</h4>
        <p>{patientsDetail.age}</p>
        <p>{patientsDetail.phone}</p>
        <button onClick={handleDelete}>Delete</button>
        <Link to={`/edit/patients/${patientsDetail.id}`}>Edit {patientsDetail.first_name}</Link>

        <Link to={`/review/${itemsId}/post`}> Review</Link>
    </div>
  )
}

export default PatientDetails

