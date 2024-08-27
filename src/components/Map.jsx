import React, { useEffect, useRef } from 'react';
import { loadKakaoMapsApi } from '../api/mapAPI';

export default function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      try {
        await loadKakaoMapsApi();
        const container = mapRef.current;
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3
        };
        new window.kakao.maps.Map(container, options);
      } catch (error) {
        console.error("Failed to load Kakao Maps:", error);
      }
    };

    initMap();
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
}