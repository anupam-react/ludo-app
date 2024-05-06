import React from 'react'
import './allusers.scss'
import TodaysTableheader from '../common/TodaysTableheader'
import useTodaysBonus from '../../hooks/useTodaysBonus'
import { getTime } from '../../utiils'
const TodaysBouns = () => {
    const { allTodaysBouns } = useTodaysBonus()
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
                    {allTodaysBouns?.map((data, i) => (
                        <tr key={i}>
                            <td>{data?.user?.firstName + " " + data?.user?.lastName}</td>
                            <td>{data?.amount}</td>
                            <td>{getTime(data?.updatedAt)}</td>
                        </tr>
                    ))}
                </table>
            </div>

        </div>
    )
}

export default TodaysBouns