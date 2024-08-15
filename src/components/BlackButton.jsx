import React from 'react';

const BlackButton = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-[441px] h-[72px] bg-black text-white text-xl font-semibold leading-normal flex justify-center items-center gap-2.5 px-[100px] py-5 rounded-lg"
        >
            {label}
        </button>
    );
};

export default BlackButton;