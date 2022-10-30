import React from 'react'
import styled from "styled-components"

const PhysiciansList = ({physiciansObj:{name,specialty,image_url}}) => {
    
  return (
    <Card>
      <img src={image_url} alt="logo"/>
      <h2> Name: {name}</h2>
      <h4> Specialty: {specialty}</h4>
    </Card>
  )
}

export default PhysiciansList

const Card = styled.div`

display:flex;
flex-direction:row;
justify-content:start;
font-family:Arial, sans-serif;
margin:5px;
&:hover {
  transform: scale(1.15);
  transform-origin: top left;
}
a{
  text-decoration:none;
  color:white;
}
img{
  width: 180px;
  margin-left:20%;
  mask-image: linear-gradient(to left, rgba(0, 0, 0, .9) 80%, transparent 100%);
}
position:relative;
div{
 position:absolute;

}



`
