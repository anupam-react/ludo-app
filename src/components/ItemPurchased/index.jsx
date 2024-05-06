import React from "react";
import Tableheader from "../common/Tableheader";
import "./allusers.scss";
const ItemPurchased = () => {
//   const { allUsers } = useWithdrawals();
//   console.log(allUsers);
  return (
    <div className="user-container">
      <Tableheader title="Items Purchased " />
      <div className="table-container">
        <table className="customers">
          <tr>
            <th>Username</th>
            <th>Item Name</th>
            <th>Item Worth</th>
          </tr>
          {/* {allUsers?.map((data, i) => (
            <tr key={i}>
              <td>{data?.firstName + " " + data?.lastName}</td>
              <td>{data?.wallet}</td>
              <td>${data?.deposite}</td>
            </tr>
          ))} */}
        </table>
      </div>
    </div>
  );
};

export default ItemPurchased;
