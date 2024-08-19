import { Link } from "react-router-dom";

import { IoIosAddCircleOutline } from "react-icons/io";

import RecommendProducts from "./RecommendProducts";

export default function Recommend() {



  return (
    <div>
      <Link to="/addform">
        <IoIosAddCircleOutline className="text-4xl" />
      </Link>
      <RecommendProducts />

      <button className="bg-black text-white rounded-sm">Capture my outfit</button>
    </div>
  );
}
