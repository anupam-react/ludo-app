import React from 'react'
import './tablehead.scss'
const TodaysTableheader = ({ title }) => {
    return (
        <div className='tablehead-container'>
            <div className='title-main'>
            <p className='title'>{title}</p>
         <div className='date-container'>
         dd-mm-yyyy
         </div>
            </div>
          
            <div className='search'>
                <input type="text" name="" id="" placeholder='' />
                <img src="../tabler_search.png" alt="" className='search-icon' />
            </div>
        </div>
    )
}

export default TodaysTableheader