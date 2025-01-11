import React from "react";
import Loading from "../components/Loading";
import DetailSurahList from "../components/DetailSurahList";
import MainLayout from "../Layouts/MainLayouts";
import useFecthSurahByNumberSurah from "../hooks/useFecthSurahByNumberSurah";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function DetailSurah() {
  const { surahNumber } = useParams();
  const { surahs, loading, error } = useFecthSurahByNumberSurah(surahNumber);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  return (
    <MainLayout className="flex flex-col ">
      <nav className="bg-base-300 justify-between  items-center grow   w-full "> 
        <button 
          onClick={toggleSidebar} 
          className="w-max  cursor-pointer  border-b-2 "
        >
          ${surahs.name} {showSidebar ? 'SHOW' : 'HIDE'}
        </button>
      </nav>
      <div className="flex w-full">
          <aside className={`bg-base-300  w-[300px] min-h-full  
            ${showSidebar ? 'block' : 'hidden'}`}>
            Konten Aside
          </aside>
        <div className="flex-1">
          <DetailSurahList surahs={surahs} />
        </div>
      </div>
    </MainLayout>
  );
}