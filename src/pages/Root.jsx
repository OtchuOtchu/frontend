import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';


export default function Layout() {
    return (
        <div>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}