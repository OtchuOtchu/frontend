import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { authService } from '../firebase/fbInstance';
import { Link } from 'react-router-dom';

function Login() {
    const handleGoogleSign = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(authService, provider).then((data) => {
            console.log(data);
        }).catch((err) => console.log(err));
    }

    return (
        <div>
            <h1>Welcome to OtchuOtchu</h1>
            <button onClick={handleGoogleSign}>Login in Google</button>
            <div><Link to='/signup'>회원가입하러가기</Link></div>
        </div>
    );
}

export default Login;