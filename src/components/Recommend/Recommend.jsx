import { Link } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import RecommendProducts from "./RecommendProducts";

export default function Recommend() {
  return (
    <div>
      <Link to="/addform" className="inline-block">
        <IoIosAddCircleOutline className="text-4xl" />
      </Link>
      <RecommendProducts />
    </div>
  );
}
