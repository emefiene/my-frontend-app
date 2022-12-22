 import React, {useEffect, useState} from 'react'
 import { useParams , useHistory } from 'react-router-dom'
 import { Link } from 'react-router-dom';
 import styled from "styled-components"
 

const PatientDetails = ({data}) => {
   

    const {id} = useParams()
  

  return (
    <Card>
        <h2>Name:</h2>
        <p>{data.map(res => { if(res.id == id){ return res.name}})}</p>
        <h3>Reviews</h3>
        {data.map((res) => { if(res.id == id){
        return res.reviews.map((r, index) => (<li key={index} > <p>{r.comments}</p> </li> ))}})}
        <button><Link to={`/edit/patients/${id}`}>Update Your information</Link></button>
        <button><Link to={`/review/${id}`}>Write Review</Link></button>
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


