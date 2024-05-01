import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../Toast";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  const handleLogin = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      return errorToast("Fill all the fields");
    }
    console.log(email, password);
    const formData = {
      email,
      password,
    };
    try {
      const response = await axios.post(
        "https://jagjeetludo-backend.vercel.app/api/v1/admin/signin",
        formData
      );
      console.log(response?.data);
      successToast("LogIn Successfully");
      sessionStorage.setItem("token", response?.data?.accessToken);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      errorToast("Wrong email or password");
      return error;
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
  };
};

export default useLogin;
