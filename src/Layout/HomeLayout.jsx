
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const HomeLayout = () => {
    return (
        <div>
            <nav className='font-inter'>
                <Navbar></Navbar>
            </nav>
            <main>
                <Outlet></Outlet>
            </main>
            <footer className='font-inter'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;