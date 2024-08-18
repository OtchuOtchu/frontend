import { useEffect } from 'react';
import useWeatherStore from '../../store/WeatherStore';
import { weatherValue } from '../../util/WeatherValue';

export default function Weather() {
    const weatherKey = import.meta.env.VITE_WEATHER_KEY; //날씨 api 키 호출
    const { weatherData, getWeatherData } = useWeatherStore();

    //좌표 불러오기
    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            getWeatherData(lat, lon, weatherKey);
        });
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);

    const getWeatherBackground = () => {
        const description = weatherData.today?.weather;
        return weatherValue[description] || 'bg-gray-300'; // 기본 배경색
    };

    return (
        <div className={`h-screen flex flex-col items-center justify-center ${getWeatherBackground()} text-white`}>
            <h2 className="text-2xl font-semibold mb-2">Today</h2>
            <p className="text-lg">{weatherData.today?.weather}</p>
            <p className="text-lg flex items-baseline">
                <span className="mr-2">최고/최저</span>
                <span className="text-2xl">{weatherData.today?.tempMax}°C/{weatherData.today?.tempMin}°C</span>
            </p>

            <h2 className="text-2xl font-semibold mt-8">Tomorrow</h2>
            <p className="text-lg">{weatherData.tomorrow?.weather}</p>
        </div>
    );
}
