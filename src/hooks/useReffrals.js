import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";

const useReffrals = () => {
    const [allReffrals, setAllReffrals] = useState([]);
    const getUserData = async () => {
        const userData = await fetchApiData(
            "https://jagjeetludo-backend.vercel.app/api/v1/admin/refferalList"
        );
        setAllReffrals(userData?.data);
    
    };

    useEffect(() => {
        getUserData()
    }, [])
    return {
        allReffrals,
    };
};

export default useReffrals;
