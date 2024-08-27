import { create } from 'zustand';
import { fetchWeatherData } from '../Api/WeatherService';

const useWeatherStore = create((set) => ({
    weatherData: {},
    getWeatherData: async (lat, lon, weatherKey) => {
        try {
            const data = await fetchWeatherData(lat, lon, weatherKey);
            // 받아온 데이터 구조 확인을 위해 콘솔에 출력
            console.log("Fetched weather data:", data);

            const weatherConditions = {
                sunny: [1000], // Clear sky
                cloudy: [1003, 1006, 1009, 1030], // Partly cloudy, cloudy, mist, etc.
                rainy: [1063, 1153, 1183, 1186, 1195, 1240, 1243, 1246], // Rain-related codes
                snowy: [1066, 1114, 1210, 1213, 1216, 1225, 1255], // Snow-related codes
                windy: [1072, 1087, 1117, 1135, 1189] // Wind-related codes
            };
            
            function getWeatherCategory(code) {
                if (weatherConditions.sunny.includes(code)) return 'sunny';
                if (weatherConditions.cloudy.includes(code)) return 'cloudy';
                if (weatherConditions.rainy.includes(code)) return 'rainy';
                if (weatherConditions.snowy.includes(code)) return 'snowy';
                if (weatherConditions.windy.includes(code)) return 'windy';
                return 'unknown'; // Default category if no match found
            }

            // 받아온 데이터 구조 확인 후 상태 업데이트
            if (data && data.forecast && data.forecast.forecastday) {
                set({
                    weatherData: {
                        today: {
                            weather: getWeatherCategory(data.forecast.forecastday[0].day.condition.code),
                            tempMax: data.forecast.forecastday[0].day.maxtemp_c,
                            tempMin: data.forecast.forecastday[0].day.mintemp_c,
                        },
                        tomorrow: {
                            weather: getWeatherCategory(data.forecast.forecastday[1].day.condition.code),
                            tempMax: data.forecast.forecastday[1].day.maxtemp_c,
                            tempMin: data.forecast.forecastday[1].day.mintemp_c,
                        },
                        dayAfterTomorrow: {
                            weather: getWeatherCategory(data.forecast.forecastday[2].day.condition.code),
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



export const initialWeather = [
    { id: 1, image: 'https://firebasestorage.googleapis.com/v0/b/reactfirebasetest-40937.appspot.com/o/images%2Fweather%2Frainy3.jpg?alt=media', category: '하의', weather: '맑음', liked: true },
]
