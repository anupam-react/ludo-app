import React from 'react'
import Tableheader from '../common/Tableheader'
import './allusers.scss'
import useReffrals from '../../hooks/useReffrals'
const TotalReferrals = () => {
    const { allReffrals } = useReffrals()

    return (
        <div className='user-container'>
            <Tableheader title="Total Referrals" />
            <div className='table-container'>
                <table className="customers">
                    <tr>
                        <th>Username</th>
                        <th>Number of Referrals</th>
                        <th>Through</th>
                    </tr>
                    {allReffrals?.map((data, i) => (
                        <tr key={i}>
                            <td>{data?.user?.firstName + " " + data?.user?.lastName}</td>
                            <td>{data?.noOfRefferal}</td>
                            <td>{data?.user?.refferalCode}</td>
                        </tr>
                    ))}




                </table>
            </div>

        </div>
    )
}

export default TotalReferrals