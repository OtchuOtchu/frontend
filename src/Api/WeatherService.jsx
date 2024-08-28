export const fetchWeatherData = async (lat, lon, weatherKey) => {
    let url = `http://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${lat},${lon}&days=3`;

    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error('날씨 데이터를 가져오는 데 실패했습니다.');
        }
        let data = await response.json();
        //console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
};