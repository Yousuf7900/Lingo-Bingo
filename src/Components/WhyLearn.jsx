import React from "react";
import { FaGlobe, FaBriefcase, FaBrain, FaSmile } from "react-icons/fa";
import { motion } from "framer-motion";

const WhyLearn = () => {
    const reasons = [
        { icon: <FaGlobe className="text-4xl md:text-5xl text-blue-600" />, text: "Expand your communication skills and connect with people worldwide." },
        { icon: <FaBriefcase className="text-4xl md:text-5xl text-blue-600" />, text: "Boost your career opportunities by learning multiple languages." },
        { icon: <FaBrain className="text-4xl md:text-5xl text-blue-600" />, text: "Enhance memory, focus, and cognitive abilities through vocabulary practice." },
        { icon: <FaSmile className="text-4xl md:text-5xl text-blue-600" />, text: "Enjoy learning with interactive lessons and fun quizzes." },
    ];

    return (
        <section className="w-full bg-gray-50 py-20 px-6 md:px-16">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
                    Why Learn Languages?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                        >
                            {reason.icon}
                            <p className="text-gray-700 text-lg md:text-xl text-center">{reason.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyLearn;
