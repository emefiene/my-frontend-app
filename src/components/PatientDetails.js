 import React, {useEffect, useState} from 'react'
 import { useParams , useHistory } from 'react-router-dom'
 import { Link } from 'react-router-dom';
 import styled from "styled-components"
 

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
    <Card>
        <h2>Name:</h2>
        <p>{patientsDetail.name}</p>
        <h3>E-mail:</h3>
        <p>{patientsDetail.email}</p>
        <h3>Address:</h3>
        <p>{patientsDetail.address}</p>
        <h3>Age:</h3>
        <p>{patientsDetail.age}</p>
        <h3>Phone:</h3>
        <p>{patientsDetail.phone}</p>
        <button onClick={handleDelete}><Link>Delete</Link></button>
        <button><Link to={`/edit/patients/${patientsDetail.id}`}>Update Your information</Link></button>
        <button><Link to={`/review/${itemsId}/post`}>Write Review</Link></button>
        <button><Link to={`/appointment/${patientsDetail.id}/schedule`}>Schedule Appointment</Link></button>
    </Card>
  )
}


export default PatientDetails

const Card = styled.div`
  
display:flex;
flex-direction:column;
justify-content:start;
font-family:Arial, sans-serif;
margin:5px;
h1{
  font-size:60px;
  border-bottom:solid;
  border-color:#42ddf5;
}
.wrapper{
  display:flex;
  div{
    margin:10px;
  }
}
img{
  width: 300px;
}
button{
  background-color:AliceBlue;
  color: white;
  height:40px;
  font-family:Arial;
  font-size:30px;
  margin-top:10px;
}
  
background-color: AliceBlue;
 

 
h2{
 font-family: 'Dancing Script', cursive;
}

a {
 text-decoration: none;
}

`


