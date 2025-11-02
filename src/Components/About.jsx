import about_section from "../assets/about_section.jpg";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="w-full bg-gray-50 py-20 px-6 md:px-16">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={about_section}
                        alt="Learning languages"
                        className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                </motion.div>
                <motion.div
                    className="md:w-1/2 flex flex-col gap-6"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        About <span className="text-blue-600">Our Platform</span>
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                        Our mission is to make language learning easy, fun, and effective.
                        We help users expand their vocabulary, track progress, and practice
                        in an interactive and engaging way. Whether you are a beginner or
                        advanced learner, our platform guides you through each lesson step by step.
                    </p>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                        Learn at your own pace with our carefully designed lessons,
                        quizzes, and learning paths. Improve your communication skills
                        and become confident in your target language.
                    </p>
                    <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition transform hover:-translate-y-1">
                        Get Started
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
