 import React, {useEffect, useState} from 'react'
 import { useParams , useHistory } from 'react-router-dom'
 import { Link } from 'react-router-dom';
 import styled from "styled-components"
 

const PatientDetails = ({handleDelete}) => {
  
    const [patientsDetail, setPatientsDetail] = useState([])

    const params = useParams()
     
    const history = useHistory()

    

    useEffect(() => {
        fetch(`http://localhost:9292/patients/${params.id}`)
        .then(res => res.json())
        .then(data => {
            setPatientsDetail(data)
        })

    }, [])


    // const handleDelete = () => {
    //     fetch(`http://localhost:9292/patients/${params.id}`,{
    //       method: "DELETE",
       
    //     })
    //     .then(res => {
    //      if(res.ok){
    //        deletePatient(id)
    //        history.push("/")
    //      }
          
    //     })
      
        
    // }

  return (
    <Card>
        <h2>Name:</h2>
        <p>{patientsDetail.name}</p>
        <h4>E-mail:</h4>
        <p>{patientsDetail.email}</p>
        <h4>Address:</h4>
        <p>{patientsDetail.address}</p>
        <h4>Age:</h4>
        <p>{patientsDetail.age}</p>
        <h4>Phone:</h4>
        <p>{patientsDetail.phone}</p>
        <button><Link to={`/edit/patients/${params.id}`}>Update Your information</Link></button>
        <button><Link to={`/appointment/${params.id}/schedule`}>Schedule Appointment</Link></button>
        <button><Link to={`/review/${params.id}/post`}>Write Review</Link></button>
        <button onClick={() => handleDelete(patientsDetail)} style={{color: "blue"}}>Delete</button>
        
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


