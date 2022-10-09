import React from 'react'
import PhysiciansList from './PhysiciansList'
import styled from 'styled-components'

const PhysicianContainer = ({physiciansData}) => {
  return (
    <div>
      <CategoryStyle style={{display: "flex"}}>
        {physiciansData.map((physiciansObj,index) => <PhysiciansList physiciansObj={physiciansObj} key={index}/>)}
      </CategoryStyle>
    </div>
  )
}

export default PhysicianContainer

const CategoryStyle = styled.div`
   display: flex;
   flex-wrap:wrap;
   justify-content:space-around;
   background-color:Aquamarine;
    div{
      border-right: 1px solid;
      paddingg-left: 2em;
      padding-right: 2em
    }

    div:last-child{
      border:none
    }
`

