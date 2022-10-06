import React, {useState, useEffect} from 'react'
import { useParams ,useHistory } from 'react-router-dom'


const ReviewForm = () => {
    const reviewInitial = {
        time:"",
        comments:"",
      }
    
    const [reviewData, setReviewData] = useState(reviewInitial)
    
    
    const {patientId} = useParams()

    const Id = useParams().id

    const history = useHistory()
    
    const handleChange = (e) => {
        setReviewData({...reviewData,[e.target.name]:e.target.value})
     }

    const handleSubmitReview = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9292/review/${patientId}/post`, {
          method: "POST",
          headers:{
            "content-type":"application/json"
          },
          body: JSON.stringify(reviewData)
        })
        history.push("/reviews")
    
    }
  

  return (
      <div>
         <h2>Write review </h2>
      <form onSubmit={handleSubmitReview}>
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
      </div>
  )
}

export default ReviewForm
