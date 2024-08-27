// src/components/ImagePicker.js
import { useRef, useState } from 'react';

export default function ImagePicker({ label, name, onImageSelect }) {
    const [pickedImage, setPickedImage] = useState(null); // 상태로 선택된 이미지 미리보기 저장
    const imageInput = useRef(); // 파일 input 요소에 접근하기 위한 ref

    // 파일 선택 버튼 클릭 시 호출
    function handlePickClick() {
        imageInput.current.click(); // 파일 선택 창 열기
    }

    // 파일 선택 시 호출
    function handleImageChange(event) {
        const file = event.target.files[0]; // 선택된 파일 가져오기

        if (!file) { // 파일이 없을 경우 상태 초기화
            setPickedImage(null);
            onImageSelect(null); // 부모 컴포넌트에 null 전달
            return;
        }

        const fileReader = new FileReader(); // 파일을 읽기 위한 FileReader 객체 생성

        // 파일이 읽힌 후 실행되는 함수
        fileReader.onload = () => {
            setPickedImage(fileReader.result); // 읽힌 파일 데이터 URL로 미리보기 이미지 상태 설정
            onImageSelect(file); // 부모 컴포넌트에 파일 객체 전달
        };

        fileReader.readAsDataURL(file); // 파일을 Data URL 형식으로 읽기
    }

    return (
        <div className="relative p-4 bg-white rounded-lg shadow-md">
            <label htmlFor={name} className="block text-lg font-medium mb-2">
                {label}
            </label>
            <div className="flex items-start gap-6 mb-4">
                <input
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    ref={imageInput}
                    onChange={handleImageChange}
                    className="hidden"
                />
                <button
                    type="button"
                    onClick={handlePickClick}
                    className="bg-gray-300 hover:bg-gray-400 text-white py-2 px-4 rounded cursor-pointer"
                >
                    <div className="w-40 h-40 border-none flex items-center justify-center relative overflow-hidden">
                        {!pickedImage && <p>사진 업로드하기</p>}
                        {pickedImage && (
                            <img
                                src={pickedImage}
                                alt="The image selected by the user."
                                className="object-cover w-full h-full absolute inset-0"
                            />
                        )}
                    </div>
                </button>
            </div>
        </div>
    );
}
