import { useState, useEffect } from 'react';
import useClothesStore from '../store/ClothesStore';
import useWeatherStore from '../store/WeatherStore'; // WeatherStore import

const useClothingRecommendations = (selectedCategory) => {
    const [recommendedClothes, setRecommendedClothes] = useState([]);
    const clothes = useClothesStore(state => state.clothes);
    const currentTemp = useWeatherStore(state => state.weatherData.currentTemp); // 현재 온도 가져오기
    const selectedWeather = useWeatherStore(state => state.weatherData.today?.weather);

    useEffect(() => {
        const filterClothes = () => {
            return clothes.filter(item => {
                const weatherMatch = selectedWeather === 'ALL' || item.weather === selectedWeather;
                const categoryMatch = selectedCategory === 'ALL' || item.category === selectedCategory;
                const temperatureMatch = (currentTemp >= item.minTemp && currentTemp <= item.maxTemp);
                //console.log(temperatureMatch && weatherMatch && categoryMatch);
                //console.log(weatherMatch);
                console.log(selectedWeather);
                return temperatureMatch && weatherMatch && categoryMatch;
            });
        };

        const filteredClothes = filterClothes();
        console.log('Filtered Clothes:', filteredClothes);
        setRecommendedClothes(filteredClothes);
    }, [selectedCategory, currentTemp, clothes, selectedWeather]);

    return recommendedClothes;
};

export default useClothingRecommendations;