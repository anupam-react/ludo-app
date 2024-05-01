import React from 'react'
import './tablehead.scss'
const Tableheader = ({ title }) => {
    return (
        <div className='tablehead-container'>
            <p className='title'>{title}</p>
            <div className='search'>
                <input type="text" name="" id="" placeholder='' />
                <img src="../tabler_search.png" alt="" className='search-icon' />
            </div>
        </div>
    )
}

export default Tableheader