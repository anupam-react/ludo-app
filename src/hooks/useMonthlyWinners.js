import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";

const useMonthlyWinners = () => {
    const [allMonthlyWinners, setAllMonthlyWinners] = useState([]);
    const getUserData = async () => {
        const userData = await fetchApiData(
            "https://jagjeetludo-backend.vercel.app/api/v1/admin/monthlyWinnerContestlist"
        );
        console.log(userData)
        setAllMonthlyWinners(userData?.data);
    
    };

    useEffect(() => {
        getUserData()
    }, [])
    return {
        allMonthlyWinners,
    };
};

export default useMonthlyWinners;
