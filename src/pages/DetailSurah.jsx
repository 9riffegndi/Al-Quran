
import React from "react";


import Loading from "../components/Loading";

import DetailSurahList from "../components/DetailSurahList";
import MainLayout from "../Layouts/MainLayouts";


import useFecthSurahByNumberSurah from "../hooks/useFecthSurahByNumberSurah";
import { useParams } from "react-router-dom";



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
      <DetailSurahList surahs={surahs} /> 
      </MainLayout>
  );
}
