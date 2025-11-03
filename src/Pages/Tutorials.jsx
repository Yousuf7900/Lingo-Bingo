import { Link } from "react-router";

const Tutorials = () => {

    const videos = [
        {
            id: 1,
            title: "Learn Japanese with Drama",
            src: "https://www.youtube.com/embed/PMfPDItcY6M",
        },
        {
            id: 2,
            title: "Learn Japanese with Drama: Talking with Your Senpai",
            src: "https://www.youtube.com/embed/aY-qc0KYq9E",
        },
        {
            id: 3,
            title: 'Learn Japanese with Short Drama: "結婚式のスピーチ/Wedding Speech" (Intermediate Level)',
            src: "https://www.youtube.com/embed/FcCUJT6edfo",
        },
        {
            id: 4,
            title: 'Learn Japanese with Short Drama: "ゆきとあきひろのタイ旅行/Yuki & Akihiro in Thailand" (Beginner Level)',
            src: "https://www.youtube.com/embed/EuH-btd9u80",
        },
        {
            id: 5,
            title: "Real‑Life Japanese Practice! Osaka Walk‑and‑Talk with @YUYUの日本語Podcast",
            src: "https://www.youtube.com/embed/OPJlI65cPGE",
        },
        {
            id: 6,
            title: "Real‑Life Japanese Practice! Osaka Walk‑and‑Talk with @YUYUの日本語Podcast",
            src: "https://www.youtube.com/embed/OPJlI65cPGE",
        },
        {
            id: 7,
            title: "Real‑Life Japanese Practice! Osaka Walk‑and‑Talk with @YUYUの日本語Podcast",
            src: "https://www.youtube.com/embed/OPJlI65cPGE",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto py-16 px-6">
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
                Japanese Tutorial Videos
            </h1>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Improve your Japanese language skills with these curated videos. Watch dramas, conversations, and real-life practice videos to learn effectively.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                {videos.map((video) => (
                    <div key={video.id} className="flex flex-col items-center">
                        <div className="w-full aspect-video shadow-lg rounded-lg overflow-hidden">
                            <iframe
                                width="100%"
                                height="100%"
                                src={video.src}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <h2 className="mt-4 text-lg font-semibold text-gray-800 text-center">
                            {video.title}
                        </h2>
                    </div>
                ))}
            </div>
            <Link to={'/start-learning'}>
                <button className="mt-12 mx-auto block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                    Learn Vocabularies
                </button>
            </Link>

        </div>
    );
};

export default Tutorials;
