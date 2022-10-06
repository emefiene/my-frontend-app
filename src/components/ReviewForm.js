import React, {useState, useEffect} from 'react'
import { useParams  } from 'react-router-dom'


const ReviewForm = () => {
    const reviewInitial = {
        time:"",
        comments:"",
      }
    const [data, setData] = useState(null)
    const [reviewData, setReviewData] = useState(reviewInitial)
    const [reviews, setReviews] = useState([])
    
    const {patientId} = useParams()
    const Id = useParams().id

    useEffect(() => {
        fetch(`http://localhost:9292/patients/${patientId}`)
        .then(res => res.json())
        .then(data => {
            
            setData(data)
        })

    }, [])
    
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
         .then(res => res.json())
        //  .then(data => {
        //    setReviewData([data,...reviews])
        //  })
        //  setReviewData(reviewInitial)
       }
  

  return (
      <div>
         <h2>Write review</h2>
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
