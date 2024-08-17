import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { authService } from '../firebase/fbInstance';
import { useNavigate } from 'react-router-dom';


export default function Home() {

    const navigate =useNavigate();

    
    return (
        <div className='w-screen'>
            <div className='flex flex-col justify-center items-center min-h-screen gap-[50px]'>
            
                <h1>Hello world!</h1>
                
            
            </div>
        </div>
    )
}