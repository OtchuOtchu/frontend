import React from 'react';

export default function LocationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4">Location</h2>
        <p>여기에 위치 정보를 표시합니다.</p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          닫기
        </button>
      </div>
    </div>
  );
}