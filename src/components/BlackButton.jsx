import React from 'react';

export default function BlackButton({ label, onClick, className }) {
    return (
        <button
            onClick={onClick}
            className={`w-[441px] h-[72px] bg-black 
                text-white text-xl font-semibold leading-normal flex justify-center items-center 
                gap-2.5 px-[100px] py-5 rounded-sm ${className}`}
        >
            {label}
        </button>
    );
};

