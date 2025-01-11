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
          className= " w-[150px] flex  justify-center items-center gap-1 border-b-2 "> 
          {surahs.map((surah) => (
            <p key={surah.number}>
              {surah.name} {/* Menampilkan nama surah */}
            </p>
          ))}
          {showSidebar ? <img className="w-5" src="https://img.icons8.com/?size=100&id=39975&format=png&color=FAB005" /> : <img className="w-5" src="https://img.icons8.com/?size=100&id=39970&format=png&color=FAB005" />}
        </button>
      </nav>
      <div className="flex w-full">
          <aside className={`bg-base-300 p-4  w-[300px] min-h-full  
            ${showSidebar ? 'block' : 'hidden'}`}>
            search surah and sort ayah here
          </aside>
        <div className="flex-1">
          <DetailSurahList surahs={surahs} />
        </div>
      </div>
    </MainLayout>
  );
}