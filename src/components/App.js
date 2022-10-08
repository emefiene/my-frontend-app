import React, {useState, useEffect} from "react";
import { Switch, useHistory, Route} from "react-router-dom";
import Home from "./Home";
import PhysicianContainer from "./PhysicianContainer";
import PatientContainer from "./PatientContainer";
import PatientDetails from "./PatientDetails";
import PatientForm from "./PatientForm";
import AppointmentContainer from "./AppointmentContainer";
import ReviewContainer from "./ReviewContainer";
import ReviewForm from "./ReviewForm";
import EditPatientForm from "./EditPatientForm";
import Navbar from "./Navbar";
import styled,{ThemeProvider} from "styled-components";



function App() {
  const initialized = {
    name: "",
    email: "",
    address: "",
    age: "",
    phone: "",
    
  }


  const [physiciansData, setPhysiciansData] = useState([])
  const [patientsData, setPatientsData] = useState([])
  const [appointment , setAppointment] = useState([])
  const [patientForm, setPatientForm] = useState(initialized)
  const [reviews, setReviews] = useState([])
  
  

  useEffect(() => {
    fetch("http://localhost:9292/physicians")
    .then(res => res.json())
    .then(data => {
      setPhysiciansData(data)
    })

    fetch("http://localhost:9292/patients")
    .then(res => res.json())
    .then(data => {
      setPatientsData(data)
    })

    fetch("http://localhost:9292/appointment")
    .then(res => res.json())
    .then(data => {
      setAppointment(data)
    })
  
    fetch("http://localhost:9292/review")
    .then(res => res.json())
    .then(data => {
      setReviews(data)
    })

  },[])
  
  const handleChangePatientForm = (e) => {
     setPatientForm({...patientForm, [e.target.name]:e.target.value})
  }
  
  const handleSubmitPatient = (e) => {
      e.preventDefault()
      fetch("http://localhost:9292/patients", {
        method: "POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify(patientForm)
      })
      .then(res => res.json())
      .then(data => {
        setPhysiciansData([data,...physiciansData])
      })
      setPatientForm(initialized)
  }

  return (
    <ThemeProvider theme={theme}>
    <div>
      <Navbar/>
      <Home/>
      <Switch>
       <Route exact path="/form">
      <PatientForm handleChangePatientForm={handleChangePatientForm} patientForm={patientForm} handleSubmitPatient={handleSubmitPatient}/>
      </Route>
         <Route exact path="/review/:patientId/post">
      <ReviewForm />
     </Route>
        <Route exact path="/edit/patients/:id">
          <EditPatientForm/>
     </Route>
       <Route exact path="/physicians">
          <PhysicianContainer physiciansData={physiciansData}/>
        </Route>
        <Route exact path="/appointment">
          <AppointmentContainer appointment={appointment} physiciansData={physiciansData}/> 
        </Route>
        <Route exact path="/reviews">
          <ReviewContainer reviews={reviews}/>
        </Route>
        <Route exact path="/patients">
          <PatientContainer patientsData={patientsData}/>
        </Route>
        <Route exact path="/patients/:id">
          <PatientDetails/>
        </Route>
        <Route exact path="/patients/edit/:id">
          <PatientDetails/>
        </Route>
      </Switch>
    </div>
    </ThemeProvider>
  );
}

export default App;

const theme= {
  font:{
    primary: "'Dancing Script', cursive",
    secondary: "'Roboto', sans-serif"
  }
}