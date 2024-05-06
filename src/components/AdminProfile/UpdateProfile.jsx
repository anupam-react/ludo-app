import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./admin.scss";
import useUpdateProfile from "../../hooks/useUpdateProfile";
const UpdateProfile = ({userInfo}) => {
  const {
    fname,
    setFName,
    lname,
    setLName,
    email,
    setEmail,
    mobile,
    setMobile,
    alternateMobile,
    setalternateMobile,
    gender,
    setGender,
    address,
    setAddress,
    dob,
    setDob,
    image,
    setImage,
    handleUpdate
  } = useUpdateProfile();
  console.log(image);

  return (
    <div>
      <Popup trigger={<button>Update Profile</button>} modal nested>
        {(close) => (
          <div className="modal">
            <div className="modal-container">
              <div style={{ fontSize: "24px", fontWeight: 500 }}>
                Update Admin Profile
              </div>
              <div>
                <img
                  src="../gridicons_cross.png"
                  alt=""
                  onClick={() => close()}
                  style={{ width: "30px", height: "30px", cursor: "pointer" }}
                />
              </div>
            </div>

            <div className="image-main">
              <div className="image-conatiner1">
                <img src={image?.name || userInfo?.profilePic} alt={image?.name} accept="image/*" />
              </div>
              <div>
                <input
                  type="file"
                  id="actual-btn"
                  style={{ display: "none" }}
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <label for="actual-btn">Browse</label>
              </div>
            </div>
            <div className="form-container3">
              <div>
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  value={fname || userInfo?.firstName}
                  onChange={(e) => setFName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  value={lname  || userInfo?.lastName}
                  onChange={(e) => setLName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  value={email || userInfo?.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="">Mobile Number</label>
                <input
                  type="text"
                  value={mobile || userInfo?.mobileNumber}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="">Alternate Mobile Number</label>
                <input
                  type="text"
                  value={alternateMobile || userInfo?.alternatemobileNumber}
                  onChange={(e) => setalternateMobile(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="">Gender</label>
                <select
                  name="gender"
                  id="gender"
                  value={gender || userInfo?.gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  value={address || userInfo?.address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="">DOB</label>
                <input
                  type="text"
                  value={dob || userInfo?.dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
            </div>
            <div className="button-conatiner1" onClick={handleUpdate}>
              <button>Update</button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default UpdateProfile;
