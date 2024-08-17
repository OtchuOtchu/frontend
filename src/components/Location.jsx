import BlackButton from "./BlackButton";
import GrayInput from "./grayinput";
import Map from "./Map";

export default function LocationModal({ isOpen, onClose }) {
  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 flex-col  rounded-sm shadow-lg max-w-[800px] w-full ">
        <div className="w-full h-[620px] flex-col justify-start items-center gap-[10px] inline-flex">
          <h2 className="text-xl font-bold mb-4">지역을 선택하세요</h2>
          <div className="flex">
            <GrayInput placeholder="위치를 입력하세요" />
            <BlackButton label="Search" className="w-[6px]" />
          </div>
          <Map />
          <BlackButton onClick={onClose} label={"닫기"}/>
        </div>
        </div>
      </div>

  );
}