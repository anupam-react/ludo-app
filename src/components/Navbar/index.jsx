import React from 'react'
import './navbar.scss'
const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='search'>
                <input type="text" name="" id="" placeholder='Search' />
                <img src="../tabler_search.png" alt="" className='search-icon' />
            </div>
            <img src="../Ellipse 67.png" alt="" className='user-image' />
        </div>
    )
}

export default Navbar