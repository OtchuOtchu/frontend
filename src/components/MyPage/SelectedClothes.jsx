import React, { useState, useEffect } from 'react';
import useClothesStore from '../../store/ClothesStore';

const SelectedClothes = () => {
  const likedClothes = useClothesStore(state => state.clothes.filter(item => item.liked));
  const toggleLiked = useClothesStore(state => state.toggleLiked);
  
  const [selectedCategories, setSelectedCategories] = useState(['ALL']);
  const [selectedWeathers, setSelectedWeathers] = useState(['ALL']);
  const [filteredClothes, setFilteredClothes] = useState(likedClothes);

  const categories = ['ALL', '상의', '아우터', '하의', '신발', '액세서리', '기타용품'];
  const weatherOptions = ['ALL', '맑음', '구름', '흐림', '비', '눈'];

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
    <div className="bg-white p-6">
      
      {/* 카테고리 필터 */}
      <div className="mb-4 text-center">
        <div className="flex items-center justify-center space-x-4">
          <span className="text-sm font-semibold">Category</span>
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
                  border: 'none', // hover 시 테두리 제거
                  boxShadow: 'none', // hover 시 그림자 제거
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

      {/* 날씨 필터 */}
      <div className="mb-6 text-center">
        <div className="flex items-center justify-center space-x-4">
          <span className="text-sm font-semibold">Weather</span>
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
                  border: 'none', // hover 시 테두리 제거
                  boxShadow: 'none', // hover 시 그림자 제거
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

      {/* 옷 필터링된 목록 */}
      <div className="grid grid-cols-4 gap-4 bg-gray-100 p-4">
        {filteredClothes.map((item) => (
          <div key={item.id} className="relative bg-white border border-gray-300">
            <img src={item.image} alt="clothing item" className="w-full h-32 object-cover" />
            <div className="absolute bottom-2 right-2">
              <button 
                onClick={() => toggleLiked(item.id)}
                className="p-2 bg-transparent border-none"
                style={{
                  boxShadow: 'none',
                  border: 'none',
                  outline: 'none'
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="black">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedClothes;