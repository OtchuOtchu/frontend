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
            console.log('Logged in:', data);
            navigate('/recommend');
        }).catch((err) => console.log(err));
    }

    const handleGoogleSignup = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(authService, provider)
            .then((data) => {
                console.log('Signed up:', data);
                // You can also store the user's info in your database here
                navigate('/signup'); // Redirect to a welcome page or dashboard after signup
            })
            .catch((err) => console.log(err));
    };


    return (
       <div className='w-screen flex justify-center items-center min-h-screen'>
            <div className="w-[629px] h-[318px] flex-col justify-start items-center gap-[50px] inline-flex">
                <h1 className='text-black text-[50px] font-bold italic'>Welcome to OtchuOtchu</h1>
                <div className='flex flex-col gap-[20px]'>
                    <WhiteButton label={"Login with Google"} onClick={handleGoogleSign}/>
                    <BlackButton label={"Sign Up"} onClick={handleGoogleSignup}/>
                </div>
            </div>
        </div>
    );
}

export default Login;