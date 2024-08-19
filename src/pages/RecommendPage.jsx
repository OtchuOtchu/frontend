import DateShift from "../components/Recommend/DateShift";
import Recommend from "../components/Recommend/Recommend";
import Weather from "../components/Recommend/Weather";

export default function Recommendation() {

    return (
        <div className="flex">
            <div className="flex-col">
                <DateShift />
                <Recommend />
            </div>
            <Weather />
        </div>
    );
}