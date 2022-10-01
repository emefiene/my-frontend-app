import React, {useState, useEffect} from 'react'

const PatientReview = () => {
    const [reviws, setReviews] = useState([])
    const [patientsData, setPatientsData] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/review")
        .then(res => res.json())
        .then(data => {
          setReviews(data)
        })

        fetch("http://localhost:9292/patients")
    .then(res => res.json())
    .then(data => {
      setPatientsData(data)
    })

    }, [])

    const p = patientsData.map(patientName => {
        if(patient_id === patientName.id){
          return (patientName.first_name)
        }
      })
      
  return (
    <div>
    </div>
  )
}

export default PatientReview
// comments
// : 
// "Best care ever"
// id
// : 
// 1
// patient_id
// : 
// 2
// time
// : 
// "2022-09-25T19:28:29.043Z"
// [[Prototype]]
// : 
// Object
// 1
// : 
// {id: 2, comments: 'Best care ever, will definitely be back', time: '2022-09-25T19:28:29.043Z', patient_id: 4}
// 2
// : 
// {id: 3, comments: 'Completely satisfy with care', time: '2022-09-25T19:28:29.043Z', patient_id: 5}
// 3
// : 
// {id: 4, comments: "I'm grateful", time: '2022-09-25T19:28:29.043Z', patient_id: 1}
// 4
// : 
// {id: 5, comments: 'Competent care', time: '2022-09-25T19:28:29.043Z', patient_id: 2}
// length
// : 
// 5