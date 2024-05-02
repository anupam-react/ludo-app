import React from 'react'
import Tableheader from '../common/Tableheader'
import './allusers.scss'
import useDailyWinners from '../../hooks/useDailyWinners'
const DailyWinners  = () => {
    const { allDailyWinnersUsers } = useDailyWinners()
    console.log(allDailyWinnersUsers)
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

export default DailyWinners 