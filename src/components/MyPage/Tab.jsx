import React,{useState} from 'react';
import SelectedClothes from './SelectedClothes';
import StyleSet from './StyleSet';

export default function Tab({ label, isActive, onClick }) {
    const [activeTab, setActiveTab] = useState('selectedClothes');

    const renderContent = () => {
        if (activeTab === 'selectedClothes') {
            return <SelectedClothes />;
        } else if (activeTab === 'styleSet') {
            return <StyleSet />;
        }
    };
    return (
        <div className='flex flex-col items-center '>
            <div className="flex">
                <button
                    className={`py-2 px-4 ${isActive ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'} focus:outline-none`}
                    onClick={() => setActiveTab('selectedClothes')}
                        >
                            {label}
                            <div className="flex justify-center items-center mb-6">
                        <div 
                        
                        className="text-2xl font-bold mr-4">CLOSET</div>
                    </div>
                </button>

                <div className="border-l h-8"></div>
                
                <button
                    className={`py-2 px-4 ${isActive ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'} focus:outline-none`}
                    onClick={() => setActiveTab('styleSet')}
                        >
                            {label}
                            <div className="flex justify-center items-center mb-6">
                        <div 
                        
                        className="text-2xl font-bold text-gray-400 mr-4">STYLE</div>
                    </div>
                </button>
        
            </div>

            <div className='flex'>
                    <button
                        className={`py-2 px-4 ${activeTab === 'selectedClothes' 
                            ? 'border-b-2 border-blue-500 text-blue-500' 
                            : 'text-gray-500'} focus:outline-none`}
                        onClick={() => setActiveTab('selectedClothes')}
                    >
                        <div className="flex justify-center items-center">
                            <div className="text-2xl font-bold mr-4">CLOSET</div>
                        </div>
                    </button>

                    <div className="border-l h-8 mx-4"></div>
                    
                    <button
                        className={`py-2 px-4 ${activeTab === 'styleSet' 
                            ? 'border-b-2 border-blue-500 text-blue-500' 
                            : 'text-gray-500'} focus:outline-none`}
                        onClick={() => setActiveTab('styleSet')}
                    >
                        <div className="flex justify-center items-center">
                            <div className="text-2xl font-bold text-gray-400">STYLE</div>
                        </div>
                    </button>
        </div>


            <div className="mt-4">
                {renderContent()}
            </div>
        </div>
    );
}
