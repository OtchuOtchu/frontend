import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase/fbInstance';

import useClothesStore from '../../store/ClothesStore';

import ImagePicker from './ImagePicker';
import Modal from '../Modal';

export default function AddForm() {
    const [category, setCategory] = useState('');
    const [weather, setWeather] = useState('');
    const [image, setImage] = useState(null);
    const [imageURL, setImageURL] = useState(''); // Store the uploaded image URL
    const [tempMax, setTempMax] = useState(''); // 최고 온도
    const [tempMin, setTempMin] = useState(''); // 최저 온도

    const navigate = useNavigate();

    const addClothes = useClothesStore((state) => state.setClothes);

    async function handleSubmit(event) {
        event.preventDefault();

        if (image && category && weather && tempMax && tempMin) {
            try {
                // Firebase 스토리지에 이미지 업로드
                const imageRef = ref(storage, `images/${Date.now()}_${image.name}`);
                await uploadBytes(imageRef, image);

                // 이미지 URL 가져오기
                const url = await getDownloadURL(imageRef);
                setImageURL(url);

                // 새로운 옷 아이템 생성
                const newClothing = {
                    id: Date.now(),
                    image: url, // Firebase에서 가져온 이미지 URL 사용
                    category,
                    weather,
                    tempMax: parseFloat(tempMax),
                    tempMin: parseFloat(tempMin),
                    liked: false,
                };

                // 상태 업데이트
                addClothes((prevClothes) => [...prevClothes, newClothing]);
                navigate('/recommend');
            } catch (error) {
                console.error('Error uploading image:', error);
                alert('이미지 업로드에 실패했습니다.');
            }
        } else {
            alert('모든 필드를 입력해주세요.');
        }
    }

    function closeHandler() {
        navigate('/recommend');
    }

    return (
        <Modal>
            <button
                onClick={closeHandler}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
                &#10005;
            </button>
            <h1 className="text-2xl font-bold mb-4 text-center">추가하고 싶은 옷을 올려주세요.</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col items-center">
                    <div className="flex items-center mb-4 w-1/2">
                        <label htmlFor="category" className="w-1/3 text-right mr-4">옷 카테고리</label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                            className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled>선택하세요</option>
                            <option value="상의">상의</option>
                            <option value="하의">하의</option>
                            <option value="신발">신발</option>
                            <option value="아우터">아우터</option>
                            <option value="아이템">아이템</option>
                        </select>
                    </div>
                    <div className="flex items-center mb-4 w-1/2">
                        <label htmlFor="weather" className="w-1/3 text-right mr-4">날씨</label>
                        <select
                            id="weather"
                            value={weather}
                            onChange={(e) => setWeather(e.target.value)}
                            required
                            className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled>선택하세요</option>
                            <option value="맑음">맑음</option>
                            <option value="구름">구름</option>
                            <option value="비">비</option>
                            <option value="눈">눈</option>
                        </select>
                    </div>
                    <div className="flex items-center mb-4 w-1/2">
                        <label htmlFor="tempMax" className="w-1/3 text-right mr-4">최고 온도</label>
                        <input
                            type="number"
                            id="tempMax"
                            value={tempMax}
                            onChange={(e) => setTempMax(e.target.value)}
                            required
                            className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="flex items-center mb-4 w-1/2">
                        <label htmlFor="tempMin" className="w-1/3 text-right mr-4">최저 온도</label>
                        <input
                            type="number"
                            id="tempMin"
                            value={tempMin}
                            onChange={(e) => setTempMin(e.target.value)}
                            required
                            className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="w-1/2 mb-4">
                        <div className="flex justify-center">
                            <ImagePicker onImageSelect={setImage} />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <button
                        type="submit"
                        className="py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75"
                    >
                        옷 추가하기
                    </button>
                </div>
            </form>
        </Modal>
    );
}