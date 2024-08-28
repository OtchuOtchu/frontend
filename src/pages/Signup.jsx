import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import usePeopleStore from "../store/PeopleStore";

import InputForm from "../components/InputForm";
import BlackButton from "../components/BlackButton";

export default function Signup() {
    const navigate = useNavigate();
    const { loggedInUser, setPeople, people } = usePeopleStore();

    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");
    const [gender, setGender] = useState("");
    const [style, setStyle] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            nickname: nickname || "임시닉네임",
            gender: gender || "선택안함",
            email: loggedInUser.email,
            style: style || "캐주얼",
            height: height || "0",
            weight: weight || "0",
        };

        setPeople([...people, newUser]);

        const userChoice = window.confirm("가입이 완료되었습니다!\n\n로그인하러 가시겠습니까?");
        if (userChoice) {
            navigate('/login');
        } else {
            navigate('/');
        }
    };
    // 회원가입 처리 로직

    const styles = [
        "시크", "도도", "귀여운", "캐주얼", "스포티", "보헤미안", "모던", "빈티지", "프레피", "페미닌"
    ];

    return (
        <div className="w-screen flex justify-center items-center min-h-screen">
            <div className="w-[551px] h-[744px] flex-col justify-start items-start gap-[27px] inline-flex">
                <div className=" text-black text-3xl font-normal font-['Libre Bodoni']">회원정보 입력</div>
                <form onSubmit={handleSubmit}>
                    <InputForm
                        label="이메일 (변경할 수 없습니다.)"
                        type="text"
                        value={loggedInUser.email}
                        readOnly
                        className="text-gray-300"
                    />

                    <InputForm
                        label="닉네임"
                        type="text"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        placeholder={"닉네임을 입력하세요."}
                    />
                    <div className="flex flex-col gap-2 mb-4 w-full">
                        <label className="text-black text-xl font-normal">성별</label>
                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={() => setGender('남')}
                                className={`w-[50%] h-[60px] ${gender === '남' ? 'bg-blue-500 text-white' : 'bg-neutral-50 border-b border-black'}`}
                            >
                                남
                            </button>
                            <button
                                type="button"
                                onClick={() => setGender('녀')}
                                className={`w-[50%] h-[60px] ${gender === '녀' ? 'bg-pink-500 text-white' : 'bg-neutral-50 border-b border-black'}`}
                            >
                                여
                            </button>
                        </div>
                    </div>
                    <InputForm
                        label="스타일"
                        type="select"
                        value={style}
                        onChange={(e) => setStyle(e.target.value)}
                        options={styles.map((style, index) => (
                            <option key={index} value={style}>
                                {style}
                            </option>
                        ))}
                    />
                    <InputForm
                        label="키"
                        type="text"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder={"키를 입력하세요."}
                    />
                    <InputForm
                        label="몸무게"
                        type="text"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder={"몸무게를 입력하세요."}
                    />

                    <BlackButton label={"가입완료"} type="submit" />
                </form>
            </div>
        </div>
    );
}