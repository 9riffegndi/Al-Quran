export default function DetailSurahItem({ surahs }) {

  const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

  function convertToArabicNumber(number) {
    return number
      .toString()
      .split('')
      .map(digit => arabicNumbers[parseInt(digit, 10)])
      .join('');
  }

  return (
    <>
      {surahs.ayahs.map((ayah) => (
        <li
          key={`${ayah.number.inSurah}-${ayah.arab}`} // Ensure the key is unique by combining two values
          className="border-b flex justify-end  min-h-[230px] w-full text-2xl md:text-3xl"
        >
          <div className="w-full md:w-[80%]  flex justify-around flex-col gap-2   items-end">
              <div className="flex cursor-pointer text-end items-start gap-2">
                  <span className="text-3xl">{convertToArabicNumber(ayah.number.inSurah)}</span>
                  <span>{ayah.arab}</span>
              </div>
            <p className="flex gap-1 w-full text-sm">
              <span>{ayah.translation}</span>
              <span className="text-xs text-secondary">{ayah.number.inSurah}</span>
            </p>
          </div>
        </li>
      ))}
    </>
  );
}