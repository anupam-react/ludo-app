import React from 'react'
import './tablehead.scss'
const MonthlyTableheader = ({ title }) => {
    return (
        <div className='tablehead-container'>
            <div className='title-main'>
            <p className='title'>{title}</p>
            <img src="../Vector.png" alt="" style={{height:"fit-content"}}/>
            </div>
          
            <div className='search'>
                <input type="text" name="" id="" placeholder='' />
                <img src="../tabler_search.png" alt="" className='search-icon' />
            </div>
        </div>
    )
}

export default MonthlyTableheader