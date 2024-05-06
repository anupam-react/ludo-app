import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";

const useMonthlyDeposite = () => {
    const [allDeposite, setAllDeposite] = useState([]);
    const getUserData = async () => {
        const userData = await fetchApiData(
            "https://jagjeetludo-backend.vercel.app/api/v1/admin/monthlyDepositelist"
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

export default useMonthlyDeposite;
