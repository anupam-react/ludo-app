import React from "react";
import Tableheader from "../common/Tableheader";
import "./allusers.scss";
import useWithdrawals from "../../hooks/useWithdrawals";
import { getDate } from "../../utiils";
const TotalWithdrawals = () => {
  const { allWithdrawals } = useWithdrawals();
  return (
    <div className="user-container">
      <Tableheader title="Total Withdrawals" />
      <div className="table-container">
        <table className="customers">
          <tr>
            <th>Username</th>
            <th>Withdrawal Amount</th>
            <th>Last Withdrawal Date</th>
          </tr>
          {allWithdrawals?.map((data, i) => (
            <tr key={i}>
              <td>{data?.user?.firstName + " " + data?.user?.lastName}</td>
              <td>{data?.amount}</td>
              <td>{getDate(data?.date)}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default TotalWithdrawals;
