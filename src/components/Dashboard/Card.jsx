import React from 'react'
import './dashboard.scss'
import { useNavigate } from 'react-router-dom'
const Card = ({image, title , link}) => {
    const navigate = useNavigate('')
  return (
    <div className='card-container' onClick={()=> navigate(`/${link}`)}>
        <img src={image} alt="" />
        <p style={{color:"#288EE8"}}>{title}</p>
    </div>
  )
}

export default Card