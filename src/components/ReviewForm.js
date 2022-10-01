import React from 'react'


const ReviewForm = ({handleChange,reviewData,handleSubmitReview}) => {


  return (
      <form onSubmit={handleSubmitReview}>
         <label>Name</label>
           <input
           type="text"
           name = "patient_id"
           aria-label='patient_id'
           value={reviewData.patient_id}
           onChange={handleChange}
          ></input>
          <label>Time</label>
        
          <input
            type="datetime-local"
            name = "time"
            aria-label='time'
            value={reviewData.time}
            onChange={handleChange}
          ></input>
         <label>Comment</label>
          <input
            type="text"
            name = "comments"
            aria-label='comments'
            value={reviewData.comments}
            onChange={handleChange}
          ></input>
          <input type="submit"/>
      </form>
  )
}

export default ReviewForm
