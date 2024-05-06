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
                <p onClick={() => navigate('/facebook-users')}>Facebook Users</p>
                <p onClick={() => navigate('/google-users')}>Google Users</p>
                <p onClick={() => navigate('/item-purchased')}>Items Purchased</p>
                <p onClick={() => navigate('/total-widthdrawals')}>Total Withdrawals </p>
                <p onClick={() => navigate('/total-referrals')}>Total Referrals </p>
                <p onClick={() => navigate('/todays-deposits')}>Total Deposit</p>
                <p onClick={() => navigate('/monthly-deposits')}>Monthly Deposits</p>
                <p onClick={() => navigate('/todays-bonus')}>Today’s Bonus </p>
                <p onClick={() => navigate('/guest-users')}>Guest Users </p>
                <p onClick={() => navigate('/monthly-winners')}>Monthly Winners</p>
                <p onClick={() => navigate('/daily-winners')}>Daily Winners </p>
                {/* <p onClick={() => navigate('/about')}>About Us</p> */}
            </div>
        </div>
    )
}

export default Sidebar