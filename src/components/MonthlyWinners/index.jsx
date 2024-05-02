import React from 'react'
import './allusers.scss'
import MonthlyTableheader from '../common/MonthlyTableheader'
import useMonthlyWinners from '../../hooks/useMonthlyWinners'
const MonthlyWinners = () => {
    const { allMonthlyWinners } = useMonthlyWinners()
    console.log(allMonthlyWinners)
    return (
        <div className='user-container'>
            <MonthlyTableheader title="Monthly Winners " />
            <div className='table-container'>
                <table className="customers">
                    <tr>
                        <th>Username</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Winning Amount</th>
                    </tr>
                    {allMonthlyWinners?.map((data, i) => (
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

export default MonthlyWinners