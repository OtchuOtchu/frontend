import React, { useState } from 'react';
import ClothingItem from './ClothingItem';
import useClothesStore from '../../store/ClothesStore';

const StyleSet = () => {
  const [selectedWeather, setSelectedWeather] = useState('ALL');
  const { outfitSets, clothes, removeOutfitSet, toggleLiked } = useClothesStore();

  const weatherOptions = ['ALL', 'Sunny', 'Partly cloudy', 'Cloudy', 'Rain', 'Snow'];
  const categories = ['상의', '하의', '신발', '아우터'];

  const toggleWeather = (weather) => {
    setSelectedWeather(prev => prev === weather ? 'ALL' : weather);
  };

  const removeOutfit = (date) => {
    removeOutfitSet(date);
  };

  const filteredOutfits = Object.entries(outfitSets)
    .map(([date, outfitData]) => ({
      date,
      weather: outfitData.weather || 'Unknown',
      items: outfitData.map(id => clothes.find(item => item.id === id)).filter(Boolean)
    }))
    .filter(outfit => selectedWeather === 'ALL' || outfit.weather === selectedWeather);

  return (
    <div className="w-full">
      <div className="mb-4 text-center">
        <div className="flex items-center justify-center space-x-4">
          <span className="text-base font-semibold">Weather</span>
          {weatherOptions.map((weather, index) => (
            <React.Fragment key={weather}>
              <button
                onClick={() => toggleWeather(weather)}
                className={`px-2 py-1 text-sm ${selectedWeather === weather ? 'font-bold' : 'text-gray-500'}`}
                style={{
                  backgroundColor: 'transparent',
                  borderRight: index < weatherOptions.length - 1 ? '1px solid #ccc' : 'none',
                  outline: 'none',
                  textAlign: 'center',
                  border: 'none',
                }}
              >
                {weather}
              </button>
              {index < weatherOptions.length - 1 && (
                <div className="h-4 w-px bg-gray-300"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8 bg-gray-100 p-8 w-full">
        {filteredOutfits.map((outfit) => (
          <div key={outfit.date} className="bg-white border relative text-center">
            <div className="flex justify-center items-center p-2 bg-gray-800 text-white w-full">
              <span className="text-xl font-bold mr-2">{outfit.date}</span>
              <button
                onClick={() => removeOutfit(outfit.date)}
                className="ml-2"
                style={{ backgroundColor: 'transparent', border: 'none', padding: '0', cursor: 'pointer' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="white">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="text-center p-2 bg-gray-300 font-bold">{outfit.weather}</div>

            <div className="mt-4"></div>

            <div className="flex flex-col w-full space-y-4">
              {categories.map((category) => {
                const item = outfit.items.find(item => item.category === category) || {};
                return <ClothingItem key={category} item={item} toggleLiked={toggleLiked} />;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StyleSet;