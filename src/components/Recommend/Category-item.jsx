import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useClothingRecommendations from "../../hooks/useClothingRecommend";
import useWeatherStore from "../../store/WeatherStore"; // WeatherStore import

export default function CategoryItem({ category, todaySet, handleItemClick, toggleLiked }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const weatherData = useWeatherStore(state => state.weatherData); // WeatherStore에서 weatherData 가져오기
    const selectedWeather = weatherData?.today?.weather || "Unknown"; // weatherData가 정의되었는지 확인

    const recommendedClothes = useClothingRecommendations(category, selectedWeather);

    const handleNext = () => {
        const maxIndex = recommendedClothes.length - 3;
        setCurrentIndex((prev) => (prev + 1 > maxIndex ? maxIndex : prev + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 < 0 ? 0 : prev - 1));
    };

    return (
        <div className="mb-6 flex items-center">
            <div className="w-1/4 pr-4">
                <h2 className="text-2xl mb-2">{category}</h2>
                <div className="border-2 h-64">
                    <img
                        src={todaySet[category]?.image}
                        alt={`ID: ${todaySet[category]?.id}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="w-3/4 flex items-center relative">
                <IoIosArrowBack
                    className="z-10 text-3xl bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 cursor-pointer"
                    onClick={handlePrev}
                />
                <div className="grid grid-cols-3 gap-4 overflow-hidden">
                    {recommendedClothes
                        .slice(currentIndex, currentIndex + 3)
                        .map((item) => (
                            <div
                                key={item.id}
                                className={`aspect-square border p-2 ${todaySet[category] && todaySet[category].id === item.id
                                    ? "border-blue-500 bg-gray-100"
                                    : "border-gray-300"
                                    }`}
                                onClick={() => handleItemClick(category, item)}
                            >
                                <img
                                    src={item.image}
                                    alt='옷'
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    className="bottom-2 right-2"
                                    onClick={(e) => {
                                        e.stopPropagation();
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
                <IoIosArrowForward
                    className="z-10 text-3xl bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 cursor-pointer"
                    onClick={handleNext}
                />
            </div>
        </div>
    );
}
