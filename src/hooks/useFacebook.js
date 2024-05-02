import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";

const useFacebook = () => {
    const [allFacebookUsers, setAllFacebookUsers] = useState([]);
    const [allGoogleUsers, setAllGoogleUsers] = useState([]);
    const getUserData = async () => {
        const userData = await fetchApiData(
            "https://jagjeetludo-backend.vercel.app/api/v1/admin/userList"
        );
        console.log(userData?.data)
        const facebookData = userData?.data?.filter((data)=> data?.socialType==="Facebook");
        const googleData = userData?.data?.filter((data)=> data?.socialType==="Google");
        console.log(facebookData)
        console.log(googleData)
        setAllFacebookUsers(facebookData);
        setAllGoogleUsers(googleData)
    };

    useEffect(() => {
        getUserData()
    }, [])
    return {
        allFacebookUsers,
        allGoogleUsers
    };
};

export default useFacebook;
