import { create } from 'zustand';
import { fetchWeatherData } from '../Api/WeatherService';

const useWeatherStore = create((set) => ({
    weatherData: {},
    getWeatherData: async (lat, lon, weatherKey) => {
        try {
            const data = await fetchWeatherData(lat, lon, weatherKey);

            // 받아온 데이터 구조 확인 후 상태 업데이트
            if (data && data.forecast && data.forecast.forecastday) {
                set({
                    weatherData: {
                        today: {
                            weather: data.forecast.forecastday[0].day.condition.text,
                            tempMax: data.forecast.forecastday[0].day.maxtemp_c,
                            tempMin: data.forecast.forecastday[0].day.mintemp_c,
                        },
                        tomorrow: {
                            weather: data.forecast.forecastday[1].day.condition.text,
                            tempMax: data.forecast.forecastday[1].day.maxtemp_c,
                            tempMin: data.forecast.forecastday[1].day.mintemp_c,
                        },
                        dayAfterTomorrow: {
                            weather: data.forecast.forecastday[2].day.condition.text,
                            tempMax: data.forecast.forecastday[2].day.maxtemp_c,
                            tempMin: data.forecast.forecastday[2].day.mintemp_c,
                        },
                    },
                });
            } else {
                console.error("Unexpected data structure:", data);
            }
        } catch (error) {
            console.error("Error fetching weather data in store:", error);
        }
    },
}));

export default useWeatherStore;
