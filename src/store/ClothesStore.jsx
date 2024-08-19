import create from 'zustand';

// 옷 더미 데이터
const initialClothes = [
  { id: 1, image: '/path/to/shirt.jpg', category: '상의', weather: '맑음', liked: false },
  { id: 2, image: '/path/to/jacket.jpg', category: '아우터', weather: '구름', liked: true },
  { id: 3, image: '/path/to/pants.jpg', category: '하의', weather: '흐림', liked: true },
  { id: 4, image: '/path/to/jacket2.jpg', category: '아우터', weather: '비', liked: false },
  { id: 5, image: '/path/to/shoes.jpg', category: '신발', weather: 'ALL', liked: true },
  { id: 6, image: '/path/to/jacket3.jpg', category: '아우터', weather: '눈', liked: true },
  { id: 7, image: '/path/to/hat.jpg', category: '액세서리', weather: '맑음', liked: false },
  { id: 8, image: '/path/to/scarf.jpg', category: '액세서리', weather: '구름', liked: true },
  { id: 9, image: '/path/to/gloves.jpg', category: '기타용품', weather: '눈', liked: false },
  { id: 10, image: '/path/to/shorts.jpg', category: '하의', weather: '맑음', liked: true },
  { id: 11, image: '/path/to/boots.jpg', category: '신발', weather: '눈', liked: false },
  { id: 12, image: '/path/to/tshirt.jpg', category: '상의', weather: '맑음', liked: true },
  { id: 13, image: '/path/to/umbrella.jpg', category: '기타용품', weather: '비', liked: false },
  { id: 14, image: '/path/to/raincoat.jpg', category: '아우터', weather: '비', liked: true },
  { id: 15, image: '/path/to/sunglasses.jpg', category: '액세서리', weather: '맑음', liked: true },
];

const initialOutfitSets = {
  '2023-07-20': [1, 3, 7], // 2023년 7월 20일에 1번, 3번, 7번 옷이 세트로 사용됨
  '2023-07-21': [2, 4, 8], // 2023년 7월 21일에 2번, 4번, 8번 옷이 세트로 사용됨
  // 추가 날짜별 세트...
};

// Zustand로 스토어 생성
const useClothesStore = create((set) => ({
  clothes: initialClothes,
  outfitSets: initialOutfitSets, 
  todaySet: {
    상의: null,
    하의: null,
    신발: null,
    아우터: null,
  },
  setClothes: (newClothes) => set({ clothes: newClothes }),
  setOutfitSets: (newOutfitSets) => set({ outfitSets: newOutfitSets }),
  setTodaySet: (category, item) => set((state) => ({
    todaySet: {
      ...state.todaySet,
      [category]: item,
    },
  })),
  
  // 옷의 liked 상태를 토글하는 메서드 추가
  toggleLiked: (id) => set((state) => ({
    clothes: state.clothes.map((item) => 
      item.id === id ? { ...item, liked: !item.liked } : item
    ),
  })),

  // 날짜별로 특정 옷 세트를 추가하는 메서드
  addOutfitSet: (date, outfitIds) => set((state) => ({
    outfitSets: {
      ...state.outfitSets,
      [date]: outfitIds,
    },
  })),

}));

export default useClothesStore;