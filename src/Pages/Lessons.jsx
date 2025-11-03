import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loading from "./Loading";

const Lessons = () => {
    const navigate = useNavigate();
    const { loading } = useContext(AuthContext);
    const { id } = useParams();
    const [words, setWords] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);

    useEffect(() => {
        fetch("/japanese_data.json")
            .then((res) => res.json())
            .then((data) => {
                const lessonWords = data.filter(
                    (item) => item.lesson_no === Number(id)
                );
                setWords(lessonWords);
                setDataLoading(false);
            })
            .catch((err) => {
                console.error("Failed to load data:", err);
                setDataLoading(false);
            });
    }, [id]);

    if (loading || dataLoading) {
        return <Loading />;
    }

    return (
        <div className="max-w-6xl mx-auto py-16 px-6">
            <h2 className="text-4xl font-bold text-blue-600 mb-8 text-center">
                Lesson {id} Words
            </h2>

            {words.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">
                    No words found for this lesson.
                </p>
            ) : (
                <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {words.map((word) => (
                            <div
                                key={word.id}
                                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
                            >
                                <h3 className="text-2xl font-semibold mb-2 text-blue-600">
                                    {word.word}
                                </h3>
                                <p className="text-gray-600 mb-1">
                                    <span className="font-medium">Pronunciation:</span>{" "}
                                    {word.pronunciation}
                                </p>
                                <p className="text-gray-600 mb-1">
                                    <span className="font-medium">Meaning:</span> {word.meaning}
                                </p>
                                <p className="text-gray-500 text-sm">
                                    <span className="font-medium">Example:</span> {word.example}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-8">
                        <button
                            onClick={() => navigate("/start-learning")}
                            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition transform"
                        >
                            Back to Lessons
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Lessons;
