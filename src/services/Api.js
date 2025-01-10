import axios from "axios";

// base Url
const baseUrl = 'https://quran-api-id.vercel.app/';

//"description": "get all surah: /surahs"
export const getAllSurah = () => {
    return axios.get(`${baseUrl}surahs`);
};

//"description": "get spesifict surah using number surah in quran (1 - 114): /surahs/{numberSurah}"

export const getSpesifictSurahByNumberSurah = async (numberSurah) => {
  const response = await axios.get(`${baseUrl}surahs/${numberSurah}`);
  return response;
};


//"description": "get all ayah from spesifict surah: /surahs/{numberSurah}/ayahs"
export const getAllAyahByNumberSurah = (numberSurah) => {
    return axios.get(`${baseUrl}surahs/${numberSurah}/ayahs`);
};


//"description": "get spesifict ayah from spesifict surah: /surahs/{numberSurah}/ayahs/{numberAyah}"
export const getSpesifictAyahFromSpesifictSurah = (numberSurah, numberAyah) => {
    return axios.get(`${baseUrl}surahs/${numberSurah}/ayahs/${numberAyah}`);
};