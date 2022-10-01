import React, {useState} from 'react'
import { useParams  } from 'react-router-dom'

const EditPatientForm = () => {
  const initialized = {
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    age: "",
    phone: "",
    symptoms: "",
  }
     const [editPatientData, setEditPatientData] = useState(initialized)
     const [editPatient, setEditPatient] = useState([])

     const itemsId = useParams().id

      
      
      useEffect(() => {
        fetch(`http://localhost:9292/patients/${itemsId}`)
        .then(res => res.json())
        .then(data => {
           setEditPatient(data)
           
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
      .then(data => {
       setEditPatient(data)
   
         
      })
      
  }

  return (
        <form onSubmit={handleSubmitPatient}>
         <label>First Name</label>
           <input
            type="text"
            name="first_name"
            aria-label="first_name"
            value={editPatientData.first_name}
            onChange={handleChangePatientForm}
           ></input>
           <label>Last Name</label>
           <input
            type="text"
            name="last_name"
            aria-label="last_name"
            value={editPatientData.last_name}
            onChange={handleChangePatientForm}
           ></input>
           <label>E-mail</label>
           <input
            type="text"
            name="email"
            aria-label="email"
            value={editPatientData.email}
            onChange={handleChangePatientForm}
           ></input>
           <label>Address</label>
           <input
            type="text"
            name="address"
            aria-label="address"
            value={editPatientData.address}
            onChange={handleChangePatientForm}
           ></input>
           <label>Age</label>
           <input
            type="number"
            name="age"
            aria-label="age"
            value={editPatientData.age}
            onChange={handleChangePatientForm}
           ></input>
           <label>Phone</label>
           <input
            type="number"
            name="phone"
            aria-label="phone"
            value={editPatientData.phone}
            onChange={handleChangePatientForm}
           ></input>
           <label>Symptoms</label>
           <input
            type="text"
            name="symptoms"
            aria-label="symptoms"
            value={editPatientData.symptoms}
            onChange={handleChangePatientForm}
           ></input>
           <input type="submit"></input>
     
         </form>
       )
     }

export default EditPatientForm