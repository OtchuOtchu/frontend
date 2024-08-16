import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { authService } from '../firebase/fbInstance';
import { useNavigate } from 'react-router-dom';
import BlackButton from '../components/BlackButton';



function Login() {
    const navigate = useNavigate();
    const handleGoogleSign = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(authService, provider).then((data) => {
            console.log(data);
        }).catch((err) => console.log(err));
    }
    
    const goToSignup = () => {
        navigate('/signup');
    };

    return (
       <div className='flex justify-center items-center min-h-screen'>
            <div className="w-[629px] h-[318px] flex-col justify-start items-center gap-[50px] inline-flex">
                <h1 className='text-black text-[50px] font-bold italic'>Welcome to OtchuOtchu</h1>
                <button onClick={handleGoogleSign}>Login in Google</button>
                
                <BlackButton label={"회원가입하러가기"} onClick={goToSignup}/>
            </div>
        </div>
    );
}

export default Login;