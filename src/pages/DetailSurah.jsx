import React from "react";
import Loading from "../components/Loading";
import DetailSurahList from "../components/DetailSurahList";
import MainLayout from "../Layouts/MainLayouts";
import useFecthSurahByNumberSurah from "../hooks/useFecthSurahByNumberSurah";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function DetailSurah() {
  const { surahNumber } = useParams();
  const { surahs, loading, error } = useFecthSurahByNumberSurah(surahNumber);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <MainLayout>
      <Helmet>
      <title>
          {surahs?.name ? `${surahs.name} - Al-Quran Digital` : 'Al-Quran Digital'}
        </title>        <meta name="description" content={`Read Surah ${surahs.name} (${surahs.translation}) with ${surahs.numberOfAyahs} verses`} />
        <meta name="keywords" content={`quran, surah ${surahs.name}, ${surahs.translation}, islamic content`} />
        <meta property="og:title" content={`${surahs.name} - Al-Quran Digital`} />
        <meta property="og:description" content={`Read Surah ${surahs.name} (${surahs.translation})`} />
      </Helmet>
      <DetailSurahList surahs={surahs} />
    </MainLayout>
  );
}