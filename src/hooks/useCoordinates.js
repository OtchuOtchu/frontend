import { useState, useEffect } from "react";
import { loadKakaoMapsApi } from "../api/mapAPI";

//좌표값 얻기
export default function useCoordinates() {
    const [coords, setCoords] = useState(null);
    const [error, setError] = useState(null);
    const [fullAddress, setFullAddress] = useState("");
    const [administrativeArea, setAdministrativeArea] = useState("");

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setCoords({ lat: latitude, lng: longitude });
                },
                (error) => {
                    console.error("Error getting coordinates: ", error);
                    setError(error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
            setError(new Error("Geolocation not supported"));
        }
    }, []);

    const geocodeAddress = async (address) => {
        try {
            await loadKakaoMapsApi();
            if (window.kakao && window.kakao.maps) {
                const geocoder = new window.kakao.maps.services.Geocoder();

                geocoder.addressSearch(address, (result, status) => {
                    if (status === window.kakao.maps.services.Status.OK) {
                        const lat = result[0].y;
                        const lng = result[0].x;
                        setCoords({ lat, lng });
                        setFullAddress(address);
                        reverseGeocode(lat, lng);
                    } else {
                        console.error("주소 검색에 실패했습니다:", status);
                    }
                });
            }
        } catch (error) {
            console.error("좌표를 얻는 중 에러가 발생했습니다:", error);
        }
    };

    const reverseGeocode = (lat, lng) => {
        if (window.kakao && window.kakao.maps) {
            const geocoder = new window.kakao.maps.services.Geocoder();

            geocoder.coord2RegionCode(lng, lat, (result, status) => {
                if (status === window.kakao.maps.services.Status.OK) {
                    const region = result[0].address_name;
                    setAdministrativeArea(region);
                }
            });
        }
    };

    return {
        coords,
        fullAddress,
        administrativeArea,
        geocodeAddress,
    };
}