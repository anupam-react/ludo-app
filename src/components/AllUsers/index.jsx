import React from 'react'
import Tableheader from '../common/Tableheader'
import './allusers.scss'
import useUserList from '../../hooks/useUserList'
const AllUsers = () => {
    const { allUsers } = useUserList()
    console.log(allUsers)
    return (
        <div className='user-container'>
            <Tableheader title="All Users" />
            <div className='table-container'>
                <table className="customers">
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Facebook</th>
                        <th>Mobile No.</th>
                        <th>Withdrawals</th>
                        <th>Deposits</th>
                        <th>Referrals</th>
                    </tr>
                    {allUsers?.map((data, i) => (
                        <tr key={i}>
                            <td>{data?.firstName + " " + data?.lastName}</td>
                            <td>{data?.email}</td>
                            <td>{data?.socialId}</td>
                            <td>{data?.mobileNumber}</td>
                            <td>${data?.withdraw}</td>
                            <td>${data?.deposite}</td>
                            <td>{data?.joinUser?.length}</td>
                        </tr>
                    ))}




                </table>
            </div>

        </div>
    )
}

export default AllUsers