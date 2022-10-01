import React, {useState} from 'react'

const ReviewForm = () => {
   const [reviewData, setReviewData] = useState()


   const handleChange = (e) => {
      setReviewData({...reviewData,[e.target.name]:e.target.value})
   }

  return (
    <div>
      <form>
         <label>Name</label>
           <input
           type="text"
           name = "patient_id"
           aria-label='patient_id'
           onChange={handleChange}
          ></input>
          <label>Time</label>
          <input
            type="datetime"
            name = "time"
            aria-label='time'
            onChange={handleChange}
          ></input>
         <label>Comment</label>
          <input
            type="text"
            name = "comments"
            aria-label='comments'
            onChange={handleChange}
          ></input>
      </form>
    </div>
  )
}

export default ReviewForm
