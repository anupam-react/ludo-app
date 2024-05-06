import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";

const useGuestUsers = () => {
    const [allGuestUsers, setAllGuestUsers] = useState([]);
    const getUserData = async () => {
        const userData = await fetchApiData(
            "https://jagjeetludo-backend.vercel.app/api/v1/admin/guestUserList"
        );
        setAllGuestUsers(userData?.data);
    
    };

    useEffect(() => {
        getUserData()
    }, [])
    return {
        allGuestUsers,
    };
};

export default useGuestUsers;
