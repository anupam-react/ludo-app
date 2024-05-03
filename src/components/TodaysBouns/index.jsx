import React from 'react'
import './allusers.scss'
import useUserList from '../../hooks/useUserList'
import TodaysTableheader from '../common/TodaysTableheader'
const TodaysBouns = () => {
    const { allUsers } = useUserList()
    console.log(allUsers)
    return (
        <div className='user-container'>
            <TodaysTableheader title="Today’s Bonus" />
            <div className='table-container'>
                <table className="customers">
                    <tr>
                        <th>Username</th>
                        <th>Bonus Amount</th>
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

export default TodaysBouns