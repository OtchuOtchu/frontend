import { useRef, useState } from 'react';

export default function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState(null); // 선택 이미지 관리
    const imageInput = useRef(); // 이미지 input 요소 접근

    function handlePickClick() {
        imageInput.current.click(); // imageInput 요소 클릭하여 파일 선택 창 열기
    }

    function handleImageChange(event) {
        const file = event.target.files[0]; // 첫 번째 파일 가져옴

        if (!file) { // 파일 없을 경우 상태 초기화
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader(); // FileReader 객체 사용하여 파일 읽어들임

        // 파일 읽히면 실행
        fileReader.onload = () => {
            setPickedImage(fileReader.result); // 읽힌 파일 데이터 URL pickedImage 상태로 설정
        };
        fileReader.readAsDataURL(file); // 파일 Data URL 형식으로 읽기
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
