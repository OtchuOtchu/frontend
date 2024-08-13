import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { authService } from '../firebase/fbInstance';

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
        </div>
    );
}

export default Login;