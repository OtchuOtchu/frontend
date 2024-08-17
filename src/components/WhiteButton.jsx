const WhiteButton = ({ label, onClick }) =>{
    return (
     
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

        
    )
}
export default WhiteButton;

