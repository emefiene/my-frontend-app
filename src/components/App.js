import React, {useState, useEffect} from "react";
import { Switch, useHistory, Route} from "react-router-dom";
import Home from "./Home";
import PhysicianContainer from "./PhysicianContainer";
import PatientContainer from "./PatientContainer";
import PatientDetails from "./PatientDetails";
import PatientForm from "./PatientForm";



function App() {
  const initialized = {
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    age: "",
    phone: "",
    symptoms: "",
  }
  const [physiciansData, setPhysiciansData] = useState([])
  const [patientsData, setPatientsData] = useState([])
  const [patientForm, setPatientForm] = useState(initialized)
  

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


  },[])
  
  const handleChangePatientForm = (e) => {
     setPatientForm({...patientForm, [e.target.name]:e.target.value})
  }
  return (
    <div>
      <Home/>
      <PatientForm handleChangePatientForm={handleChangePatientForm} patientForm={patientForm}/>
      <Switch>
       <Route exact path="/physicians">
          <PhysicianContainer physiciansData={physiciansData}/>
        </Route>
        <Route exact path="/patients">
          <PatientContainer patientsData={patientsData}/>
        </Route>
        <Route exact path="/patients/:id">
          <PatientDetails patientsData={patientsData}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;