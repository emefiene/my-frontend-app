import React from 'react'

const PhysiciansList = ({physiciansObj:{name,phone,specialty,image_url}}) => {
    
  return (
    <div>
    <img src={image_url} alt="logo"/>
    <h1>{name}</h1>
    <h2>{specialty}</h2>
    <p>{phone}</p>
    </div>
  )
}

export default PhysiciansList