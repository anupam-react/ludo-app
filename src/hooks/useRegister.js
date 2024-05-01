import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../Toast";

const useRegister = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate();


  const handleRegister = async (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !email || !phone || !password) {
      return errorToast("Fill all the fields");
    }
    if (password.length > 8) {
      return errorToast("password atleast 8 characters");
    }
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email,
      mobileNumber: phone,
      password,
    };
    console.log(formData);

    try {
      const response = await axios.post(
        "https://jagjeetludo-backend.vercel.app/api/v1/admin/registration",
        formData
      );
      successToast("Register Successfully");
      navigate("/");
      setFirstName("");
      setPhone("");
      setEmail("");
      setPassword("");
      setLastName("");
    } catch (error) {
      console.log(error);
      errorToast(error.message);
      return error;
    }
  };
  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phone,
    setPhone,
    email,
    setEmail,
    password,
    setPassword,
    handleRegister,
  };
};

export default useRegister;
