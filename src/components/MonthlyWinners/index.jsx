import React from 'react'
import './allusers.scss'
import MonthlyTableheader from '../common/MonthlyTableheader'
import useMonthlyWinners from '../../hooks/useMonthlyWinners'
import { getDate, getTime } from '../../utiils'
const MonthlyWinners = () => {
    const { allMonthlyWinners } = useMonthlyWinners()

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
                            <td>{data?.winner?.firstName + " " + data?.winner?.lastName}</td>
                            <td>{getDate(data?.updatedAt)}</td>
                            <td>{getTime(data?.updatedAt)}</td>
                            <td>${data?.firstPrize}</td>
                        </tr>
                    ))}
                </table>
            </div>

        </div>
    )
}

export default MonthlyWinners