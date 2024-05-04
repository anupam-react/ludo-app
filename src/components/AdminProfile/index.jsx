import React from "react";
import "./admin.scss";
import UpdateProfile from "./UpdateProfile";

const AdminProfile = () => {
  return (
    <div className="admin-container">
      <div className="admin-header">
        <span>Admin Profile</span>
        <div className="header-buttons">
          <UpdateProfile />
          <button>Logout</button>
        </div>
      </div>
      <div className="image-container">
        <img
          src="../Ellipse 68.png"
          alt=""
          style={{ width: "80px", height: "80px" }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div style={{ fontWeight: 500 }}>Admin</div>
          <div style={{ color: "#9CE825", fontSize: "12px" }}>
            Complete Profile
          </div>
          <button>admin</button>
        </div>
      </div>
      <div className="form-container2">
        <div>
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Phone Number</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Alternate Phone Number</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Gender</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">DOB</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Address</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Admin Cash Deposit</label>
          <input type="text" />
        </div>
      </div>

      <div className="close-button">
        <button>Close</button>
      </div>
    </div>
  );
};

export default AdminProfile;
