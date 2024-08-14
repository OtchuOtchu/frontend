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

        <div className="header row">
            <div className="col col-start">
                <span className="text">
                    <span className="text month">
                        {dateString}
                    </span>
                </span>
            </div>
            <div className="col col-end">
                {/* <div onClick={prevDay} /> */}
                <IoIosArrowBack />
                <div>yesterday</div>
                {/* <div onClick={nextDay} /> */}
                <div>tomorrow</div>
                <IoIosArrowForward />
            </div>
        </div>
    );
}
