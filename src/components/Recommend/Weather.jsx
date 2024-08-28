// import { useEffect } from 'react';
// import useWeatherStore from '../../store/WeatherStore';
// import useDateStore from '../../store/DateStore';
// import { weatherValue } from '../../util/WeatherValue';
// import useCoordinates from '../../hooks/useCoordinates';
// import { weatherImages } from '../../util/dummyData'; // 올바른 경로 설정

// export default function Weather() {
//     const weatherKey = import.meta.env.VITE_WEATHER_KEY; // 날씨 API 호출
//     const { weatherData, getWeatherData } = useWeatherStore();
//     const { selectedDate } = useDateStore(); // 전역 상태의 날짜 참조
//     const { coords, error } = useCoordinates(); // 좌표값 가져오기

//     useEffect(() => {
//         if (coords) {
//             console.log('좌표 가져오기 성공:', coords);
//             const lat = coords.lat;
//             const lon = coords.lng;
//             getWeatherData(lat, lon, weatherKey);
//         }
//     }, [coords, weatherKey]);

//     if (error) {
//         return <div>Error getting location: {error.message}</div>;
//     }

//     // 날씨에 맞는 배경 이미지를 찾는 함수
//     const getWeatherBackground = () => {
//         const description = weatherData[selectedDate]?.weather;
//         // weatherImages에서 description에 맞는 이미지 찾기
//         const matchingImage = weatherImages.find(image => image.weather === description.toLowerCase());

//         // 이미지가 있으면 해당 URL을 반환, 없으면 기본 배경색 반환
//         return matchingImage ? `url(${matchingImage.image})` : 'bg-gray-500';
//     };

//     // 배경 스타일 설정
//     const backgroundStyle = {
//         width:`300px`,
//         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), ${getWeatherBackground()}`,
//         backgroundSize: 'cover',
        
//     };

//     return (
//         <div style={backgroundStyle} className="h-screen flex flex-col items-center justify-center text-white">
//             <h2 className="text-2xl font-semibold mb-2">
//                 {selectedDate === 'today' ? 'Today' : selectedDate === 'tomorrow' ? 'Tomorrow' : 'Day After Tomorrow'}
//             </h2>
//             <p className="text-lg">{weatherData[selectedDate]?.weather}</p>
//             <p className="text-lg flex items-baseline">
//                 <span className="mr-2">최고/최저</span>
//                 <span className="text-2xl">{weatherData[selectedDate]?.tempMax}°C/{weatherData[selectedDate]?.tempMin}°C</span>
//             </p>
//         </div>
//     );
// }

import { useEffect } from 'react';
import useWeatherStore from '../../store/WeatherStore';
import useDateStore from '../../store/DateStore';
import { weatherValue } from '../../util/WeatherValue';
import useCoordinates from '../../hooks/useCoordinates';

import { weatherImages } from '../../util/dummyData';

export default function Weather() {
    const weatherKey = import.meta.env.VITE_WEATHER_KEY; // 날씨 API 호출
    const { weatherData, getWeatherData } = useWeatherStore();
    const { selectedDate } = useDateStore(); // 전역 상태의 날짜 참조
    const { coords, error } = useCoordinates(); // 좌표값 가져오기

    useEffect(() => {
        if (coords) {
            console.log('좌표 가져오기 성공:', coords);
            const lat = coords.lat;
            const lon = coords.lng;
            getWeatherData(lat, lon, weatherKey);
        }
    }, [coords, weatherKey]);

    if (error) {
        return <div>Error getting location: {error.message}</div>;
    }

    const getWeatherBackground = () => {
        const description = weatherData[selectedDate]?.weather;
        return weatherValue[description] || 'bg-gray-500'; // 기본 배경색
    };

    return (
        <div className={`h-screen flex flex-col items-center justify-center ${getWeatherBackground()} text-white`}>
            <h2 className="text-2xl font-semibold mb-2">{selectedDate === 'today' ? 'Today' : selectedDate === 'tomorrow' ? 'Tomorrow' : 'Day After Tomorrow'}</h2>
            <p className="text-lg">{weatherData[selectedDate]?.weather}</p>
            <p className="text-lg flex items-baseline">
                <span className="mr-2">최고/최저</span>
                <span className="text-2xl">{weatherData[selectedDate]?.tempMax}°C/{weatherData[selectedDate]?.tempMin}°C</span>
            </p>
        </div>
    );
}

