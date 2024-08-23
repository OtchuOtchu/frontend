import { signOut } from "firebase/auth";
import { authService } from "../../firebase/fbInstance";
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import usePeopleStore from '../../store/PeopleStore';

const MyAccount = () => {
  const navigate = useNavigate();
  const { loggedInUser } = usePeopleStore(state => ({
    loggedInUser: state.loggedInUser || null
  }));
  const userData = loggedInUser;

  const handleAccountSettingClick = () => {
    navigate('/accountsetting');
  };

  if (!loggedInUser) {
    return <div>
      로그인이 필요합니다
      <p>
        <a href="http://localhost:5173/login" className="text-blue-500 hover:underline">
          로그인하러 가기
        </a>
      </p>
    </div>;
  }

  const handleLogout = async () => {
    try {
      await signOut(authService);
      alert("로그아웃 되었습니다.");
      navigate("/login"); // 로그아웃 후 로그인 페이지로 리디렉션
    } catch (error) {
      console.error("로그아웃 오류:", error);
      alert("로그아웃 중 오류가 발생했습니다.");
    }
  };


  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="w-[80%] mx-auto bg-white">
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
            <div>
              <h2 className="text-xl font-bold flex items-center">
                {userData.nickname}
                <span
                  className="ml-2 text-gray-400 cursor-pointer"
                  onClick={handleAccountSettingClick}>
                  &gt;</span>
              </h2>
              <p className="text-sm text-gray-600">{userData.email}</p>
              <button onClick={handleLogout} className="logout-button">
                로그아웃
              </button>
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