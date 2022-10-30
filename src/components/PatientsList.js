import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components"

const PatientsList = ({patientsObj:{address,age,email,name,phone,symptoms},patientsObj}) => {
    
  return (
    <Card>
       <h3>Name: {name}</h3>
       <p>Age: {age}</p>
       <p>Address: {address}</p>
       <h4>E-mail: {email}</h4>
       <Link to={`patients/${patientsObj.id}`}><h2>Click for Details</h2></Link>


    </Card>
  )
}

export default PatientsList

const Card = styled.div`
   background-color: AliceBlue;
   box-shadow: 4px 4px 8px 0px rgb(0, 0,0,0.2);
  
   text-align:center
   text-decoration: none;
 
   h4{
    font-family: 'Dancing Script', cursive;
   }
   
   a {
    text-decoration: none;
  }
   

   .img{
    width: 300px;
    height: 200px;
    padding: 15px;
    marging: 10px 
   }

   
  align-items: center;
  a{
    text-decoration: none;
    font-family:Arial;
  }

`