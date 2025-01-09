// pages/Home.js
import React from 'react';
import { useState, useEffect } from 'react';

import Navbar from '../components/Navbar';
import ListSurah from '../components/SurahList';

import MainLayout from '../Layouts/MainLayouts';

import  useFetchSurahs  from '../hooks/useFetchSurahs';


const Home = () => {

    const { surahs, loading, error } = useFetchSurahs();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
        <Navbar />
        <MainLayout>
            <ListSurah surahs={surahs}  />
        </MainLayout>
        </>
    );
};

export default Home;
