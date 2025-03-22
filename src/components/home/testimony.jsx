import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteRight, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";


const testimonials = [
  {
    rating: 5,
    title: "Software Engineer",
    emoji: "🚀",
    text: "AbyTech has been a game-changer for my career. Their mentorship and resources helped me scale my skills to new heights!",
    name: "Nsanzimana Fabrice",
    date: "15 March 2025"
  },
  {
    rating: 4,
    title: "IT Manager",
    emoji: "💡",
    text: "Working with AbyTech was an eye-opening experience. Their expertise and professional approach to IT solutions impressed me greatly.",
    name: "Nkaka Jean Doumour",
    date: "5 Feb 2025"
  },
  {
    rating: 5,
    title: "Data Analyst",
    emoji: "📊",
    text: "AbyTech provided powerful tools and insights that helped optimize our data processing at Kigali City Archive. Highly recommend their services!",
    name: "Mihigo Guillaume",
    date: "28 Jan 2025"
  },
  {
    rating: 5,
    title: "Full Stack Developer",
    emoji: "💻",
    text: "AbyTech transformed my approach to web and backend development. Their hands-on guidance was invaluable.",
    name: "Habineza Patrick",
    date: "10 March 2025"
  },
  {
    rating: 4,
    title: "Cloud Engineer",
    emoji: "☁️",
    text: "Their cloud solutions are top-notch! AbyTech helped us implement secure and scalable architectures.",
    name: "Rugamba Eric",
    date: "3 Feb 2025"
  },
  {
    rating: 5,
    title: "Web Developer",
    emoji: "👍",
    text: "AbyTech provided outstanding support that helped me grow as a developer. Highly recommend!",
    name: "Ngenzi Serge",
    date: "12 Jan 2025",
  },
  {
    rating: 5,
    title: "Backend Developer",
    emoji: "😍",
    text: "Excellent experience working with AbyTech. They have a great team that understands business needs!",
    name: "Iragena Egide",
    date: "22 Feb 2025",
  },
  {
    rating: 4,
    title: "Full Stack Developer",
    emoji: "😍",
    text: "It was a great experience working with AbyTech because they boosted my career and helped me build my technology today.",
    name: "Mihigo Prince",
    date: "20 Feb 2025",
  },
  {
    rating: 5,
    title: "Web Developer",
    emoji: "👍",
    text: "AbyTech provided outstanding support that helped me grow as a developer. Highly recommend!",
    name: "Ngenzi Serge",
    date: "12 Jan 2025",
  },
  {
    rating: 5,
    title: "Backend Developer",
    emoji: "😍",
    text: "Excellent experience working with AbyTech. They have a great team that understands business needs!",
    name: "Iragena Egide",
    date: "22 Feb 2025",
  },
  {
    title: "UX/UI Designer",
    emoji: "🎨",
    text: "Amazing experience! The design team at AbyTech has a keen eye for user experience and creativity.",
    name: "Umutoni Grace",
    date: "18 Feb 2025"
  }

];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const interval = setInterval(() => {
        nextSlide();
    }, 5000);

    return () => clearInterval(interval);
}, [currentIndex]);




  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerSlide) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerSlide < 0 ? testimonials.length - itemsPerSlide : prevIndex - itemsPerSlide
    );
  };


  const getVisibleTestimonials = () => {
    const itemsPerSlide = 3;
    const startIndex = currentIndex * itemsPerSlide;
    return testimonials.slice(startIndex, startIndex + itemsPerSlide);
  };


  return (

    <section className="bg-[#0d0f15] py-16 px-4 w-full text-white text-center relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        What My <span className="text-yellow-400">Clients</span> Say
      </h2>
      <p className="text-gray-400 mb-8">
        Different customers sharing their experience with AbyTech.
      </p>

      <div className="flex justify-center w-full overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex"
          >
            {getVisibleTestimonials().map((t, index) => (
              <div
                key={index}
                className="bg-[#1b1e24] w-[300px] p-6 rounded-lg mx-4 shadow-md"
                data-aos="fade-down"
              >
                <div className="flex justify-center mb-3 text-yellow-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {t.title} {t.emoji}
                </h3>
                <p className="text-gray-400 mb-4">{t.text}</p>
                <p className="font-semibold">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.date}</p>
                <FaQuoteRight className="text-red-400 text-2xl mt-4 mx-auto" />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6">
        {[0, 1].map((index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-red-500 w-4" : "bg-gray-600"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}

    <section className="bg-[#0d0f15] py-16 px-4 text-white text-center relative">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
        What My <span className="text-yellow-400">Clients</span> Say
      </h2>
      <p className="text-gray-400 mb-8">Different customers sharing their experience with AbyTech.</p>

      {/* Testimonials Slider */}
      <div className="relative w-[80%] mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/3 px-4"
                style={{ flex: `0 0 ${100 / itemsPerSlide}%` }}
                data-aos="zoom-in"
              >
                <div className="bg-[#13151b] p-6 rounded-lg shadow-lg">
                  {/* Star Ratings */}
                  <div className="flex justify-center mb-3 text-yellow-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t.title} {t.emoji}
                  </h3>
                  <p className="text-gray-400 mb-4">{t.text}</p>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.date}</p>
                  <FaQuoteRight className="text-red-400 text-2xl mt-4 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-900 p-2 rounded-full"
          onClick={prevSlide}
        >
          <FaChevronLeft className="text-white text-lg" />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-900 p-2 rounded-full"
          onClick={nextSlide}
        >
          <FaChevronRight className="text-white text-lg" />
        </button>

      </div>
      </section>
      </div>
    </section>
  );
}
