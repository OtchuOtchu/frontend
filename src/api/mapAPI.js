export function loadKakaoMapsApi() {
    return new Promise((resolve, reject) => {
        if (window.kakao && window.kakao.maps) {
            resolve(); // 이미 로드된 경우
        } else {
            const kakaoApiKey = import.meta.env.VITE_JAVASCRIPT_KEY;
            const script = document.createElement('script');
            script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoApiKey}&libraries=services&autoload=false`;  // autoload=false 추가
            script.async = true;  // async 속성 추가
            script.onload = () => {
                window.kakao.maps.load(() => {  // maps load 콜백 사용
                    resolve();
                });
            };
            script.onerror = (e) => reject(e);
            document.head.appendChild(script);
        }
    });
}

// 지도용
// export function loadKakaoMapsApi() {
//     return new Promise((resolve, reject) => {
//         const script = document.createElement('script');
//         const kakaoApiKey = import.meta.env.VITE_KAKAO_MAP_API_KEY; // Vite 환경 변수 접근
//         script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoApiKey}&autoload=false`;
//         script.onload = () => window.kakao.maps.load(resolve);
//         script.onerror = (error) => reject(new Error("Failed to load Kakao Maps API"));
//         document.head.appendChild(script);
//     });
// }
