import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

const StartLearning = () => {
    const data = useLoaderData();

    const allLessonNumbers = data.map(item => item.lesson_no);
    const uniqueLessonNumbersSet = new Set(allLessonNumbers);
    const uniqueLessonNumbersArray = [...uniqueLessonNumbersSet];
    const lessonNumbers = uniqueLessonNumbersArray.sort((a, b) => a - b);

    return (
        <div className="max-w-6xl mx-auto py-16 px-6">
            {/* Page Title */}
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
                Let’s Learn with <span className="text-gray-800">Lingo Bingo</span>
            </h1>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Choose a lesson to begin your Japanese vocabulary journey. Each lesson
                introduces new words, expressions, and examples to boost your learning.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {lessonNumbers.map((lessonNo) => (
                    <Link
                        to={`/tutorials/${lessonNo}`}
                        key={lessonNo}
                        className="bg-white shadow-md border border-gray-100 rounded-xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                            Lesson {lessonNo}
                        </h2>
                        <p className="text-gray-500 text-sm">
                            Explore words and examples from Lesson {lessonNo}.
                        </p>
                    </Link>
                ))}
            </div>
            <section className="text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                    🎓 Japanese Alphabet Tutorial
                </h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Watch this quick tutorial to learn the basics of Hiragana and Katakana —
                    the foundational scripts of the Japanese language.
                </p>

                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg border border-gray-200 max-w-4xl mx-auto">
                    <iframe
                        className="w-full h-[400px]"
                        src="https://www.youtube.com/embed/6p9Il_j0zjc"
                        title="Learn Japanese Alphabet (Hiragana & Katakana)"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <Link
                    to="/tutorials"
                    className="inline-block mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                >
                    View More Tutorials
                </Link>
            </section>
        </div>
    );
};

export default StartLearning;
