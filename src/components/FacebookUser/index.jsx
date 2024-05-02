import React from 'react'
import Tableheader from '../common/Tableheader'
import './allusers.scss'
import useFacebook from '../../hooks/useFacebook'
const FacebookUser = () => {
    const { allFacebookUsers } = useFacebook()
    console.log(allFacebookUsers)
    return (
        <div className='user-container'>
            <Tableheader title="Facebook Users" />
            <div className='table-container'>
                <table className="customers">
                    <tr>
                        <th>Username</th>
                        <th>Withdrawals</th>
                        <th>Deposits</th>
                        <th>Referrals</th>
                    </tr>
                    {allFacebookUsers?.map((data, i) => (
                        <tr key={i}>
                            <td>{data?.firstName + " " + data?.lastName}</td>
                            <td>{data?.wallet}</td>
                            <td>${data?.deposite}</td>
                            <td>{data?.joinUser?.length}</td>
                        </tr>
                    ))}




                </table>
            </div>

        </div>
    )
}

export default FacebookUser