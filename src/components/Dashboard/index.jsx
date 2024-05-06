import React from "react";
import "./dashboard.scss";
import Card from "./Card";
import useUserList from "../../hooks/useUserList";
import useWithdrawals from "../../hooks/useWithdrawals";
import { getDate, getTime } from "../../utiils";
const Dashboard = () => {
  const { leatestUsers } = useUserList();
  const { leatestWithdrawals } = useWithdrawals();

  const cardData = [
    { image: "./el_user.png", title: "TOTAL USERS ", link: "allusers" },
    {
      image: "./devicon_facebook.png",
      title: "FACEBOOK USERS ",
      link: "facebook-users",
    },
    {
      image: "./devicon_google.png",
      title: "GOOGLE USERS ",
      link: "google-users",
    },
    {
      image: "./game-icons_shop.png",
      title: "ITEMS PURCHASED ",
      link: "item-purchased",
    },
    {
      image: "./grommet-icons_money.png",
      title: "TOTAL WITHDRAWALS ",
      link: "total-widthdrawals",
    },
    {
      image: "./fa-solid_handshake.png",
      title: "TOTAL REFERRALS ",
      link: "total-referrals",
    },
    {
      image: "./ph_hand-deposit-fill.png",
      title: "TOTAL DEPOSITS ",
      link: "todays-deposits",
    },
    {
      image: "./ri_luggage-deposit-fill.png",
      title: "MONTHLY DEPOSITS ",
      link: "monthly-deposits",
    },
    {
      image: "./healthicons_money-bag-negative.png",
      title: "TODAY’S BONUS ",
      link: "todays-bonus",
    },
    {
      image: "./zondicons_user.png",
      title: "GUEST USERS ",
      link: "guest-users",
    },
  ];
  return (
    <div className="">
      <div className="dashboard-conatiner">
        <div style={{ color: "#575654", fontSize: "30px", fontWeight: 500 }}>
          Dashboard
        </div>
        <div className="card-main">
          {cardData?.map((data, i) => (
            <div key={i}>
              <Card image={data?.image} title={data?.title} link={data?.link} />
            </div>
          ))}
        </div>
      </div>
      <hr style={{ margin: "10px 0px", background: "#5B5B5B" }} />
      <div className="leatest-container">
        <div className="dashboard-conatiner">
          <div style={{ color: "#0D0C0A", fontSize: "30px", fontWeight: 500 }}>
            Latest Users Added
          </div>
          <div className="leatest-user-container">
            {leatestUsers?.map((data, i) => (
              <div className="leatest-user">
                <img
                  src={data?.profilePic}
                  alt=""
                  style={{
                    borderRadius: "50px",
                    width: "40px",
                    height: "40px",
                  }}
                />
                <p>{data?.mobileNumber}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="dashboard-conatiner1">
          <div style={{ color: "#0D0C0A", fontSize: "30px", fontWeight: 500 }}>
            Latest Withdrawals
          </div>
          <div className="table-container2">
            <table className="customers2">
              <tr>
                <th>Username</th>
                <th>Withdrawal Amount</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
              {leatestWithdrawals?.map((data, i) => (
                <tr key={i}>
                  <td>{data?.user?.firstName + " " + data?.user?.lastName}</td>
                  <td>{data?.amount}</td>
                  <td>{getDate(data?.date)}</td>
                  <td>{getTime(data?.date)}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
