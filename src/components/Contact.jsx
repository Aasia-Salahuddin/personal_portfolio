import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
        Let’s Work Together 🤝
      </h2>

      <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2 px-4">
        {/* Contact Info */}
        <div className="space-y-6 text-lg">
          <p className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-red-500 text-2xl" />
            <span className="text-gray-800 dark:text-gray-300">
              <strong>Location:</strong> Sukkur, Sindh, Pakistan
            </span>
          </p>

          <p className="flex items-center gap-4">
            <FaEnvelope className="text-yellow-500 text-2xl" />
            <span className="text-gray-800 dark:text-gray-300">
              <strong>Email:</strong> aasiasalahuddin7@gmail.com
            </span>
          </p>


          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
             <strong>Ready to Start Your Project?</strong> Whether it’s a
            stunning website, mobile app, or AI-powered solution, I’ll bring
            your ideas to life with modern, scalable, and creative approaches.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            ⚡ <strong>Quick Response Guaranteed:</strong> I usually reply within{" "}
            <span className="text-blue-600 font-semibold">2–4 hours</span>{" "}
            during business hours.
          </p>
        </div>

        {/* Contact Form 
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border border-gray-300 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            📩 Send Message
          </button>
        </form>*/}
      </div>
    </section>
  );
}
