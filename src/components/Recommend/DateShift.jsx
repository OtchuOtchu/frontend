import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function DateShift() {
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).replace(/\./g, '-').replace(/-$/, '').replace(/\s/g, '');

    return (
        <div className="w-full bg-black text-white">
            <div className="flex items-center justify-between px-4 py-2">
                <IoIosArrowBack size={24} />
                {/* <div onClick={prevDay} /> */}
                <div>Yesterday</div>
                <span className="text-lg font-semibold">
                    {dateString}
                </span>
                <div>Tomorrow</div>
                {/* <div onClick={nextDay} /> */}
                <IoIosArrowForward size={24} />
            </div>
        </div>
    );
}
