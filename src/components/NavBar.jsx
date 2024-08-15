import React from "react";
import { Link } from "react-router-dom";
import LocationModal from "./Location";

export default function Navbar() {
    return (
        <nav className="w-full w-[1200px] flex justify-between items-center py-4">
            <div className="text-gray-scale-1 text-xl font-bold">
            <Link to="/" className="text-gray-scale-1 text-lg">Logo</Link>
            </div>
        <div className="flex gap-10">
        <div className="text-gray-scale-1 text-lg cursor-pointer">Location</div>
            <Link to="/mypage" className="text-gray-scale-1 text-lg">My Page</Link>
        </div>
      </nav>

    )
}
