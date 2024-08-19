import React, { useState } from 'react';

const MyAccount = () => {
  const [userData, setUserData] = useState({
    name: '파송탁',
    email: 'sh1220@hanyang.ac.kr',
    style: '시크',
    height: 160,
    weight: 45
  });

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="w-[80%] mx-auto bg-white">
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
            <div>
              <h2 className="text-xl font-bold flex items-center">
                {userData.name} <span className="ml-2 text-gray-400">&gt;</span>
              </h2>
              <p className="text-sm text-gray-600">{userData.email}</p>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div className="text-center">
              <p className="text-sm text-gray-600">스타일</p>
              <p className="font-bold">{userData.style}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">키</p>
              <p className="font-bold">{userData.height}<span className="text-sm font-normal">cm</span></p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">몸무게</p>
              <p className="font-bold">{userData.weight}<span className="text-sm font-normal">kg</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;