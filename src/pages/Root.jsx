import { Outlet } from 'react-router-dom';


import Navbar from '../components/NavBar';
import Footer from '../components/Footer';


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