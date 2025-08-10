import { useState, useEffect } from "react";
import { FaLinkedin, FaFigma, FaEnvelope, FaGithub } from "react-icons/fa";

const roles = [
  "DATA SCIENTIST",
  "WEB DEVELOPER",
  "UI/UX DESIGNER"
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setFade(true);  // fade in new text
      }, 500); // fade duration
    }, 3000); // interval duration

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex justify-center items-center px-4 md:px-0 max-w-6xl mx-auto"
    >
      {/* Flex container for text + image */}
      <div className="flex flex-col md:flex-row items-center gap-12 w-full">

        {/* Left side: Text content */}
        <div className="flex-1 max-w-xl text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-wide text-orange-600 dark:text-gray-200">
            Hello I'm
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800 dark:text-blue-400">
            Aasia Salahuddin,
          </h1>
          <p className="text-lg md:text-xl text-blue-600 dark:text-gray-300 leading-relaxed max-w-xl">
  <span
    className={`font-semibold text-2xl md:text-3xl transition-opacity duration-500 inline-block ${
      fade ? "opacity-100" : "opacity-0"
    }`}
  >
    {roles[index]}.
  </span>
</p>

          <p className="text-lg md:text-xl text-orange-700 dark:text-gray-300 leading-relaxed max-w-xl mt-4">
            3 years of hands-on experience in Datascience and Machine Learning,<br />
            Proficient in frontend web development,<br />
            Strong UI/UX design skills in Figma.
          </p>
          <div className="flex gap-8 mt-8 justify-center md:justify-start text-gray-600 dark:text-gray-400">
            <a
              href="https://www.linkedin.com/in/aasiasalahuddin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Aasia-Salahuddin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-pink-500 transition"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:aasiasalahuddin7@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-red-500 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right side: Profile image */}
        <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 overflow-hidden shadow-lg rounded-md">
          <img
            src="/profile.jpg"  // <-- replace with your actual profile image path
            alt="Aasia Salahuddin"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
