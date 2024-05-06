import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";

const useTodayDeposite = () => {
    const [allDeposite, setAllDeposite] = useState([]);
    const getUserData = async () => {
        const userData = await fetchApiData(
            "https://jagjeetludo-backend.vercel.app/api/v1/admin/dailyDeposittList"
        );
        setAllDeposite(userData?.data);
    
    };

    useEffect(() => {
        getUserData()
    }, [])
    return {
        allDeposite,
    };
};

export default useTodayDeposite;
