import React, { useState } from "react";
import { loadKakaoMapsApi } from '../api/mapAPI';

export default function PostcodeToAdministrativeArea() {
  const [fullAddress, setFullAddress] = useState("");
  const [administrativeArea, setAdministrativeArea] = useState("");

  const handleComplete = async (data) => {
    try {
      await loadKakaoMapsApi();
      let address = data.address;
      setFullAddress(address);
      if (window.kakao && window.kakao.maps) {
        console.log('성공!');
        geocodeAddress(address);
      } else {
        console.error("카카오 맵 API가 로드되지 않았습니다.");
      }
    } catch (error) {
      console.error("API 로드 중 에러 발생:", error);
    }
  };

  const geocodeAddress = (address) => {
    const geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.addressSearch(address, (result, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
        reverseGeocode(coords);
      }
    });
  };

  const reverseGeocode = (coords) => {
    const geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), (result, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const region = result[0].address_name; 
        setAdministrativeArea(region);
      }
    });
  };

  const loadDaumPostcode = () => {
    const script = document.createElement("script");
    script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.onload = () => {
      const Postcode = new window.daum.Postcode({
        oncomplete: handleComplete,
      });
      Postcode.open();
    };
    document.body.appendChild(script);
  };

  return (
    <div>
      <button onClick={loadDaumPostcode}>우편번호 검색</button>
      <div>입력한 주소: {fullAddress}</div>
      <div>행정구역: {administrativeArea}</div>
    </div>
  );
}
