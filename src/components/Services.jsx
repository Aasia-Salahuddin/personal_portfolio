import { FaCode, FaChartLine } from "react-icons/fa";
import { SiFigma } from "react-icons/si";

export default function Services() {
  const services = [
    { 
      title: "Web Development", 
      desc: "Building responsive, high-performance websites and web applications, from modern frontend interfaces with React and Next.js to robust backends with Node.js and Express. Experienced in e-commerce development, API integration, and seamless deployment.",
      icon: <FaCode className="text-blue-500 text-5xl mb-4" />
    },
    { 
      title: "UI/UX Design", 
      desc: "Crafting intuitive and visually stunning interfaces through wireframing, prototyping, and design systems. Skilled in mobile app and website UI design, creating interactive prototypes, and optimizing user experiences with research-driven insights.",
      icon: <SiFigma className="text-pink-500 text-5xl mb-4" />
    },
    { 
      title: "Data Science & Machine Learning", 
      desc: "Providing end-to-end AI solutions, from data cleaning and exploratory analysis to predictive modeling, deep learning. Skilled in computer vision, image processing, and deploying intelligent applications using Flask,.",
      icon: <FaChartLine className="text-green-500 text-5xl mb-4" />
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow hover:bg-blue-600 hover:text-white transition duration-300 text-center"
          >
            <div className="flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-2">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
