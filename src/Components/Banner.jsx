import banner1 from "../assets/banner_1.jpg";
import banner2 from "../assets/banner_2.jpg";
import banner3 from "../assets/banner_3.jpg";
import banner4 from "../assets/banner_4.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const slides = [
        {
            image: banner1,
            title: "Learn New Languages Easily",
            subtitle: "Expand your vocabulary with interactive lessons."
        },
        {
            image: banner2,
            title: "Track Your Progress",
            subtitle: "Follow your learning path and reach your goals."
        },
        {
            image: banner3,
            title: "Fun and Interactive Lessons",
            subtitle: "Make learning a new language enjoyable."
        },
        {
            image: banner4,
            title: "Fun and Interactive Lessons",
            subtitle: "Make learning a new language enjoyable."
        },
    ];

    return (
        <div className="w-full relative">
            <Slider {...sliderSettings}>
                {
                    slides.map((slide, index) => (
                        <div key={index} className="relative">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
                                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                                    {slide.title}
                                </h1>
                                <p className="text-lg md:text-2xl text-white">
                                    {slide.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
            </Slider>
        </div>
    );
};

export default Banner;
