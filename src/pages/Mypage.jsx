import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import MyAccount from "../components/MyPage/MyAccount";
import Tab from '../components/MyPage/Tab';


export default function Home() {
    const navigate = useNavigate();

    return (
        <div className='w-screen'>
            <div className='flex flex-col justify-center items-center gap-[50px]'>
                <MyAccount />
                <Tab />
            </div>
        </div>
    )
}