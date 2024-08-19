'use client';


import { useRef, useState } from 'react';
import classes from './ImagePicker.module.css';


export default function ImagePicker({ label, name }) {
    // 선택된 이미지를 관리
    const [pickedImage, setPickedImage] = useState();
    // 이미지 input 요소에 접근.
    const imageInput = useRef();

    // 'Pick an Image' 버튼이 클릭되었을 때 호출되는 함수입니다.
    function handlePickClick() {
        // imageInput 요소를 클릭하여 파일 선택 창을 엽니다.
        imageInput.current.click();
    }

    function handleImageChange(event) {
        // 첫 번째 파일을 가져옴
        const file = event.target.files[0];

        // 파일 없을 경우 상태를 초기화
        if (!file) {
            setPickedImage(null);
            return;
        }

        // FileReader 객체 사용하여 파일 읽어들임
        const fileReader = new FileReader();

        // 파일 읽히면 실행
        fileReader.onload = () => {
            // 읽힌 파일 데이터 URL pickedImage 상태로 설정
            setPickedImage(fileReader.result);
        };

        // 파일 Data URL 형식으로 읽기
        fileReader.readAsDataURL(file);
    }

    return (
        <div className={classes.picker}>
            {/* input 요소 연결 label 렌더링. */}
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <input
                    className={classes.input}
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    ref={imageInput}
                    onChange={handleImageChange}
                />
                <button
                    type="button"
                    onClick={handlePickClick}
                >
                    <div className={classes.preview}>
                        {/*이미지 없으면 메시지 표시*/}
                        {!pickedImage && <p>이미지를 선택하세요.</p>}
                        {pickedImage && (
                            <img
                                src={pickedImage}
                                alt="The image selected by the user."
                                fill
                            />
                        )}
                    </div>
                </button>
            </div>
        </div>
    );
}
