// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

export default function Signup() {
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

    return (
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
        <div>
            <h2>회원가입</h2>
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>

    );
}