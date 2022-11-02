import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useParams ,useHistory } from 'react-router-dom'
import styled from 'styled-components'

const AppointmentForm = () => {
    const [data, setData] = useState({
        date: "",
        physician_id: ""
    });

    const {patientId} = useParams()

    const history = useHistory()

    const handleChange = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }


    const handleSubmitAppointment = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9292/appointment/${patientId}/schedule`, {
          method: "POST",
          headers:{
            "content-type":"application/json"
          },
          body: JSON.stringify(data)
        })
        history.push("/patients")
    
    }

   

  return (
    <div className='App'>
      <h2 style={{ color: "red", textAlign: "center"}}>Schedule Your Appointment</h2>
      <Form onSubmit={handleSubmitAppointment}>
          <label><h3 style={{color:"gray"}}>Appointment Date</h3></label>
            <input
                className='date'
                type="datetime-local"
                name = "date"
                aria-label='date'
                onChange={handleChange}
                value={setData.date}
           ></input>
           <br></br>
         <label><h3 style={{color:"gray"}}>Select Physician</h3></label>
           <select
             name="physician_id"
             onChange={handleChange}
             value={setData.physician_id}
            >
           <option defaultValue="physician_id">Select Physician</option>
           <option value= "1">Dr. Pius Emefiene</option>
           <option value="2">Dr. Gerald Michael</option>
           <option value="3">Dr. Alexander Ikemba</option>
           <option value="4">Dr. Naomi Chidera</option>
           <option value="5">Dr. Legend Zion</option>
           </select>
           <input className="sub" type="submit"/>
      </Form>
    </div>
  )
}

export default AppointmentForm
  
const Form = styled.form`
display:flex;
flex-direction:column;
width: 400px;
margin:auto;
font-family:Arial;
font-size:30px;
input[type=submit]{
  background-color:#42ddf5;
  color: white;
  height:40px;
  font-family:Arial;
  font-size:30px;
  margin-top:10px;
  margin-bottom:10px;
}
`
