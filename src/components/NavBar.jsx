import React from "react";
import { Link } from "react-router-dom";
import LocationModal from "./Location";

export default function Navbar() {
    return (
        <nav className="bg-white w-full flex justify-between items-center py-4 px-8">
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
