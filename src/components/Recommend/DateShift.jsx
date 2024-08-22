import useDateStore from '../../store/DateStore';

export default function DateShift() {
    const { selectedDate, setSelectedDate } = useDateStore();

    // 오늘, 내일, 모레 날짜 계산
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(today.getDate() + 2);

    const formatDate = (date) => {
        return date.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).replace(/\./g, '-').replace(/-$/, '').replace(/\s/g, '');
    };

    //선택 날짜 스타일
    const getClassName = (dateKey) => {
        return dateKey === selectedDate
            ? "bg-black text-white font-semibold py-2 px-4 rounded-full border border-white"
            : "bg-black text-gray-400 py-2 px-4 rounded-full border border-transparent hover:border-white hover:text-white transition";
    };  

    return (
        <div className="w-full bg-black text-white">
            <div className="flex items-center justify-between px-4 py-2">
                <button
                    className={getClassName('today')}
                    onClick={() => setSelectedDate('today')}
                >
                    {formatDate(today)}
                </button>
                <button
                    className={getClassName('tomorrow')}
                    onClick={() => setSelectedDate('tomorrow')}
                >
                    {formatDate(tomorrow)}
                </button>
                <button
                    className={getClassName('dayAfterTomorrow')}
                    onClick={() => setSelectedDate('dayAfterTomorrow')}
                >
                    {formatDate(dayAfterTomorrow)}
                </button>
            </div>
        </div>
    );
}



// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";

// export default function DateShift() {
//     const today = new Date();
//     const dateString = today.toLocaleDateString('ko-KR', {
//         year: 'numeric',
//         month: '2-digit',
//         day: '2-digit'
//     }).replace(/\./g, '-').replace(/-$/, '').replace(/\s/g, '');

//     return (
//         <div className="w-full bg-black text-white">
//             <div className="flex items-center justify-between px-4 py-2">
//                 {/* <IoIosArrowBack size={24} /> */}
//                 {/* <div onClick={prevDay} /> */}
//                 <div>Yesterday</div>
//                 <span className="text-lg font-semibold">
//                     {dateString}
//                 </span>
//                 <div>Tomorrow</div>
//                 {/* <div onClick={nextDay} /> */}
//                 {/* <IoIosArrowForward size={24} /> */}
//             </div>
//         </div>
//     );
// }