import React from 'react'
import PhysiciansList from './PhysiciansList'
const PhysicianContainer = ({physiciansData}) => {
  return (
    <div>
    {physiciansData.map((physiciansObj,index) => <PhysiciansList physiciansObj={physiciansObj} key={index}/>)}
    </div>
  )
}

export default PhysicianContainer