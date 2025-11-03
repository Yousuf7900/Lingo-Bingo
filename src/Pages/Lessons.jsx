import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loading from "./Loading";
import { FaVolumeUp } from "react-icons/fa";
import speakWord from "../Utilities/Speaks";

const Lessons = () => {
  const navigate = useNavigate();
  const { loading } = useContext(AuthContext);
  const { id } = useParams();
  const [words, setWords] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [selectedWord, setSelectedWord] = useState(null);

  useEffect(() => {
    fetch("/japanese_data.json")
      .then((res) => res.json())
      .then((data) => {
        const lessonWords = data.filter((item) => item.lesson_no === Number(id));
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


  const difficultyColor = (level) => {
    switch (level) {
      case "easy":
        return "border-green-400 bg-green-50";
      case "medium":
        return "border-orange-400 bg-orange-50";
      case "hard":
        return "border-red-400 bg-red-50";
      default:
        return "border-gray-300 bg-gray-50";
    }
  };

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
                className={`p-6 rounded-2xl shadow-md border ${difficultyColor(
                  word.difficulty
                )} hover:shadow-lg transition transform hover:-translate-y-1`}
              >
                <h3 className="text-2xl font-semibold mb-2 text-blue-600">{word.word}</h3>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Pronunciation:</span> {word.pronunciation}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Meaning:</span> {word.meaning}
                </p>
                <p className="text-gray-500 mb-3">
                  <span className="font-medium">Part of Speech:</span> {word.part_of_speech}
                </p>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedWord(word)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
                  >
                    When to Say
                  </button>
                  <button
                    onClick={() => speakWord(word.word)}
                    className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition"
                    title="Listen"
                  >
                    <FaVolumeUp />
                  </button>
                </div>
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


      {
        selectedWord && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className="absolute inset-0 backdrop-blur-sm bg-white/30"
              onClick={() => setSelectedWord(null)}
            ></div>
            <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-lg z-50 transform transition-all scale-100 relative">
              <button
                onClick={() => setSelectedWord(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 font-bold text-xl"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">{selectedWord.word}</h3>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Pronunciation:</span> {selectedWord.pronunciation}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Meaning:</span> {selectedWord.meaning}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">When to Say:</span> {selectedWord.when_to_say}
              </p>
              <p className="text-gray-500 mb-4">
                <span className="font-medium">Example:</span> {selectedWord.example}
              </p>

              <div className="flex justify-between items-center">
                <button
                  onClick={() => setSelectedWord(null)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                  Close
                </button>
                <button
                  onClick={() => speakWord(selectedWord.example)}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-300 flex items-center gap-2"
                >
                  <FaVolumeUp /> Listen
                </button>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default Lessons;
