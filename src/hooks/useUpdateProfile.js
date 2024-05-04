import { useState } from "react";


const useUpdateProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [image, setImage] = useState();

  return {
    name,
    setName,
    email,
    setEmail,
    mobile,
    setMobile,
    gender,
    setGender,
    address,
    setAddress,
    dob,
    setDob,
    image,
    setImage,
  };
};

export default useUpdateProfile;
