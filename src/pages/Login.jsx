import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { authService } from '../firebase/fbInstance';
import { useNavigate } from 'react-router-dom';
import BlackButton from '../components/BlackButton';
import WhiteButton from '../components/WhiteButton';



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
       <div className='w-screen flex justify-center items-center min-h-screen'>
            <div className="w-[629px] h-[318px] flex-col justify-start items-center gap-[50px] inline-flex">
                <h1 className='text-black text-[50px] font-bold italic'>Welcome to OtchuOtchu</h1>
                <div className='flex flex-col gap-[20px]'>
                    <WhiteButton label={"Login in Google"} onClick={handleGoogleSign}/>
                    <BlackButton label={"Sign Up"} onClick={goToSignup}/>
                </div>
            </div>
        </div>
    );
}

export default Login;