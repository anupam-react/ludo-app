import React from 'react'
import './allusers.scss'
import MonthlyTableheader from '../common/MonthlyTableheader'
import useMonthlyDeposite from '../../hooks/useMonthlyDeposite'
import { getDate, getTime } from '../../utiils'
const MonthlyDeposite = () => {
    const { allDeposite } = useMonthlyDeposite()
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
                    {allDeposite?.map((data, i) => (
                        <tr key={i}>
                            <td>{data?.user?.firstName + " " + data?.user?.lastName}</td>
                            <td>${data?.amount}</td>
                            <td>{getDate(data?.date)}</td>
                            <td>{getTime(data?.date)}</td>
                        </tr>
                    ))}
                </table>
            </div>

        </div>
    )
}

export default MonthlyDeposite