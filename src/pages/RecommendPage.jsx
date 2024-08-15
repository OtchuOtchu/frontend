import DateShift from "../components/Recommend/DateShift";
import Recommend from "../components/Recommend/Recommend";
import Weather from "../components/Recommend/Weather";

export default function Recommendation() {

    return (
        <div>
            <DateShift />
            <Recommend />
            {/* <Weather /> */}
        </div>
    );
}