import DateShift from "../components/Recommend/DateShift";
import Recommend from "../components/Recommend/Recommend";
import Weather from "../components/Recommend/Weather";

export default function Recommendation() {
    return (
        <div className="flex h-screen">
            <div className="flex flex-col flex-1 overflow-y-auto">
                <DateShift />
                <Recommend />
            </div>
            <Weather className="flex-1" />
        </div>
    );
}
