import React from 'react';

const ClothingItem = ({ item, toggleLiked }) => {
  if (!item || Object.keys(item).length === 0) {
    return <div className="relative bg-white border border-gray-300 w-full h-32"></div>;
  }

  return (
    <div className="relative bg-white border border-gray-300 w-full">
      <img src={item.image} alt="clothing item" className="w-full h-32 object-cover" />
      <div className="absolute bottom-2 right-2">
        <button 
          onClick={() => toggleLiked && toggleLiked(item.id)}
          className="p-2 bg-transparent border-none"
          style={{
            boxShadow: 'none',
            border: 'none',
            outline: 'none'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill={item.liked ? "black" : "none"} stroke="black">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ClothingItem;
