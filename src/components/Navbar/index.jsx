import React, { useEffect, useState } from 'react'
import './navbar.scss'
import { useNavigate } from 'react-router-dom'
import { fetchApiData } from '../../utiils';
const Navbar = () => {
    const navigate = useNavigate('');
    const [userInfo, setUserInfo] = useState();

    const getUserData = async () => {
        const userData = await fetchApiData(
            "https://jagjeetludo-backend.vercel.app/api/v1/admin/getProfile"
        );
        setUserInfo(userData?.data);
    
    };

    useEffect(() => {
        getUserData()
    }, [])
    return (
        <div className='navbar-container'>
            <div className='search'>
                <input type="text" name="" id="" placeholder='Search' />
                <img src="../tabler_search.png" alt="" className='search-icon' />
            </div>
            <img src={userInfo?.profilePic} alt="" className='user-image' onClick={()=> navigate('/profile')}/>
        </div>
    )
}

export default Navbar