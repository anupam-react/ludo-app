import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";

const useProfile = () => {
    const [userInfo, setUserInfo] = useState();

    const getUserData = async () => {
        const userData = await fetchApiData(
            "https://jagjeetludo-backend.vercel.app/api/v1/admin/getProfile"
        );
        setUserInfo(userData?.data);
    
    };

    useEffect(() => {
        getUserData()
    }, [])
    return {
        userInfo,
    };
};

export default useProfile;
