import React from "react";
import { FaBookOpen, FaClock, FaClipboardCheck, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const LearningPath = () => {
    const steps = [
        {
            id: 1,
            title: "Start with Basics",
            description: "Learn simple words and expressions to build a strong foundation.",
            icon: <FaBookOpen className="text-4xl md:text-5xl text-blue-600" />,
        },
        {
            id: 2,
            title: "Practice Daily",
            description: "Consistent practice helps you retain vocabulary and improve fluency.",
            icon: <FaClock className="text-4xl md:text-5xl text-blue-600" />,
        },
        {
            id: 3,
            title: "Take Quizzes",
            description: "Test your knowledge with fun quizzes and track your progress.",
            icon: <FaClipboardCheck className="text-4xl md:text-5xl text-blue-600" />,
        },
        {
            id: 4,
            title: "Master Advanced Words",
            description: "Learn complex words and phrases to reach an advanced level.",
            icon: <FaGraduationCap className="text-4xl md:text-5xl text-blue-600" />,
        },
    ];

    return (
        <section className="w-full bg-gray-50 py-20 px-6 md:px-16">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
                    Your Learning Path
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                        >
                            {step.icon}
                            <h3 className="text-xl md:text-2xl font-semibold text-blue-600">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 text-base md:text-lg text-center">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearningPath;
