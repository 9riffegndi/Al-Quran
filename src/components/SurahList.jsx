import React from 'react'

import SurahItem from './SurahItem'

export default function ListSurah({ surahs }) {
    return (    
        <ul className='w-full  justify-center place-items-center gap-3 grid grid-cols-12'>
            {surahs.map((surah) => (
                <SurahItem key={surah.number} surahs={surah} />
            ))}
        </ul>
    )
    
}