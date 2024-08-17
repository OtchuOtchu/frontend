import React from 'react';

const MyAccount = () => {
    return (
        <div className="bg-white p-6 rounded-lg mx-auto w-[80%] max-w-[1500px]">
            <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="flex items-center space-x-4 mb-4 md:mb-0 flex-shrink-0">
                    <img 
                        src="https://via.placeholder.com/64" 
                        alt="User Avatar" 
                        className="w-16 h-16 rounded-full"
                    />
                    <div>
                        <h2 className="text-xl font-semibold">User Name</h2>
                        <p className="text-gray-500">user@example.com</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-end flex-grow space-y-4 md:space-y-0 md:space-x-8">
                    <div className="flex flex-col items-center">
                        <p className="text-gray-600">스타일</p>
                        <p className="text-black font-medium">시크</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-gray-600">키</p>
                        <p className="text-black font-medium">160cm</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-gray-600">몸무게</p>
                        <p className="text-black font-medium">45kg</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;

