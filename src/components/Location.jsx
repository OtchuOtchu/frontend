import { useNavigate } from "react-router-dom";

import BlackButton from "./BlackButton";
import InputForm from "./InputForm";
import Map from "./Map";
import Modal from "./Modal";

export default function LocationModal() {
  const navigate = useNavigate();

  function closeHandler() {
    navigate('/recommend');
  }

  return (
    <Modal>
      <div>
        <div className="w-full flex-col justify-start items-center gap-[10px] inline-flex">
          <h2 className="text-xl font-bold mb-4">지역을 선택하세요</h2>
          {/* <div className="flex">
            <InputForm placeholder="위치를 입력하세요" />
            <BlackButton label="Search" className="w-[6px]" />
          </div> */}
          <Map />
          <BlackButton label={"닫기"} onClick={closeHandler} />
        </div>
      </div>
    </Modal>
  );
}