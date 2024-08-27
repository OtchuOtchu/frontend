import React from "react";
import useCoordinates from "../hooks/useCoordinates";

export default function GetAddress() {
  const { coords, fullAddress, administrativeArea, geocodeAddress } = useCoordinates();

  const loadDaumPostcode = () => {
    const script = document.createElement("script");
    script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.onload = () => {
      const Postcode = new window.daum.Postcode({
        oncomplete: (data) => {
          geocodeAddress(data.address);
        },
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