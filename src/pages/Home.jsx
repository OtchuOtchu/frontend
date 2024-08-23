import { useNavigate } from 'react-router-dom';

import BlackButton from "../components/BlackButton"

export default function Home() {
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
    };

    return (
        <div className='w-screen'>
            <div className='flex flex-col justify-center items-center min-h-screen gap-[50px]'>
                <h1>Hello world!</h1>
                <BlackButton label="Login" onClick={goToLogin}></BlackButton>
            </div>
        </div>
    )
}