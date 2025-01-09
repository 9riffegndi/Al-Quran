import { useState, useEffect } from "react";

import { getSpesifictSurahByNumberSurah } from "../services/Api";


const useFecthSurahByNumberSurah = (numberSurah) => {
    const [surahs, setSurahs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getSpesifictSurahByNumberSurah(numberSurah);
                setSurahs(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [numberSurah]);

    return { surahs, loading, error };
};

export default useFecthSurahByNumberSurah;