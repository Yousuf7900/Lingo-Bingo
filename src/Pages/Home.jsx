import About from '../Components/About';
import Banner from '../Components/Banner';
import Success from '../Components/Success';
import WhyLearn from '../Components/WhyLearn';
import LearningPath from '../Components/LearningPath';

const Home = () => {
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