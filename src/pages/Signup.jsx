import React, { useState } from "react";
import GrayInput from "../components/grayinput";
import BlackButton from "../components/BlackButton";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

export default function Signup() {
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
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-[551px] h-[744px] flex-col justify-start items-start gap-[27px] inline-flex">
            <div className=" text-black text-3xl font-normal font-['Libre Bodoni']">회원정보 입력</div>
            <form onSubmit={handleSubmit}>
                
                    <GrayInput 
                        label="닉네임" 
                        type="text" 
                        value={nickname} 
                        onChange={(e)=> setNickname(e.target.value)}
                        placeholder={"닉네임을 입력하세요."}
                    />
                    <GrayInput 
                        label="성별" 
                        type="text" 
                        value={gender} 
                        onChange={(e)=> setGender(e.target.value)}
                        placeholder={"성별을 입력하세요."}
                    />
                    <GrayInput 
                        label="스타일" 
                        type="text" 
                        value={style} 
                        onChange={(e)=> setStyle(e.target.value)}
                        placeholder={"선호하는 스타일을 입력하세요."}
                    />
                    <GrayInput 
                        label="키" 
                        type="text" 
                        value={height} 
                        onChange={(e)=> setHeight(e.target.value)}
                        placeholder={"키를 입력하세요."}
                    />
                    <GrayInput 
                        label="몸무게" 
                        type="text" 
                        value={weight} 
                        onChange={(e)=> setWeight(e.target.value)}
                        placeholder={"몸무게를 입력하세요."}
                    />
                
                <BlackButton label={"가입완료"} type="submit"/>
            </form>
            
        </div>
        </div>

    );
}
// const [username, setUsername] = useState(""); // username 상태를 관리
    // const [password, setPassword] = useState(""); // password 상태를 관리
    // const [email, setEmail] = useState(""); // email 상태를 관리
    // const navigate = useNavigate(); // 페이지 이동을 위한 navigate 함수 사용

    // const handleSubmit = async (e) => {
    //     e.preventDefault(); // 기본 폼 제출 동작을 막음

    //     try {
    //         // axios를 사용하여 회원가입 요청을 서버로 보냄
    //         await axios.post("http://localhost:5000/register", {
    //             username,
    //             password,
    //             email,
    //         });
    //         // 회원가입 성공 시 성공 메시지를 alert로 표시하고 로그인 페이지로 이동
    //         alert("회원가입 성공! 로그인 페이지로 이동합니다.");
    //         navigate("/login"); // 로그인 경로로 이동
    //     } catch (error) {
    //         console.error("회원가입 실패:", error);
    //         // 회원가입 실패 시 에러 메시지를 alert로 표시
    //         alert(
    //             "회원가입 실패: " + (error.response?.data?.message || error.message)
    //         );
    //     }
    // };
//--------------------------------------------------
        // <div className="register-container">
        //     <h2>회원가입</h2>
        //     <form onSubmit={handleSubmit}>
        //         <div>
        //             <label htmlFor="username">Username</label>
        //             <input
        //                 id="username"
        //                 type="text"
        //                 value={username}
        //                 // onChange={(e) => setUsername(e.target.value)}
        //             />
        //         </div>
        //         <div>
        //             <label htmlFor="password">Password</label>
        //             <input
        //                 id="password"
        //                 type="password"
        //                 value={password}
        //                 // onChange={(e) => setPassword(e.target.value)}
        //             />
        //         </div>
        //         <div>
        //             <label htmlFor="email">Email</label>
        //             <input
        //                 id="email"
        //                 type="email"
        //                 value={email}
        //                 // onChange={(e) => setEmail(e.target.value)}
        //             />
        //         </div>
        //         <button type="submit">Register</button>
        //     </form>
        // </div>
