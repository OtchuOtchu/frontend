import React, { useState, useEffect } from 'react';
import useClothesStore from '../../store/ClothesStore';
import ClothingItem from './ClothingItem';

const SelectedClothes = () => {
  const likedClothes = useClothesStore(state => state.clothes.filter(item => item.liked));
  const toggleLiked = useClothesStore(state => state.toggleLiked);
  
  const [selectedCategories, setSelectedCategories] = useState(['ALL']);
  const [selectedWeathers, setSelectedWeathers] = useState(['ALL']);
  const [filteredClothes, setFilteredClothes] = useState(likedClothes);

  const categories = ['ALL', '상의', '아우터', '하의', '신발', '액세서리', '기타용품'];
  const weatherOptions = ['ALL', 'Sunny', 'Partly cloudy', 'Cloudy', 'Rain', 'Snow'];

  const toggleCategory = (category) => {
    setSelectedCategories(prev => {
      if (category === 'ALL') return ['ALL'];
      const withoutAll = prev.filter(c => c !== 'ALL');
      if (withoutAll.includes(category)) {
        return withoutAll.length === 1 ? ['ALL'] : withoutAll.filter(c => c !== category);
      }
      return [...withoutAll, category];
    });
  };

  const toggleWeather = (weather) => {
    setSelectedWeathers(prev => {
      if (weather === 'ALL') return ['ALL'];
      const withoutAll = prev.filter(w => w !== 'ALL');
      if (withoutAll.includes(weather)) {
        return withoutAll.length === 1 ? ['ALL'] : withoutAll.filter(w => w !== weather);
      }
      return [...withoutAll, weather];
    });
  };

  useEffect(() => {
    const filtered = likedClothes.filter(item => 
      (selectedCategories.includes('ALL') || selectedCategories.includes(item.category)) &&
      (selectedWeathers.includes('ALL') || selectedWeathers.includes(item.weather))
    );

    if (JSON.stringify(filtered) !== JSON.stringify(filteredClothes)) {
        setFilteredClothes(filtered);
    }
  }, [selectedCategories, selectedWeathers, likedClothes]);

  return (
    <div className="w-full">
      <div className="mb-4 text-center">
        <div className="flex items-center justify-center space-x-4">
          <span className="text-base font-semibold">Category</span>
          {categories.map((category, index) => (
            <React.Fragment key={category}>
              <button
                onClick={() => toggleCategory(category)}
                className={`px-2 py-1 text-sm ${selectedCategories.includes(category) ? 'font-bold' : 'text-gray-500'}`}
                style={{
                  backgroundColor: 'transparent',
                  borderRight: index < categories.length - 1 ? '1px solid #ccc' : 'none',
                  outline: 'none',
                  textAlign: 'center',
                  border: 'none',
                  boxShadow: 'none',
                }}
              >
                {category}
              </button>
              {index < categories.length - 1 && (
                <div className="h-4 w-px bg-gray-300"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="mb-6 text-center">
        <div className="flex items-center justify-center space-x-4">
          <span className="text-base font-semibold">Weather</span>
          {weatherOptions.map((weather, index) => (
            <React.Fragment key={weather}>
              <button
                onClick={() => toggleWeather(weather)}
                className={`px-2 py-1 text-sm ${selectedWeathers.includes(weather) ? 'font-bold' : 'text-gray-500'}`}
                style={{
                  backgroundColor: 'transparent',
                  borderRight: index < weatherOptions.length - 1 ? '1px solid #ccc' : 'none',
                  outline: 'none',
                  textAlign: 'center',
                  border: 'none',
                  boxShadow: 'none',
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
        {filteredClothes.map((item) => (
          <div key={item.id} className="bg-white border relative text-center">
            <div className="flex flex-col w-full space-y-4">
              <ClothingItem item={item} toggleLiked={toggleLiked} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedClothes;
