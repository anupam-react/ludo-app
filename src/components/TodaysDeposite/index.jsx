import React from 'react'
import './allusers.scss'
import TodaysTableheader from '../common/TodaysTableheader'
import useTodayDeposite from '../../hooks/useTodayDeposite'
import { getTime } from '../../utiils'
const TodaysDeposite = () => {
    const { allDeposite } = useTodayDeposite()
  
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
                    {allDeposite?.map((data, i) => (
                        <tr key={i}>
                            <td>{data?.user?.firstName + " " + data?.user?.lastName}</td>
                            <td>${data?.amount}</td>
                            <td>{getTime(data?.date)}</td>
                        </tr>
                    ))}
                </table>
            </div>

        </div>
    )
}

export default TodaysDeposite