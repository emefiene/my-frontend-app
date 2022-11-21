import React, {useState, useEffect} from 'react'
import { useParams, useHistory  } from 'react-router-dom'
import styled from "styled-components"

const EditPatientForm = ({updatedProduction}) => {
  const initialized = {
    name: "",
    email: "",
    address: "",
    age: "",
    phone: "",
   
  }
     const [editPatientData, setEditPatientData] = useState(initialized)
  
     const history = useHistory()

     const itemsId = useParams().id

      
      
      useEffect(() => {
        fetch(`http://localhost:9292/patients/${itemsId}`)
        .then(res => res.json())
        .then(data => {
           setEditPatientData(data)
           
        })

      }, [])
    
    const handleChangePatientForm = (e) => {
      setEditPatientData({...editPatientData, [e.target.name]:e.target.value})
   }

    const handleSubmitPatient = (e) => {
      e.preventDefault()
      fetch(`http://localhost:9292/patients/${itemsId}`, {
        method: "PATCH",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify(editPatientData)
      })
      .then(res => res.json())
      .then( updatedProduction )
       history.push("/patients")
      
  }

  return (
       <Card className='id'>
       <img  className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSO8H7u0mrBCFOCv-zep_bhb2sKFGWHXH5HQ&usqp=CAU' alt='logo'></img>
       <h1 style={{textAlign: "center"}}>Update Your Information</h1>
       <div id="formContainer">
       <form id="formC" onSubmit={handleSubmitPatient}>
       <div className="rows">
       <div className="column">
         <label className="theLabels">Name</label>
           <input className="theInputs" 
            type="text"
            name="name"
            aria-label="first_name"
            value={editPatientData.name}
            onChange={handleChangePatientForm}
           ></input>
           </div>
           <div className="column">
           <label className="theLabels">E-mail</label>
           <input className="theInputs" 
            type="text"
            name="email"
            aria-label="email"
            value={editPatientData.email}
            onChange={handleChangePatientForm}
           ></input>
           </div>
           <div className="column">
           <label className="theLabels">Address</label>
           <input className="theInputs" 
            type="text"
            name="address"
            aria-label="address"
            value={editPatientData.address}
            onChange={handleChangePatientForm}
           ></input>
           </div>
           <div className="column">
           <label className="theLabels">Age</label>
           <input className="theInputs" 
            type="text"
            name="age"
            aria-label="age"
            value={editPatientData.age}
            onChange={handleChangePatientForm}
           ></input>
           </div>
           <div className="column">
           <input className="sub" type="submit"></input>
           </div>
           </div>
           </form>
         </div>
         </Card>
       )
     }

export default EditPatientForm

const Card = styled.div`
   background-color: AliceBlue;
   box-shadow: 4px 4px 8px 0px rgb(0, 0,0,0.2);



  .img{
    width: 1000px;
    height: 500px;
    padding: 15px;
    marging: 10px 
    display: flex;
    margin-left: 400px;
   
   }
  
   }
 
   .sub:hover {
    box-shadow: 0 0 10px #0099ff;
    font-weight: bold;
    color: black;
    
    }
    .sub{
      width: 200px;
      line-height:100px;
      margin-bottom: 350px; 
      margin-left: 132px;
  }
  #formContainer{
    width:40%;
    margin:auto;
    justify-content: center;
    align-items: center;
 
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
    
  
    width:80%;
    float:right;
  }
  
`
