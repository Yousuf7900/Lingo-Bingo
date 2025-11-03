
import { useContext } from "react";
import aboutImg from "../assets/about_section.jpg";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router";

const AboutUs = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="bg-gray-50 text-gray-800">
            <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                    <p className="text-lg md:text-xl text-gray-200">
                        Empowering learners to build their vocabulary, confidence, and communication skills.
                    </p>
                </div>
            </section>
            <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <img
                        src={aboutImg}
                        alt="About"
                        className="w-full rounded-2xl shadow-lg object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">
                        Who We Are
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        We’re a passionate team dedicated to making language learning fun, interactive,
                        and effective. Our platform helps users enhance their vocabulary through engaging
                        tools, quizzes, and real-world examples.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        With a focus on simplicity and motivation, our goal is to create a community
                        where anyone can learn new words, improve pronunciation, and express themselves
                        with confidence.
                    </p>
                </div>
            </section>
            <section className="bg-white py-16 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                        We believe that learning a new language should be more than memorizing words—it should
                        be a journey of discovery. Our mission is to create tools that make vocabulary learning
                        enjoyable, inclusive, and accessible for everyone.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-3 text-blue-600">Innovation</h3>
                            <p className="text-gray-600">
                                We constantly explore creative methods to make learning smarter and more engaging.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-3 text-blue-600">Community</h3>
                            <p className="text-gray-600">
                                We believe in learning together — sharing knowledge, motivation, and growth.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-3 text-blue-600">Excellence</h3>
                            <p className="text-gray-600">
                                We’re committed to building a platform that truly empowers global learners.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16 text-center px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Join Our Learning Community</h2>
                    <p className="text-gray-100 mb-6">
                        Ready to boost your language skills? Start learning with us today and unlock a world
                        of new opportunities.
                    </p>

                    {
                        user && user?.email ? <Link className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition" to={"/start-learning"}>Get Started</Link> : <Link className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition" to={"/signup"}>Get Started</Link>
                    }
                </div>
            </section>
        </div>
    );
};
export default AboutUs;
