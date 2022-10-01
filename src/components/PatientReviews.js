import React from 'react'

const PatientReviews = ({reviewObj:{comments,time}}) => {
    
  return(
    <div>
       <strong>Comment :</strong><h4>{comments}</h4>
       <p>Time: {time}</p>
    </div>
  )
}

export default PatientReviews