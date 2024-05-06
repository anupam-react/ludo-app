import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";

const useWithdrawals = () => {
    const [allWithdrawals, setAllWithdrawals] = useState([]);
    const [leatestWithdrawals, setWithdrawals] = useState([]);
    const getUserData = async () => {
        const userData = await fetchApiData(
            "https://jagjeetludo-backend.vercel.app/api/v1/admin/withdrawalList"
        );
        setAllWithdrawals(userData?.data);
        const leatestTenUsers = userData?.data?.slice(Math.max(userData?.data?.length - 10, 0));
        setWithdrawals(leatestTenUsers)
    
    };

    useEffect(() => {
        getUserData()
    }, [])
    return {
        allWithdrawals,
        leatestWithdrawals
    };
};

export default useWithdrawals;
