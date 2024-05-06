import React from "react";
import "./admin.scss";
import UpdateProfile from "./UpdateProfile";
import { useNavigate } from "react-router-dom";
import useProfile from "../../hooks/useProfile";

const AdminProfile = () => {
  const navigate = useNavigate('');
  const {userInfo}= useProfile()

  const handleLogOut = ()=>{
    sessionStorage.removeItem('token');
    navigate('/')
  }
  return (
    <div className="admin-container">
      <div className="admin-header">
        <span>Admin Profile</span>
        <div className="header-buttons">
          <UpdateProfile userInfo={userInfo}/>
          <button onClick={handleLogOut}>Logout</button>
        </div>
      </div>
      <div className="image-container">
        <img
          src={userInfo?.profilePic}
          alt=""
          style={{ width: "80px", height: "80px" , borderRadius:"50px"}}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div style={{ fontWeight: 500 }}>{userInfo?.firstName + " " + userInfo?.lastName}</div>
          <div style={{ color: "#9CE825", fontSize: "12px" }}>
            Complete Profile
          </div>
          <button>admin</button>
        </div>
      </div>
      <div className="form-container2">
        <div>
          <label htmlFor="">Email</label>
          <input type="text" value={userInfo?.email}/>
        </div>
        <div>
          <label htmlFor="">Phone Number</label>
          <input type="text" value={userInfo?.mobileNumber}/>
        </div>
        <div>
          <label htmlFor="">Alternate Phone Number</label>
          <input type="text" value={userInfo?.alternatemobileNumber}/>
        </div>
        <div>
          <label htmlFor="">Gender</label>
          <input type="text" value={userInfo?.gender}/>
        </div>
        <div>
          <label htmlFor="">DOB</label>
          <input type="text" value={userInfo?.dob}/>
        </div>
        <div>
          <label htmlFor="">Address</label>
          <input type="text" value={userInfo?.address}/>
        </div>
        <div>
          <label htmlFor="">Admin Cash Deposit</label>
          <input type="text" value={userInfo?.wallet}/>
        </div>
      </div>

      <div className="close-button"  onClick={()=>navigate('/dashboard')}>
        <button>Close</button>
      </div>
    </div>
  );
};

export default AdminProfile;
