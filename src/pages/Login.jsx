import React from 'react';

import useGoogleAuth from '../hooks/useGoogleAuth';

import BlackButton from '../components/BlackButton';
import WhiteButton from '../components/WhiteButton';

function Login() {
    const { handleGoogleSign, handleGoogleSignup } = useGoogleAuth();

    return (
        <div className='w-screen flex justify-center items-center min-h-screen'>
            <div className="w-[629px] h-[318px] flex-col justify-start items-center gap-[50px] inline-flex">
                <h1 className='text-black text-[50px] font-bold italic'>Welcome to OtchuOtchu</h1>
                <div className='flex flex-col gap-[20px]'>
                    <WhiteButton label={"Login with Google"} onClick={handleGoogleSign} />
                    <BlackButton label={"Sign Up"} onClick={handleGoogleSignup} />
                </div>
            </div>
        </div>
    );
}

export default Login;