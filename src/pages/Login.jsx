import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { authService } from '../firebase/fbInstance';
import { useNavigate } from 'react-router-dom';
import BlackButton from '../components/BlackButton';
import WhiteButton from '../components/WhiteButton';
import usePeopleStore from '../store/PeopleStore';


function Login() {
    const navigate = useNavigate();
    const people = usePeopleStore(state => state.people);
    const setLoggedInUser = usePeopleStore(state => state.setLoggedInUser);

    const handleGoogleSign = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(authService, provider)
            .then((data) => {
            const userEmail = data.user.email;
            const user = people.find(person =>person.email ===userEmail)
            if(user){
                console.log('Logged in:', data);
                usePeopleStore.setState({ loggedInUser: user });
                navigate('/recommend');
            } else {
                alert("일치하는 계정이 없습니다.")
            }
        }).catch((err) => console.log(err));
    }

    const handleGoogleSignup = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(authService, provider)
            .then((data) => {
                const userEmail = data.user.email;  // 구글 인증으로 얻은 이메일
                const existingUser = people.find(person => person.email === userEmail);

                if (existingUser){
                    const userChoice = window.confirm("이미 가입한 계정입니다. 로그인하시겠습니까?");
                    if (userChoice) {
                        usePeopleStore.setState({ loggedInUser: existingUser });
                        navigate('/recommend');
                    }
                } else {
                    setLoggedInUser({
                        email: userEmail,
                        name: data.user.displayName
                    });
                    console.log('Signed up:', data);
                    // You can also store the user's info in your database here
                    navigate('/signup'); // Redirect to a welcome page or dashboard after signup
                }
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