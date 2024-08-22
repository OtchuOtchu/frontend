import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ImagesDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // 사진리스트는 게시글에서 사진을 클릭할 때 navigate state에 담아서 가져왔다.
  const imageList = location.state;
  
  //현재 보고있는 사진의 인덱스
  const [current, setCurrent] = useState(imageList.index);
  
  // Tailwind CSS의 동적 스타일링을 위해 작성한 부분
  const moveStyle = {
    0: 'translate-x-0',
    1: 'translate-x-[-100vw]',
    2: 'translate-x-[-200vw]',
    3: 'translate-x-[-300vw]',
    4: 'translate-x-[-400vw]',
    5: 'translate-x-[-500vw]',
    6: 'translate-x-[-600vw]',
    7: 'translate-x-[-700vw]',
    8: 'translate-x-[-800vw]',
    9: 'translate-x-[-900vw]',
    10: 'translate-x-[-1000vw]',
  };

  // X 버튼을 눌렀을 때 게시글로 돌아감
  const closeBtnHandler = () => {
    navigate(-1);
  };

  // 다음 버튼을 누르면 current를 1 증가시킴, 마지막 사진이면 첫번째 사진으로 이동
  const nextHandler = () => {
    setCurrent(current === imageList.images.length - 1 ? 0 : current + 1);
  };

  // 이전 버튼을 누르면 current를 1 감소시킴, 첫번째 사진이면 마지막 사진으로 이동
  const prevHandler = () => {
    setCurrent(current === 0 ? imageList.images.length - 1 : current - 1);
  };

  return (
    <div className="relative flex h-[100vh] items-center overflow-hidden bg-black-100">
      <button
        onClick={closeBtnHandler}
        className="absolute top-10 right-10 z-[100] h-[3.5rem] w-[3.5rem] rotate-45 bg-black-10 text-white">
        ✕
      </button>
      <div className={`flex max-h-[60%] items-center ${moveStyle[current]} transition`}>
        {imageList.images.map((image) => (
          <div key={image.id} className="w-[100vw]">
            <img src={image.url} className="w-full object-contain" />
          </div>
        ))}
      </div>
      <button
        onClick={nextHandler}
        className="absolute right-4 flex h-[4rem] w-[4rem] items-center justify-center rounded-full bg-black-10 opacity-50 text-white">
        ❯
      </button>
      <button
        onClick={prevHandler}
        className="absolute left-4 flex h-[4rem] w-[4rem] items-center justify-center rounded-full bg-black-10 opacity-50 text-white">
        ❮
      </button>
      <ul className="absolute bottom-20 flex w-full justify-center gap-4">
        {imageList.images.map((_, idx) => (
          <li
            key={idx}
            className={`h-[1.2rem] w-[1.2rem] rounded-full bg-white ${
              idx === current ? 'opacity-100' : 'opacity-50'
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </ul>
    </div>
  );
}
