import React from 'react'
import styled from "styled-components"

const PhysiciansList = ({physiciansObj:{name,specialty,image_url}}) => {
    
  return (
    <Card>
      <img className='img' src={image_url} alt="logo"/>
      <h2>{name}</h2>
      <h4>{specialty}</h4>
    </Card>
  )
}

export default PhysiciansList

const Card = styled.div`
   background-color: AliceBlue;
   box-shadow: 4px 4px 8px 0px rgb(0, 0,0,0.2);
   display:inline-block;
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
