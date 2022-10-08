import React from 'react'
import styled from "styled-components"

const PatientForm = ({handleChangePatientForm, patientForm, handleSubmitPatient}) => {
 return (
   <Card>
   <form onSubmit={handleSubmitPatient}>
    <label>Name</label>
      <input
       type="text"
       name="name"
       aria-label="name"
       value={patientForm.name}
       onChange={handleChangePatientForm}
      ></input>
      <label>E-mail</label>
      <input
       type="text"
       name="email"
       aria-label="email"
       value={patientForm.email}
       onChange={handleChangePatientForm}
      ></input>
      <label>Address</label>
      <input
       type="text"
       name="address"
       aria-label="address"
       value={patientForm.address}
       onChange={handleChangePatientForm}
      ></input>
      <label>Age</label>
      <input
       type="number"
       name="age"
       aria-label="age"
       value={patientForm.age}
       onChange={handleChangePatientForm}
      ></input>
      <label>Phone</label>
      <input
       type="number"
       name="phone"
       aria-label="phone"
       value={patientForm.phone}
       onChange={handleChangePatientForm}
      ></input>
      <input type="submit"></input>

    </form>
    </Card>
  )
}

export default PatientForm

const Card = styled.div`

  font-family:'Open Sans Condensed', sans-serif;
  text-transform:uppercase;
  outline:none;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-ms-box-sizing: border-box;
	box-sizing: border-box;
	width: 100%;
	background-color: #5C8CA7;
	padding: 10px;
	color: white;
	border: 1px solid #3498db;
	border-radius: 3px;
	font-size: 1.5em;
	font-weight: bold;
	margin-top: 5px;
	cursor: pointer;
  position:relative;
  top:0;
  width:100%;
	padding:5px;

`

