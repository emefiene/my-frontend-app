import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components"

const PatientsList = ({patientsObj:{address,age,email,name,phone,symptoms},patientsObj}) => {
    
  return (
    <Card>
       <h3>{name}</h3>
       <p>{age}</p>
       <p>{address}</p>
       <h4>{email}</h4>
       <p>{phone}</p>
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

`