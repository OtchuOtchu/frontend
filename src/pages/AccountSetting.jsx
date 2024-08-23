import { useState } from "react";

import usePeopleStore from "../store/PeopleStore";

import InputForm from "../components/InputForm";
import BlackButton from "../components/BlackButton";

export default function AccountSetting() {
    const { loggedInUser, updateUser } = usePeopleStore(); 
    
    const [nickname, setNickname] = useState(loggedInUser?.nickname || "");
    const [gender, setGender] = useState(loggedInUser?.gender || "");
    const [style, setStyle] = useState(loggedInUser?.style || "");
    const [height, setHeight] = useState(loggedInUser?.height || "");
    const [weight, setWeight] = useState(loggedInUser?.weight || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUser = {
            ...loggedInUser,
            nickname,
            gender,
            style,
            height,
            weight,
        };
        updateUser(updatedUser); 

        alert("회원정보가 수정되었습니다.");
    };

    return (
        <div className="w-screen flex justify-center min-h-screen gap-10">
            <div>
                <div className="w-[200px] h-[200px] bg-gray-200">내사진</div>
                <div>{loggedInUser.email}</div>
                <div>이메일은 변경할 수 없습니다.</div>
            </div>
            <div className="w-[551px] h-[744px] flex-col justify-start items-start gap-[27px] inline-flex">
                <div className=" text-black text-3xl font-normal font-['Libre Bodoni']">회원정보 수정</div>
                <form onSubmit={handleSubmit}>

                    <InputForm
                        label="닉네임"
                        type="text"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                    />
                    <InputForm
                        label="성별"
                        type="text"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}

                    />
                    <InputForm
                        label="스타일"
                        type="text"
                        value={style}
                        onChange={(e) => setStyle(e.target.value)}

                    />
                    <InputForm
                        label="키"
                        type="text"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}

                    />
                    <InputForm
                        label="몸무게"
                        type="text"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}

                    />

                    <BlackButton label={"수정완료"} type="submit" />
                </form>

            </div>
        </div>

    );
}