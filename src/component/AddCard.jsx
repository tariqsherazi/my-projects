import React from 'react'
import { Link } from 'react-router-dom'

const AddCard = () => {
  return (
    <>
    <Link to="/Video" style={{textDecoration:"none"}}>
    <div class="card">
  <div class="thumbnail">
    <img src='1.jpg' width='200px' height='120px'/>
  </div>
  
  <div class="details">
    <h2 class="title">Video Title</h2>
    <p class="description">Video Description</p>
    <span class="channel">Channel Name</span>
    <span class="views">Views Count</span>
  </div>
</div>
</Link>
</>
  )
}

export default AddCard