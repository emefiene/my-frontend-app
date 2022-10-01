import React, {useState, useEffect} from 'react'

const PatientReview = () => {
    const [reviws, setReviews] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/review")
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
    }, [])
  return (
    <div>
    </div>
  )
}

export default PatientReview