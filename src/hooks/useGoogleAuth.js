import { useNavigate } from 'react-router-dom';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { authService } from '../firebase/fbInstance';

import usePeopleStore from '../store/PeopleStore';

import axios from 'axios';

export default function useGoogleAuth() {
    const navigate = useNavigate();
    const people = usePeopleStore(state => state.people);
    const setLoggedInUser = usePeopleStore(state => state.setLoggedInUser);

    const sendTokenToBackend = async (idToken) => {
        try {
            const response = await axios.get('http://localhost:4000/', {
                headers: {
                    Authorization: `Bearer ${idToken}`
                }
            });
            console.log('Backend response:', response.data);
        } catch (error) {
            console.error('Error sending token to backend:', error);
        }
    };

    const handleGoogleSign = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(authService, provider);
            const user = result.user;
            const userEmail = user.email;
            const matchedUser = people.find(person => person.email === userEmail);

            if (matchedUser) {
                const idToken = await user.getIdToken();
                if (idToken) {
                    console.log('ID Token successfully retrieved:', idToken);
                } else {
                    console.error('Failed to retrieve ID Token');
                }
                await sendTokenToBackend(idToken);
                usePeopleStore.setState({ loggedInUser: matchedUser });
                navigate('/recommend');
            } else {
                alert("일치하는 계정이 없습니다.");
            }
        } catch (err) {
            console.error('Error during Google sign-in:', err);
        }
    };

    const handleGoogleSignup = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(authService, provider);
            const user = result.user;
            const userEmail = user.email;
            const existingUser = people.find(person => person.email === userEmail);

            if (existingUser) {
                const userChoice = window.confirm("이미 가입한 계정입니다. 로그인하시겠습니까?");
                if (userChoice) {
                    const idToken = await user.getIdToken();
                    // if (idToken) {
                    //     console.log('ID Token successfully retrieved:', idToken);
                    // } else {
                    //     console.error('Failed to retrieve ID Token');
                    // }
                    await sendTokenToBackend(idToken);

                    usePeopleStore.setState({ loggedInUser: existingUser });
                    navigate('/recommend');
                }
            } else {
                const idToken = await user.getIdToken();
                await sendTokenToBackend(idToken);
                setLoggedInUser({
                    email: userEmail,
                    name: user.displayName
                });
                navigate('/signup');
            }
        } catch (err) {
            console.error('Error during Google sign-up:', err);
        }
    };

    return {
        handleGoogleSign,
        handleGoogleSignup,
    };
}