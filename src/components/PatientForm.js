import React from 'react'
import styled from "styled-components"

const PatientForm = ({handleChangePatientForm, patientForm, handleSubmitPatient}) => {
 return (
   <Card>
    <img className='img' src='https://blog.ipleaders.in/wp-content/uploads/2020/07/960x0.jpg' alt='logo'></img>
    <h3 style={{textAlign: "center"}}>Care That Makes A Difference.</h3>
    <h2 style={{textAlign: "center"}} >New Patient.</h2>
    <div id="formContainer">
   <form id="formC" onSubmit={handleSubmitPatient}>
   <div class="rows">
   <div class="column">
    <label class="theLabels">Name:</label>
      <input class="theInputs"
       type="text"
       name="name"
       aria-label="name"
       value={patientForm.name}
       onChange={handleChangePatientForm}
      ></input>
      </div>
      <div class="column">
      <label class="theLabels">E-mail:</label>
      <input class="theInputs"
       type="text"
       name="email"
       aria-label="email"
       value={patientForm.email}
       onChange={handleChangePatientForm}
      ></input>
      </div>
      <div class="column">
      <label class="theLabels">Address:</label>
      <input class="theInputs"
       type="text"
       name="address"
       aria-label="address"
       value={patientForm.address}
       onChange={handleChangePatientForm}
      ></input>
      </div>
      <div class="column">
      <label class="theLabels">Age:</label>
      <input class="theInputs"
       type="number"
       name="age"
       aria-label="age"
       value={patientForm.age}
       onChange={handleChangePatientForm}
      ></input>
      </div>
      <div class="column">
      <label class="theLabels">Phone:</label>
      <input class="theInputs"
       type="number"
       name="phone"
       aria-label="phone"
       value={patientForm.phone}
       onChange={handleChangePatientForm}
      ></input>
      <div class="column">
      <input className="sub" type="submit"></input>
      </div>
      </div>
      </div>
    </form>
    </div>
    </Card>
  )
}

export default PatientForm

const Card = styled.div`
 background-color: AliceBlue;
 box-shadow: 4px 4px 8px 0px rgb(0, 0,0,0.2);
  font-family:'Open Sans Condensed', sans-serif;
  text-transform:uppercase;
  outline:none;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-ms-box-sizing: border-box;
	box-sizing: border-box;
	width: 100%;
  
	padding: 10px;

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

  #formContainer{
    width:40%;
    margin:auto;
  }
  #formC{
    width:100%;
  }
  .rows{
    width:100%;
    display:block;
  
  }
  .column{
      width:100%;
      display:inline-block;
      
  }
  .theLabels{
    
    width:30%
    float:left;
  }
  .theInputs{
    
  
    width:60%;
    float:right;
  }
  
  .sub:hover {
    box-shadow: 0 0 10px #0099ff;
    font-weight: bold;
    color: black;
    
    }
    .sub{
      width: 200px;
      line-height:100px;
      margin-bottom: 35px; 
      margin-left: 275px;
  }

  .img{
    width: 1000px;
    height: 500px;
    padding: 15px;
    marging: 10px 
    display: flex;
    margin-left: 400px;
   
   }

`

