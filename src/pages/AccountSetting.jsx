import { useState } from "react";
import GrayInput from "../components/grayinput";
import BlackButton from "../components/BlackButton";

export default function AccountSetting() {
    const [nickname, setNickname] = useState("");
    const [gender, setGender] = useState("");
    const [style, setStyle] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // 회원가입 처리 로직
    };
    
    return (
        <div className="w-screen flex justify-center min-h-screen gap-10">
            <div>
                <div className="w-[200px] h-[200px] bg-gray-200">내사진</div>
                <div>sh1220@naver.com</div>
                <div>이메일은 변경할 수 없습니다.</div>
            </div>
            <div className="w-[551px] h-[744px] flex-col justify-start items-start gap-[27px] inline-flex">
            <div className=" text-black text-3xl font-normal font-['Libre Bodoni']">회원정보 수정</div>
            <form onSubmit={handleSubmit}>
                
                    <GrayInput 
                        label="닉네임" 
                        type="text" 
                        value={nickname} 
                        onChange={(e)=> setNickname(e.target.value)}
                    />
                    <GrayInput 
                        label="성별" 
                        type="text" 
                        value={gender} 
                        onChange={(e)=> setGender(e.target.value)}
                        
                    />
                    <GrayInput 
                        label="스타일" 
                        type="text" 
                        value={style} 
                        onChange={(e)=> setStyle(e.target.value)}
                        
                    />
                    <GrayInput 
                        label="키" 
                        type="text" 
                        value={height} 
                        onChange={(e)=> setHeight(e.target.value)}
                        
                    />
                    <GrayInput 
                        label="몸무게" 
                        type="text" 
                        value={weight} 
                        onChange={(e)=> setWeight(e.target.value)}
                        
                    />
                
                <BlackButton label={"수정완료"} type="submit"/>
            </form>
            
        </div>
        </div>

    );
}