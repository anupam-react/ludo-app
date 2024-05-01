import React from 'react'
import './sidebar.scss'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
    const navigate = useNavigate('')
    return (
        <div className='sidebar-container'>
            <p className='header'>Admin</p>
            <div className='list-container'>
                <p onClick={() => navigate('/dashboard')}>Dashboard</p>
                <p onClick={() => navigate('/allusers')}>All Users</p>
                <p>Facebook Users</p>
                <p>Google Users</p>
                <p>Items Purchased</p>
                <p>Total Withdrawals </p>
                <p>Total Referrals </p>
                <p>Total Deposits</p>
                <p>Monthly Deposits</p>
                <p>Today’s Bonus </p>
                <p>Guest Users </p>
                <p>Monthly Winners</p>
                <p>Daily Winners </p>
                <p>About Us</p>
            </div>
        </div>
    )
}

export default Sidebar