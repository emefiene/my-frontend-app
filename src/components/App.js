import React, {useState, useEffect} from "react";
import { Switch, useHistory, Route} from "react-router-dom";
import Home from "./Home";
import PatientContainer from "./PatientContainer";
import PatientDetails from "./PatientDetails";
import PatientForm from "./PatientForm";
import ReviewForm from "./ReviewForm";
import EditPatientForm from "./EditPatientForm";
import Navbar from "./Navbar";
import styled,{ThemeProvider} from "styled-components";
import Footer from "./Footer";



function App() {
  const initialized = {
    name: "",
    email: "",
    address: "",
    age: "",
    
  }



  
  const [patientForm, setPatientForm] = useState(initialized)
  const [data, setData] = useState([])
  const [patientsData, setPatientsData] = useState([])
  const [render, setRender] = useState([])

  const history = useHistory()

  

  useEffect(() => {
    fetch("http://localhost:9292/patients")
    .then(res => res.json())
    .then(data => {
      setPatientsData(data)
      setData(data)
      
    
    })
    
  }, [render])
  

  const handleChangePatientForm = (e) => {
     setPatientForm({...patientForm, [e.target.name]:e.target.value})
  }

  const addPatient = (patient) => setPatientsData(current =>
    [...current, patient]
 
  )
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
      .then(addPatient)
      setPatientForm(initialized)
      history.push("/patients")
  }

  const updatedProduction = (updatedProduction) => setPatientsData(data => {
    return data.map(patientsData => {
      if(patientsData.id === updatedProduction.id){
        return updatedProduction
      }else{
        return patientsData
      }
    })
  })
  
  const handleDelete = (patient) => {
    
    fetch(`http://localhost:9292/patients/${patient.id}`,{
      method: "DELETE",
   
    })
    .then(() => {
      const deletePatient = patientsData.filter(p => p.id !== patient.id)
      setPatientsData(deletePatient)
      history.push("/patients")
    })

} 

 
const updateReview = (patient) => setData(current =>
   setRender( [...current, patient])
   
  )
 
return (
  <ThemeProvider theme={theme}>
  <div>
    <Navbar/>
    <Switch>
     <Route exact path="/">
      <Home />
   </Route>
     <Route exact path="/form">
    <PatientForm handleChangePatientForm={handleChangePatientForm} patientForm={patientForm} handleSubmitPatient={handleSubmitPatient}/>
    </Route>
       <Route exact path="/review/:Id">
    <ReviewForm updateReview={updateReview} />
    </Route>
      <Route exact path="/edit/patients/:id">
        <EditPatientForm patientsData={patientsData} updatedProduction={updatedProduction} />
    </Route>
      <Route exact path="/patients">
        <PatientContainer patientsData={patientsData} handleDelete={handleDelete}/>
      </Route>
      <Route exact path="/patients/:id">
        <PatientDetails data={data}  />
      </Route>
    
    </Switch>
    <Footer/>
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