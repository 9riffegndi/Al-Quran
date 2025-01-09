
// hooks/useFetchSurahs.js
import { useState, useEffect } from 'react';
import { getAllSurah } from '../services/Api';

// Custom hook untuk mengambil data surah
const useFetchSurahs = () => {
    const [surahs, setSurahs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllSurah();
                setSurahs(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { surahs, loading, error };
};

export default useFetchSurahs;
