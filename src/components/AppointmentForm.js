import React, {useState} from "react";
import { useParams ,useHistory } from 'react-router-dom'

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
        history.push("/appointment")
    
    }

  return (
    <div>
      <form onSubmit={handleSubmitAppointment}>
          <label>Date</label>
            <input
                className='date'
                type="datetime-local"
                name = "date"
                aria-label='date'
                onChange={handleChange}
                value={setData.date}
           ></input>
         <label></label>
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
      </form>
    </div>
  )
}

export default AppointmentForm
