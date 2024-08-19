import React, { createContext, useState } from 'react';

// 옷 더미 데이터
const initialClothes = [
  { id: 1, image: '/path/to/shirt.jpg', category: '상의', weather: '맑음' },
  { id: 2, image: '/path/to/jacket.jpg', category: '아우터', weather: '구름' },
  { id: 3, image: '/path/to/pants.jpg', category: '하의', weather: '흐림' },
  { id: 4, image: '/path/to/jacket2.jpg', category: '아우터', weather: '비' },
  { id: 5, image: '/path/to/shoes.jpg', category: '신발', weather: 'ALL' },
  { id: 6, image: '/path/to/jacket3.jpg', category: '아우터', weather: '눈' },
];

export const ClothesContext = createContext();

export const ClothesProvider = ({ children }) => {
  const [clothes, setClothes] = useState(initialClothes);

  return (
    <ClothesContext.Provider value={{ clothes, setClothes }}>
      {children}
    </ClothesContext.Provider>
  );
};