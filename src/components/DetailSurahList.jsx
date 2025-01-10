import React from "react";
import DetailSurahItem from "./DetailSurahItem";

export default function DetailSurahList({ surahs }) {
    return (
      <ul className="flex mt-5 w-full flex-col justify-center ">
        {surahs.map((surah) => (
            <div className="flex flex-col items-start gap-20" key={surah.number}> {/* Ensure this key is unique */}
                {surah.number !== 1 && surah.number !== 9 && (
                    <div className="w-full text-3xl flex justify-center items-center ">
                        <p className="font-extrabold">{surah.bismillah.arab}</p>
                    </div>
                )}
                <DetailSurahItem surahs={surah} />
            </div>
        ))}
      </ul>
    );
}