import React from 'react'
import Tableheader from '../common/Tableheader'
import './allusers.scss'
import useDailyWinners from '../../hooks/useDailyWinners'
import { getTime } from '../../utiils'
const DailyWinners  = () => {
    const { allDailyWinnersUsers } = useDailyWinners()
    return (
        <div className='user-container'>
            <Tableheader title="Daily Winners " />
            <div className='table-container'>
                <table className="customers">
                    <tr>
                        <th>Username</th>
                        <th>Time</th>
                        <th>Winning Amount</th>
                    </tr>
                    {allDailyWinnersUsers?.map((data, i) => (
                        <tr key={i}>
                            <td>{data?.winner?.firstName + " " + data?.winner?.lastName}</td>
                            <td>{getTime(data?.updatedAt)}</td>
                            <td>${data?.firstPrize}</td>
                        </tr>
                    ))}




                </table>
            </div>

        </div>
    )
}

export default DailyWinners 