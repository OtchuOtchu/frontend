import React, { useState } from "react";
import InputForm from "../components/InputForm";
import BlackButton from "../components/BlackButton";
import { useNavigate } from "react-router-dom";
import usePeopleStore from "../store/PeopleStore";

export default function Signup() {
    const navigate=useNavigate();
    const {loggedInUser, setPeople, people} = usePeopleStore();

    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");
    const [gender, setGender] = useState("");
    const [style, setStyle] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    
    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            nickname,
            gender,
            email: loggedInUser.email,
            style,
            height,
            weight,
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
                    <InputForm
                        label="성별"
                        type="text"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        placeholder={"성별을 입력하세요."}
                    />
                    <InputForm
                        label="스타일"
                        type="text"
                        value={style}
                        onChange={(e) => setStyle(e.target.value)}
                        placeholder={"선호하는 스타일을 입력하세요."}
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