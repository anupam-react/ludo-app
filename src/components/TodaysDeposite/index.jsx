import React from 'react'
import './allusers.scss'
import useUserList from '../../hooks/useUserList'
import TodaysTableheader from '../common/TodaysTableheader'
const TodaysDeposite = () => {
    const { allUsers } = useUserList()
    console.log(allUsers)
    return (
        <div className='user-container'>
            <TodaysTableheader title="Today’s Deposit" />
            <div className='table-container'>
                <table className="customers">
                    <tr>
                        <th>Username</th>
                        <th>Deposite Amount</th>
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

export default TodaysDeposite