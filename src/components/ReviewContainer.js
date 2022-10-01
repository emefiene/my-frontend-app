import React from 'react'
import PatientReviews from './PatientReviews'

const ReviewContainer = ({reviews}) => {
    
  return (
    <div>
      {reviews.map((reviewObj,index) => <PatientReviews reviewObj={reviewObj} key={index}/>)}
    </div>
  )
}

export default ReviewContainer