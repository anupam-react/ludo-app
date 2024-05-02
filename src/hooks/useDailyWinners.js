import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";

const useDailyWinners = () => {
    const [allDailyWinnersUsers, setAllDailyWinnersUsers] = useState([]);
    const getUserData = async () => {
        const userData = await fetchApiData(
            "https://jagjeetludo-backend.vercel.app/api/v1/admin/winner/dailyWinnerContestlist"
        );
        console.log(userData)
        setAllDailyWinnersUsers(userData?.data);
    
    };

    useEffect(() => {
        getUserData()
    }, [])
    return {
        allDailyWinnersUsers,
    };
};

export default useDailyWinners;
