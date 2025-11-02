import CountUp from "react-countup";
import { FaUsers, FaBook, FaLanguage, FaChalkboardTeacher } from "react-icons/fa";
import { motion } from "framer-motion";

const Success = () => {
    const stats = [
        { id: 1, label: "Users", value: 1250, icon: <FaUsers className="text-4xl md:text-5xl text-blue-600" /> },
        { id: 2, label: "Lessons", value: 85, icon: <FaBook className="text-4xl md:text-5xl text-blue-600" /> },
        { id: 3, label: "Vocabularies", value: 3500, icon: <FaLanguage className="text-4xl md:text-5xl text-blue-600" /> },
        { id: 4, label: "Tutorials", value: 45, icon: <FaChalkboardTeacher className="text-4xl md:text-5xl text-blue-600" /> },
    ];

    return (
        <section className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20 px-6 md:px-16">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
                    Our Achievements
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.id}
                            className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div>{stat.icon}</div>
                            <h3 className="text-4xl md:text-5xl font-bold text-blue-600 mt-3">
                                <CountUp end={stat.value} duration={2.5} />
                            </h3>
                            <p className="text-lg md:text-xl text-gray-600 mt-2">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Success;
