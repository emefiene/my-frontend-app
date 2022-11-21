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



  const [patientsData, setPatientsData] = useState([])
  const [patientForm, setPatientForm] = useState(initialized)
  const [reviews, setReviews] = useState([])
  
  const history = useHistory()

  

  useEffect(() => {
    fetch("http://localhost:9292/patients")
    .then(res => res.json())
    .then(data => {
      setPatientsData(data)
      setReviews(data)
    })
    
  },[])
  
  const handleChangePatientForm = (e) => {
     setPatientForm({...patientForm, [e.target.name]:e.target.value})
  }

  const addPatient = (patient) => setPatientsData(current => [...current, patient])
 
  
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


const addReview = (review) => setReviews(current => [review, ...current])

 
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
         <Route exact path="/review/:patientId/post">
      <ReviewForm addReview={addReview}/>
      </Route>
        <Route exact path="/edit/patients/:id">
          <EditPatientForm updatedProduction={updatedProduction} />
      </Route>
        <Route exact path="/patients">
          <PatientContainer patientsData={patientsData}/>
        </Route>
        <Route exact path="/patients/:id">
          <PatientDetails handleDelete={handleDelete} />
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