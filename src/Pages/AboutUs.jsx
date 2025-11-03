import { useContext } from "react";
import aboutImg from "../assets/about_section.jpg";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router";

const AboutUs = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="bg-gray-50 text-gray-800">
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
                    <p className="text-lg md:text-xl text-gray-200">
                        Hi, I’m Yousuf Islam, a Computer Science graduate and web developer. I build interactive web applications using React, Tailwind, and Firebase.
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
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">Projects</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li><strong>Lingo Bingo:</strong> Vocabulary learning web app with React, Tailwind & Firebase.</li>
                        <li><strong>Smart City Dashboard:</strong> Rooftop solar management system with IoT & cloud integration.</li>
                        <li><strong>Portfolio Website:</strong> Personal website showcasing projects and skills.</li>
                    </ul>
                </div>
            </section>
            <section className="bg-white py-16 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-3 text-blue-600">Web Development</h3>
                            <p className="text-gray-600">React, Tailwind CSS, HTML, CSS, JavaScript, Firebase, Node.js</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-3 text-blue-600">AI & Data</h3>
                            <p className="text-gray-600">Python, Data Analysis, Machine Learning basics, NumPy, Pandas</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-3 text-blue-600">Soft Skills</h3>
                            <p className="text-gray-600">Problem-solving, Creativity, Collaboration, Time Management</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call-to-Action */}
            <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16 text-center px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Start Learning Today</h2>
                    <p className="text-gray-100 mb-6">
                        Join the learning community and improve your skills with interactive projects.
                    </p>
                    <Link
                        to={user?.email ? "/start-learning" : "/signup"}
                        className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                    >
                        Get Started
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
