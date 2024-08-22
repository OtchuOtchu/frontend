import { useState } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import useClothesStore from "../../store/ClothesStore";

export default function CategoryItem({ category, todaySet, handleItemClick, toggleLiked }) {
    const clothes = useClothesStore((state) => state.clothes);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        const maxIndex = clothes.filter((item) => item.category === category).length - 3;
        setCurrentIndex((prev) => (prev + 1 > maxIndex ? maxIndex : prev + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 < 0 ? 0 : prev - 1));
    };

    return (
        <div className="mb-6">
            <h2 className="text-2xl mb-4">{category}</h2>
            <div className="relative">
                <IoIosArrowBack
                    className="absolute left-0 z-10 text-3xl bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 cursor-pointer"
                    onClick={handlePrev}
                />
                <div className="grid grid-cols-3 gap-4 overflow-hidden">
                    {clothes
                        .filter((item) => item.category === category)
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
                                    alt={item.category}
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
                    className="absolute right-0 z-10 text-3xl bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 cursor-pointer"
                    onClick={handleNext}
                />
            </div>
        </div>
    );
}
