import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";

const useUserList = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [leatestUsers, setLeatestUsers] = useState([]);
    const getUserData = async () => {
        const userData = await fetchApiData(
            "https://jagjeetludo-backend.vercel.app/api/v1/admin/userList"
        );
        setAllUsers(userData?.data);
        const leatestTenUsers = userData?.data?.slice(Math.max(userData?.data?.length - 10, 0));
        setLeatestUsers(leatestTenUsers)
    };

    useEffect(() => {
        getUserData()
    }, [])
    return {
        allUsers,
        leatestUsers
    };
};

export default useUserList;
