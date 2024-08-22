import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import LocationModal from "./Location";

export default function MainNavigation() {
    const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

    const openLocationModal = () => {
        setIsLocationModalOpen(true);
    };

    const closeLocationModal = () => {
        setIsLocationModalOpen(false);
    };

    useEffect(() => {
        console.log("Modal state:", isLocationModalOpen);
    }, [isLocationModalOpen]);

    return (
        <nav className="w-full max-w-[1200px] min-w-[340px] mx-auto flex justify-between items-center px-8 py-4">
            <div className="text-gray-scale-1 text-xl font-bold">
                <Link to="/recommend" className="text-gray-scale-1 text-lg">Logo</Link>
            </div>
            <div className="flex gap-10">
                <div 
                    className="text-gray-scale-1 text-lg cursor-pointer"
                    onClick={openLocationModal}
                >
                    Location
                </div>
                <Link to="/mypage" className="text-gray-scale-1 text-lg">My Page</Link>
            </div>
            {isLocationModalOpen && (
                <LocationModal isOpen={isLocationModalOpen} onClose={closeLocationModal} />
            )}
        </nav>
    )
}