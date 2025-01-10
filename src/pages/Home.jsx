// pages/Home.js
import React from 'react';
import ListSurah from '../components/SurahList';
import MainLayout from '../Layouts/MainLayouts';
import useFetchSurahs  from '../hooks/useFetchSurahs';
import Loading from '../components/Loading';

const Home = () => {

    const { surahs, loading, error } = useFetchSurahs();

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
        <MainLayout>
            <ListSurah surahs={surahs}  />
        </MainLayout>
        </>
    );
};

export default Home;
