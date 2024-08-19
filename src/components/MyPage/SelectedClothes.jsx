import React, { useState, useEffect } from 'react';

const SelectedClothes = () => {
  const [selectedCategories, setSelectedCategories] = useState(['ALL']);
  const [selectedWeathers, setSelectedWeathers] = useState(['ALL']);
  const [likedClothes, setLikedClothes] = useState([
    { id: 1, image: '/path/to/shirt.jpg', category: '상의', weather: '맑음' },
    { id: 2, image: '/path/to/jacket.jpg', category: '아우터', weather: '구름' },
    { id: 3, image: '/path/to/pants.jpg', category: '하의', weather: '흐림' },
    { id: 4, image: '/path/to/jacket2.jpg', category: '아우터', weather: '비' },
    { id: 5, image: '/path/to/shoes.jpg', category: '신발', weather: 'ALL' },
    { id: 6, image: '/path/to/jacket3.jpg', category: '아우터', weather: '눈' },
  ]);
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

  const removeLikedItem = (id) => {
    setLikedClothes(prev => prev.filter(item => item.id !== id));
  };

  useEffect(() => {
    const filtered = likedClothes.filter(item => 
      (selectedCategories.includes('ALL') || selectedCategories.includes(item.category)) &&
      (selectedWeathers.includes('ALL') || selectedWeathers.includes(item.weather))
    );
    setFilteredClothes(filtered);
  }, [selectedCategories, selectedWeathers, likedClothes]);

  return (
    <div className="bg-white p-6">
      
      <div className="mb-4 text-center">
        <div className="flex items-center justify-center space-x-4">
          <span className="text-sm font-semibold">Category</span>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={`px-2 py-1 text-sm ${selectedCategories.includes(category) ? 'font-bold' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6 text-center">
        <div className="flex items-center justify-center space-x-4">
          <span className="text-sm font-semibold">Weather</span>
          {weatherOptions.map(weather => (
            <button
              key={weather}
              onClick={() => toggleWeather(weather)}
              className={`px-2 py-1 text-sm ${selectedWeathers.includes(weather) ? 'font-bold' : ''}`}
            >
              {weather}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 bg-gray-100 p-4">
        {filteredClothes.map((item) => (
          <div key={item.id} className="relative">
            <div className="aspect-square border border-gray-300">
              <img src={item.image} alt="clothing item" className="w-full h-full object-cover" />
            </div>
            <button 
              className="absolute bottom-2 right-2"
              onClick={() => removeLikedItem(item.id)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="black">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedClothes;