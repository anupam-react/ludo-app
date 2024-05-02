import React from 'react'
import Tableheader from '../common/Tableheader'
import './allusers.scss'
import useFacebook from '../../hooks/useFacebook'
const GoogleUser = () => {
    const { allGoogleUsers } = useFacebook()
    console.log(allGoogleUsers)
    return (
        <div className='user-container'>
            <Tableheader title="Google Users" />
            <div className='table-container'>
                <table className="customers">
                    <tr>
                        <th>Username</th>
                        <th>Withdrawals</th>
                        <th>Deposits</th>
                        <th>Referrals</th>
                    </tr>
                    {allGoogleUsers?.map((data, i) => (
                        <tr key={i}>
                            <td>{data?.firstName + " " + data?.lastName}</td>
                            <td>{data?.wallet}</td>
                            <td>${data?.deposite}</td>
                            <td>{data?.joinUser?.length}</td>
                        </tr>
                    ))}




                </table>
            </div>

        </div>
    )
}

export default GoogleUser