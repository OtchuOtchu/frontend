import { useState } from "react";

import useClothesStore from "../../store/ClothesStore";
import useWeatherStore from "../../store/WeatherStore";
import useDateStore from "../../store/DateStore";

export default function RecommendProducts() {
    const clothes = useClothesStore(state => state.clothes);
    const todaySet = useClothesStore(state => state.todaySet);
    const setTodaySet = useClothesStore(state => state.setTodaySet);
    const addOutfitSet = useClothesStore(state => state.addOutfitSet);
    const toggleLiked = useClothesStore(state => state.toggleLiked);

    const { selectedDate } = useDateStore(); // 전역 상태의 날짜 참조
    const { weatherData } = useWeatherStore(); // 날씨 데이터 참조
    const [filteredClothes, setFilteredClothes] = useState([]);

    const categories = ['상의', '하의', '신발', '아우터'];
    const [currentIndices, setCurrentIndices] = useState({
        "상의": 0,
        "하의": 0,
        "신발": 0,
        "아우터": 0,
    });

    const handleItemClick = (category, item) => {
        setTodaySet(category, item);
    };

    const handleSubmit = () => {
        //datestore에서 날짜 가져오기
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

    const handleNext = (category) => {
        const maxIndex = clothes.filter((item) => item.category === category).length - 3;
        setCurrentIndices((prev) => ({
            ...prev,
            [category]: prev[category] + 1 > maxIndex ? maxIndex : prev[category] + 1,
        }));
    };

    const handlePrev = (category) => {
        setCurrentIndices((prev) => ({
            ...prev,
            [category]: prev[category] - 1 < 0 ? 0 : prev[category] - 1,
        }));
    };

    return (
        <div className="flex flex-col p-5 w-[850px]">
            {categories.map((category) => (
                <div key={category}>
                    <h2 className="text-2xl mb-4">{category}</h2>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="text-2xl mb-4 border-2">
                            <img src={todaySet[category]} alt={`ID: ${todaySet[category]?.id}`} className="w-full h-full object-cover" />
                        </div>
                        <button
                            className="absolute left-0 z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
                            onClick={() => handlePrev(category)}
                        >
                            {"<"}
                        </button>
                        {clothes
                            .filter((item) => item.category === category)
                            .slice(currentIndices[category], currentIndices[category] + 3)
                            .map((item) => (
                                <div
                                    key={item.id}
                                    className={`aspect-square border p-2 ${todaySet[category] &&
                                        todaySet[category].id === item.id
                                        ? "border-blue-500 bg-gray-100"
                                        : "border-gray-300"
                                        }`}
                                    onClick={() => handleItemClick(category, item)}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.category}
                                        className="w-full h-full object-cover"
                                    />
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
                className="absolute right-0 z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
                onClick={() => handleNext(category)}
            >
                {">"}
            </button>
            <button
                onClick={handleSubmit}
                className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
                오늘의 세트 제출하기
            </button>
        </div>
    );
}