import { create } from 'zustand';

import { initialClothes, initialOutfitSets } from '../util/dummyData';

const useClothesStore = create((set) => ({
  clothes: initialClothes || [], // 배열로 초기화
  setClothes: (newClothes) => set({ clothes: newClothes }),
  outfitSets: initialOutfitSets,
  todaySet: {
    상의: null,
    하의: null,
    신발: null,
    아우터: null,
    아이템: null,
  },
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
  addClothes: async (newItem) => {
    const imageUrl = await getImageUrl(newItem.imagePath); // Firebase에서 이미지 URL 가져오기
    set((state) => ({
      clothes: [...state.clothes, { ...newItem, image: imageUrl }],
    }));
  },

}));

export default useClothesStore;
