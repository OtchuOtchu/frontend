import React, { useEffect, useRef } from 'react';

export default function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    const container = mapRef.current;
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };

    const map = new window.kakao.maps.Map(container, options);
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
}
