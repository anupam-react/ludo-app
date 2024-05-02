import React from 'react'
import Tableheader from '../common/Tableheader'
import './allusers.scss'
import useUserList from '../../hooks/useUserList'
const TotalWithdrawals = () => {
    const { allUsers } = useUserList()
    console.log(allUsers)
    return (
        <div className='user-container'>
            <Tableheader title="Total Withdrawals" />
            <div className='table-container'>
                <table className="customers">
                    <tr>
                        <th>Username</th>
                        <th>Withdrawal Amount</th>
                        <th>Last Withdrawal Date</th>
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

export default TotalWithdrawals