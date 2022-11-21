import React from 'react'
import { NavLink } from 'react-router-dom'
import styledComponents from 'styled-components'


const Navbar = () => {
  return (
    <Head style={{ display:"flex"}}>
       <NavLink to="/"><h2>Home</h2></NavLink>
       <NavLink to="/patients"><h2>Patients</h2></NavLink>
       <NavLink to="/form"><h2>New Patients</h2></NavLink>
    </Head>
  )
}

export default Navbar
const Head = styledComponents.div`
  
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

  

