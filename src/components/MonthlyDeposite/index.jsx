import React from 'react'
import './allusers.scss'
import useUserList from '../../hooks/useUserList'
import MonthlyTableheader from '../common/MonthlyTableheader'
const MonthlyDeposite = () => {
    const { allUsers } = useUserList()
    console.log(allUsers)
    return (
        <div className='user-container'>
            <MonthlyTableheader title="Monthly Deposit" />
            <div className='table-container'>
                <table className="customers">
                    <tr>
                        <th>Username</th>
                        <th>Deposite Amount</th>
                        <th>Date</th>
                        <th>Time</th>
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

export default MonthlyDeposite