import About from '../Components/About';
import Banner from '../Components/Banner';
import Success from '../Components/Success';
import WhyLearn from '../Components/WhyLearn';
import LearningPath from '../Components/LearningPath';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';


const Home = () => {
    const { user } = useContext(AuthContext);
    useEffect(() => {
        if (user) {
            const hasShown = localStorage.getItem("welcomeMessage");
            if (!hasShown) {
                toast.success(`Welcome back, ${user.displayName || "user"}!`, {
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
                <section className="banner">
                    <Banner></Banner>
                </section>
                <section className="about">
                    <About></About>
                </section>
                <section className="success">
                    <Success></Success>
                </section>
                <section className="why_learn">
                    <WhyLearn></WhyLearn>
                </section>
                <section className="learning_pah">
                    <LearningPath></LearningPath>
                </section>
            </main>
        </div>
    );
};

export default Home;