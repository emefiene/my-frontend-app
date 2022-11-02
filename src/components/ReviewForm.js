import React, { useState } from 'react'
import { useParams ,useHistory } from 'react-router-dom'
import styled from "styled-components"


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
          <Card>
               <img className='img' src='https://plos.org/wp-content/uploads/2020/05/Person-writing-by-laptop_Pixabay_CC0-e1512515354936.jpg' alt='logo'></img>
               <h2 style={{textAlign: "center"}}>Your feed back is important to us.. </h2>
              <form className='form' onSubmit={handleSubmitReview}>
                  <label>Time</label>
                  <input
                      className='time'
                      type="datetime-local"
                      name = "time"
                      aria-label='time'
                      value={reviewData.time}
                      onChange={handleChange}
                  ></input>
                  <label>Comment</label>
                  <textarea
                      className='input'
                      name = "comments"
                      aria-label='comments'
                      value={reviewData.comments}
                      onChange={handleChange}
                  ></textarea>
                  <input className="sub" type="submit"/>
               </form>
           </Card>
    </div>
  )
}

export default ReviewForm

const Card = styled.div`
background-color: AliceBlue;
box-shadow: 4px 4px 8px 0px rgb(0, 0,0,0.2);


 .input {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    text-align: left;
    width: 700px;
    line-height:100px;
    margin-bottom: 10px;
  }
  
  .time{
    width: 350px;
    line-height:20px;
    margin-bottom: 10px;
  }

  .img{
    
    width: 200px;
    height: 200px;
    padding: 20px;
 
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
   }
   
   .form { 
    margin: 0 auto; 
    width:770px;
    }

    .sub:hover {
        box-shadow: 0 0 10px #0099ff;
        font-weight: bold;
        color: black;
        
    }
    .sub{
        width: 150px;
        line-height:50px;
        margin-bottom: 350px; 
    }

`

 
  
