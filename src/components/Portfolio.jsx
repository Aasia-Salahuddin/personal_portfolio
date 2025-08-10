import { useState } from "react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("projects");

  const projects = [
    { 
      title: "DeepFractNet: An Explainable AI-Powered System for Transparent Fracture Detection and Reporting", 
      img: "/images/project1.JPG",
      desc: "DeepFracNet is our Final Year Project. We developed an AI model for accurate fracture detection with explainable heatmaps and automated reporting. Used FracAtlas Dataset and applied models like ViT, YOLO for detection and classification, and GradCam for visualization. Users can input an image and select the model to check the fracture.",
      link: "https://github.com/yourusername/deepfractnet"
    },
    { 
      title: "Fracture Detection using YOLOv9, YOLOv10 and YOLO v11", 
      img: "/images/project2.png",
      desc: "Implemented YOLO models to detect fractures in X-ray images with optimized accuracy and speed.",
      link: "https://github.com/Aasia-Salahuddin/YOLO_DetectionModels-V9-V10-V11-"
    },
    { 
      title: "Age and Gender Prediction from UTKFace Images Using CNNs", 
      img: "/images/project3.jpg",
      desc: "Built a CNN using the UTKFace dataset to predict age (regression) and gender (classification) from facial images. Preprocessed data (resize, grayscale, normalize) and designed a multi-output architecture. Trained with Keras + Adam optimizer, evaluated using accuracy and MAE, and visualized results with Matplotlib/Seaborn.",
      link: "https://github.com/Aasia-Salahuddin/Age_and_Gender_Detection-/tree/main"
    },
    { 
      title: "EchoPen – where every blog echoes your voice.", 
      img: "",
      desc: "Developed a responsive blogging platform where users can register, log in, and publish, edit, or delete blogs. Implemented rich text editing, image uploads, and search functionality. Integrated authentication, authorization, and user profiles for personalized content.",
      link: "https://github.com/yourusername/echopen"
    },
  ];

  const designs = [
    { 
      title: "RealEstate Website UI", 
      img: "/images/UI1.JPG",
      desc: "Designed an intuitive and visually appealing real estate platform interface using Figma. Focused on creating a clean, modern layout that enhances user experience for property browsing, filtering, and contact. Incorporated responsive design principles for mobile and desktop compatibility. Implemented clear typography, high-quality imagery, and well-structured navigation to make property search seamless for buyers and renters.",
      link: "https://www.figma.com/design/1z6A0DgOjESuarW8MHkrkp/Real-Estate?node-id=0-1&t=0cnDKFRsg9B59XgY-1"
    },
    { 
      title: "AIR_BNB COPY---GREEN_BNB", 
      img: "/images/U2.JPG",
      desc: "An Airbnb clone UI/UX designed in Figma with responsive layouts, modern typography, and intuitive navigation. Includes homepage, search results, property details, booking flow, and user profile screens, all styled for a clean and engaging travel booking experience.",
      link: "https://www.figma.com/design/8nataznzMR7kZJ98ddkPMm/GreenBNB?node-id=0-1&p=f&t=2qRdaz0SleljHg79-0"
    },
  ];

  const items = activeTab === "projects" ? projects : designs;

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">
        Portfolio
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-12">
        {["projects", "designs"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === tab
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            {tab === "projects" ? "Projects" : "UI Designs"}
          </button>
        ))}
      </div>

      {/* Portfolio Items */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 px-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            {item.img && (
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            )}
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
                {item.desc}
              </p>
              <a
                href={item.link}
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm mt-2 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                {activeTab === "projects" ? "View on GitHub" : "View on Figma"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
