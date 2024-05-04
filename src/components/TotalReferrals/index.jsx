import React from 'react'
import Tableheader from '../common/Tableheader'
import './allusers.scss'
import useUserList from '../../hooks/useUserList'
const TotalReferrals = () => {
    const { allUsers } = useUserList()
    console.log(allUsers)
    return (
        <div className='user-container'>
            <Tableheader title="Total Referrals" />
            <div className='table-container'>
                <table className="customers">
                    <tr>
                        <th>Username</th>
                        <th>Number of Referrals</th>
                        <th>Through</th>
                    </tr>
                    {allUsers?.map((data, i) => (
                        <tr key={i}>
                            <td>{data?.firstName + " " + data?.lastName}</td>
                            <td>{data?.wallet}</td>
                            <td>${data?.deposite}</td>
                        </tr>
                    ))}




                </table>
            </div>

        </div>
    )
}

export default TotalReferrals