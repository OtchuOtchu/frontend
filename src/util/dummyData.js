
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

// Firebase Storage에서 폴더의 모든 이미지를 가져오는 함수
export async function fetchImagesFromFolder(folderPath) {
    const storage = getStorage();
    const folderRef = ref(storage, folderPath);

    try {
        const res = await listAll(folderRef);
        const imageUrls = await Promise.all(
            res.items.map(async (itemRef) => {
                const url = await getDownloadURL(itemRef);
                return url;
            })
        );

        console.log('이미지 URLs:', imageUrls);
        return imageUrls;
    } catch (error) {
        console.error("Error fetching images:", error);
    }
}

export const weatherImages=[
    {id:1,  weather: 'sunny', image:'https://firebasestorage.googleapis.com/v0/b/reactfirebasetest-40937.appspot.com/o/images%2Fweather%2Fsunny1.jpg?alt=media&token=2e74560e-3c10-4d2d-a2b1-56f48aeb1416'},
    {id:2,  weather: 'cloudy', image:'https://firebasestorage.googleapis.com/v0/b/reactfirebasetest-40937.appspot.com/o/images%2Fweather%2Fcloudy1.jpg?alt=media&token=953e136c-c9fb-4050-bc08-5f763f0ffcd3'},
    {id:3,  weather: 'snowy', image:'https://firebasestorage.googleapis.com/v0/b/reactfirebasetest-40937.appspot.com/o/images%2Fweather%2Fwinter1.jpg?alt=media&token=551c16b2-aeae-4a80-88d5-9a24fa89e716'},
    {id:4,  weather: 'rainy', image:'https://firebasestorage.googleapis.com/v0/b/reactfirebasetest-40937.appspot.com/o/images%2Fweather%2Frainy3.jpg?alt=media&token=7beb73c2-9334-4374-ab59-700e509ec4c3'},
    {id:5,  weather: 'windy', image:'https://firebasestorage.googleapis.com/v0/b/reactfirebasetest-40937.appspot.com/o/images%2Fweather%2Fwindy2.jpg?alt=media&token=9327b695-d6ed-4c58-b66d-760aa44338f5'},
]


export const initialClothes = [
    { id: 1, image: 'https://example.com/tshirt.png', category: '상의', weather: 'rainy', minTemp: 20, maxTemp: 30, liked: false },
    { id: 2, image: 'https://example.com/hoodie.png', category: '상의', weather: 'cloudy', minTemp: 10, maxTemp: 20, liked: true },
    { id: 3, image: 'https://example.com/jacket.png', category: '아우터', weather: 'rainy', minTemp: 5, maxTemp: 15, liked: false },
    { id: 4, image: 'https://example.com/coat.png', category: '아우터', weather: 'snowy', minTemp: -5, maxTemp: 5, liked: true },
    { id: 5, image: 'https://example.com/shorts.png', category: '하의', weather: 'sunny', minTemp: 25, maxTemp: 35, liked: false },
    { id: 6, image: 'https://example.com/jeans.png', category: '하의', weather: 'cloudy', minTemp: 15, maxTemp: 25, liked: true },
    { id: 7, image: 'https://example.com/boots.png', category: '신발', weather: 'rainy', minTemp: 5, maxTemp: 15, liked: false },
    { id: 8, image: 'https://example.com/sandals.png', category: '신발', weather: 'sunny', minTemp: 20, maxTemp: 35, liked: true },
    { id: 9, image: 'https://example.com/scarf.png', category: '액세서리', weather: 'windy', minTemp: 5, maxTemp: 20, liked: false },
    { id: 10, image: 'https://example.com/hat.png', category: '액세서리', weather: 'sunny', minTemp: 20, maxTemp: 35, liked: true },
];


export const initialOutfitSets = {
    '2023-07-20': [1, 3, 7], // 2023년 7월 20일에 1번, 3번, 7번 옷이 세트로 사용됨
    '2023-07-21': [2, 4, 8], // 2023년 7월 21일에 2번, 4번, 8번 옷이 세트로 사용됨
    // 추가 날짜별 세트...
};