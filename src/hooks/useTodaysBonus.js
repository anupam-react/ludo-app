import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";

const useTodaysBonus = () => {
    const [allTodaysBouns, setAllTodaysBouns] = useState([]);
    const getUserData = async () => {
        const userData = await fetchApiData(
            "https://jagjeetludo-backend.vercel.app/api/v1/admin/bonusList"
        );
        setAllTodaysBouns(userData?.data);
    
    };

    useEffect(() => {
        getUserData()
    }, [])
    return {
        allTodaysBouns,
    };
};

export default useTodaysBonus;
