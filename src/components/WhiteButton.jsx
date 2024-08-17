const WhiteButton = ({ label, onClick }) =>{
    return (
        
<<<<<<< Updated upstream
            <div 
            className="w-[441px] h-[72px] px-[100px] 
            bg-white text-black py-5 
            border border-neutral-300 justify-center items-center 
            inline-flex
            hover:bg-gray-100">

                     <div 
                     onClick={onClick} 
                     className="Google text-black text-xl font-semibold font-['Inter'] leading-normal">
                        {label}
                    </div>
            </div>
=======
            <button
            className="w-[441px] h-[72px] px-[100px] py-5 
            bg-white text-black 
            border border-neutral-300 justify-center items-center 
            inline-flex
            hover:bg-gray-100 cursor-pointer">

                     <div 
                     onClick={onClick} 
                     className="Google text-black text-xl font-semibold 
                     leading-normal">
                        {label}
                    </div>
            </button>
>>>>>>> Stashed changes
        
    )
}
export default WhiteButton;

