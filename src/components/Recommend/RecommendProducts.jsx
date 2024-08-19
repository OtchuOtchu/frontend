import { useState } from "react";
import useClothesStore from "../../store/ClothesStore";

export default function RecommendProducts() {
    const clothes = useClothesStore(state => state.clothes);
    const todaySet = useClothesStore(state => state.todaySet);
    const setTodaySet = useClothesStore(state => state.setTodaySet);
    const addOutfitSet = useClothesStore(state => state.addOutfitSet);
    const toggleLiked = useClothesStore(state => state.toggleLiked);
    
    const categories = ['상의', '하의', '신발'];


    const handleItemClick = (category, item) => {
        setTodaySet(category, item);
    };

    const handleSubmit = () => {
        const today = new Date();
        const dateString = today.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).replace(/\./g, '-').replace(/-$/, '').replace(/\s/g, '');
 
        const outfitIds = Object.values(todaySet).map((item) => item.id);
        if (outfitIds.length > 0) {
            addOutfitSet(dateString, outfitIds);
            alert("오늘의 코디가 저장되었습니다!");
        } else {
            alert("선택된 아이템이 없습니다.");
        }
        console.log(today);
    };

    return (
        <div className="flex flex-col p-5 w-[850px]">

      {categories.map(category => (
        <div key={category}>
          <h2 className="text-2xl mb-4">{category}</h2>

          <div className="grid grid-cols-4 gap-4">
          <div className="text-2xl mb-4 border-2">
                <img src={todaySet[category]} alt={`ID: ${todaySet[category]?.id}`} className="w-full h-full object-cover" />
            </div>
                {clothes.filter(item => item.category === category).map(item => (
                    <div key={item.id} 
                    className={`aspect-square border p-2 ${todaySet[category] && todaySet[category].id === item.id ? 'border-blue-500 bg-gray-100 ' : 'border-gray-300'}`}
                    onClick={() => handleItemClick(category, item)}
                    >
                    <img src={item.image} alt={item.category} className="w-full h-full object-cover" />
                    
                                    <button
                                        className="bottom-2 right-2"
                                        onClick={(e) => {
                                            toggleLiked(item.id);
                                        }}
                                    >
                                        <svg
                                            
                                            className="h-6 w-6"
                                            viewBox="0 0 20 20"
                                            fill={item.liked ? "black" : "white"}
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                
                    </div>



                ))}
          </div>
        </div>
      ))}
            <button
                onClick={handleSubmit}
                className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
                오늘의 세트 제출하기
            </button>
        </div>
    );
}