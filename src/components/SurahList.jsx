import React from 'react'

import SurahItem from './SurahItem'



export default function ListSurah({ surahs }) {
    return (
        <ul>
            {surahs.map((surah) => (
                <SurahItem key={surah.number} surahs={surah} />
            ))}
        </ul>
    )
    
}