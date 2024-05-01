import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";

const useUserList = () => {
    const [allUsers, setAllUsers] = useState([]);
    const getUserData = async () => {
        const userData = await fetchApiData(
            "https://jagjeetludo-backend.vercel.app/api/v1/admin/userList"
        );
        setAllUsers(userData?.data);
    };

    useEffect(() => {
        getUserData()
    }, [])
    return {
        allUsers
    };
};

export default useUserList;
