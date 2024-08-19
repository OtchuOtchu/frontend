import React,{useState} from 'react';
import SelectedClothes from './SelectedClothes';
import StyleSet from './StyleSet';
import useClothesStore from '../../store/ClothesStore';

export default function Tab({ label, isActive, onClick }) {
    
    const likedClothesCount = useClothesStore(state => state.clothes.filter(item => item.liked).length);
    // 특정 날짜에 입은 옷(set)를 불러오는 함수
    const likedSetsCount = useClothesStore(state => Object.keys(state.outfitSets).length);
    
    const [activeTab, setActiveTab] = useState('selectedClothes');

    const renderContent = () => {
        if (activeTab === 'selectedClothes') {
            return <SelectedClothes />;
        } else if (activeTab === 'styleSet') {
            return <StyleSet />;
        }
    };
    return (
        <div className='w-[1200] flex flex-col items-center'>
            <div className="w-full flex p-2 border-b-2 border-gray-300">
               
                <button
                    className={`py-2 px-4 w-full text-2xl font-bold bg-white
                        ${activeTab === 'selectedClothes' 
                            ? 'text-gray-500' 
                            : 'text-gray-400'} focus:outline-none  hover:bg-gray-50`}
                    onClick={() => setActiveTab('selectedClothes')}
                    style={{ border:'none' }}
                        >
                        <div className="flex justify-center items-center">
                            CLOSET ({likedClothesCount})
                        </div>
                </button>

                
                <button
                        className={`py-2 px-4 w-full text-2xl font-bold bg-white border-l-2 border-gray-300
                            ${activeTab === 'styleSet' 
                            ? 'text-gray-500' 
                            : 'text-gray-400'} focus:outline-none  hover:bg-gray-50`}
                        onClick={() => setActiveTab('styleSet')}
                        style={{ borderTop: 'none', borderRight: 'none', borderBottom: 'none' }}
                    >
                        <div className="flex justify-center items-center">
                            STYLE({likedSetsCount})
                        </div>
                </button>
        
            </div>

            <div className="mt-4">
                {renderContent()}
            </div>
        </div>
    );
}
