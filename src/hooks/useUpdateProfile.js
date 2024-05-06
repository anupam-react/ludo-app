import { useState } from "react";
import { updateApiData } from "../utiils";
import { useNavigate } from "react-router-dom";
import { successToast } from "../Toast";

const useUpdateProfile = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [alternateMobile, setalternateMobile] = useState("");
  const [gender, setGender] = useState("male");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [image, setImage] = useState();

  const navigate = useNavigate('/')


  const handleUpdate = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('firstName', fname);
    formData.append('lastName', lname);
    formData.append('mobileNumber', mobile);
    formData.append('email', email);
    formData.append('alternatemobileNumber', alternateMobile);
    formData.append('dob', dob);
    formData.append('gender', gender);
    formData.append('address', address);
    formData.append('image', image);

    try {
      const response = await updateApiData(
        "https://jagjeetludo-backend.vercel.app/api/v1/admin/updateProfile",
        formData
      );
      successToast("Update Profile Successfully");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
     
      return error;
    }
  };

  return {
    fname, setFName,
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
  };
};

export default useUpdateProfile;
