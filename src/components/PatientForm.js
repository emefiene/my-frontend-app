import React from 'react'

const PatientForm = ({handleChangePatientForm, patientForm, handleSubmitPatient}) => {
 return (
   <form onSubmit={handleSubmitPatient}>
    <label>First Name</label>
      <input
       type="text"
       name="first_name"
       aria-label="first_name"
       value={patientForm.first_name}
       onChange={handleChangePatientForm}
      ></input>
      <label>Last Name</label>
      <input
       type="text"
       name="last_name"
       aria-label="last_name"
       value={patientForm.last_name}
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
      <label>Symptoms</label>
      <input
       type="text"
       name="symptoms"
       aria-label="symptoms"
       value={patientForm.symptoms}
       onChange={handleChangePatientForm}
      ></input>
      <input type="submit"></input>

    </form>
  )
}

export default PatientForm
