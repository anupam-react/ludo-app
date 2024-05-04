import React from 'react'
import './navbar.scss'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate('')
    return (
        <div className='navbar-container'>
            <div className='search'>
                <input type="text" name="" id="" placeholder='Search' />
                <img src="../tabler_search.png" alt="" className='search-icon' />
            </div>
            <img src="../Ellipse 67.png" alt="" className='user-image' onClick={()=> navigate('/profile')}/>
        </div>
    )
}

export default Navbar