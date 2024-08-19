import React from 'react';
import SelectedClothes from './SelectedClothes';
import StyleSet from './StyleSet';

export default function Tab({ label, isActive, onClick }) {
    return (
        <div>
        <button
            className={`py-2 px-4 ${isActive ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'} focus:outline-none`}
            onClick={onClick}
        >
            {label}
            <div className="flex justify-center items-center mb-6">
        <h2 className="text-2xl font-bold mr-4">CLOSET</h2>
        <div className="border-l h-8"></div>
        <h2 className="text-2xl font-bold text-gray-400 ml-4">STYLE </h2>
      </div>
        </button>
        </div>
    );
}
