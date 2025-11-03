import About from '../Components/About';
import Banner from '../Components/Banner';
import Success from '../Components/Success';
import WhyLearn from '../Components/WhyLearn';
import LearningPath from '../Components/LearningPath';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import AOS from "aos";
import "aos/dist/aos.css";


const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        if (user) {
            const hasShown = localStorage.getItem("welcomeMessage");
            if (!hasShown) {
                toast.success(`Welcome back, ${user.displayName || user.email}!`, {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    theme: "colored",
                    className: "rounded-xl text-lg font-semibold shadow-lg"
                });
                localStorage.setItem("welcomeMessage", "true");
            }
        }
    }, [user])

    return (
        <div>
            <main>
                <section className="banner" data-aos="fade-up">
                    <Banner />
                </section>
                <section className="about" data-aos="fade-left">
                    <About />
                </section>
                <section className="success" data-aos="fade-right">
                    <Success />
                </section>
                <section className="why_learn" data-aos="zoom-in">
                    <WhyLearn />
                </section>
                <section className="learning_path" data-aos="fade-up">
                    <LearningPath />
                </section>
            </main>

        </div>
    );
};

export default Home;