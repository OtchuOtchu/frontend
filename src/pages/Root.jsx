import { Outlet } from 'react-router-dom';


import Navbar from './NavBar';
import Footer from './Footer';


export default function Layout() {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}