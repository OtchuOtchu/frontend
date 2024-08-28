import useClothesStore from "../../store/ClothesStore";
import useWeatherStore from "../../store/WeatherStore";
import useDateStore from "../../store/DateStore";

import CategoryItem from "./Category-item";

export default function RecommendProducts() {
    // Destructure multiple values from useClothesStore
    const {
        todaySet,
        setTodaySet,
        addOutfitSet,
        toggleLiked
    } = useClothesStore((state) => ({
        todaySet: state.todaySet,
        setTodaySet: state.setTodaySet,
        addOutfitSet: state.addOutfitSet,
        toggleLiked: state.toggleLiked,
    }));

    const { selectedDate } = useDateStore();
    const { weatherData } = useWeatherStore();

    const categories = ["상의", "하의", "신발", "아우터", "아이템"];

    const handleItemClick = (category, item) => {
        setTodaySet(category, item);
    };

    const handleSubmit = () => {
        const dateString = selectedDate
            .toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            })
            .replace(/\./g, "-")
            .replace(/-$/, "")
            .replace(/\s/g, "");

        const outfitIds = Object.values(todaySet).map((item) => item.id);
        if (outfitIds.length > 0) {
            addOutfitSet(dateString, outfitIds);
            alert("오늘의 코디가 저장되었습니다!");
        } else {
            alert("선택된 아이템이 없습니다.");
        }
    };

    return (
        <div className="flex flex-col p-5 w-[850px]">
            {categories.map((category) => (
                <CategoryItem
                    key={category}
                    category={category}
                    todaySet={todaySet}
                    handleItemClick={handleItemClick}
                    toggleLiked={toggleLiked}
                />
            ))}
            <button
                onClick={handleSubmit}
                className="mt-6 bg-black text-white py-2 px-4 rounded-sm hover:bg-gray-800"
            >
                Capture my outfit
            </button>
        </div>
    );
}
