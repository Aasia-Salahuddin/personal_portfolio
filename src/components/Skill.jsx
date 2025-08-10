export default function Skill() {
  const skills = [
    {
      title: "Data Science & Machine Learning",
      desc: "Experienced in data cleaning, exploratory data analysis, and building predictive models using Python, Pandas, Scikit-learn, TensorFlow, and Keras.",
      percent: 85
    },
    {
      title: "Python Programming",
      desc: "Proficient in Python for data analysis, scripting, automation, and developing machine learning pipelines.",
      percent: 95
    },
    {
      title: "Data Visualization & Reporting",
      desc: "Skilled in creating insightful visualizations using Matplotlib, Seaborn, Plotly to help stakeholders make data-driven decisions.",
      percent: 90
    },
    {
      title: "SQL",
      desc: "Expertise in writing complex queries, database design, and optimization with PostgreSQL, MySQL, and experience with Big Data tools like Apache Spark and Hadoop.",
      percent: 85
    },
    {
      title: "MongoDB",
      desc: "Experienced in designing and querying document-oriented databases with MongoDB for flexible data storage.",
      percent: 80
    },
    {
      title: "Data Structures & Algorithms",
      desc: "Strong understanding of fundamental algorithms and data structures to solve complex problems efficiently.",
      percent: 85
    },
    {
      title: "Web Development",
      desc: "Develop scalable web applications using React, Node.js, Express, and MongoDB, implementing REST APIs and user authentication.",
      percent: 80
    },
    {
      title: "Frontend Development",
      desc: "Expert in building responsive and interactive UIs with React.js, Redux, JavaScript (ES6+), HTML5, and CSS3 including TailwindCSS and Bootstrap.",
      percent: 90
    },
    {
      title: "UI/UX Design (Figma)",
      desc: "Create wireframes, prototypes, and high-fidelity UI designs in Figma focused on usability and user experience best practices.",
      percent: 85
    }
  ];

  // Array of colors to cycle through for progress bars
  const colors = [
    "bg-blue-600",
    "bg-green-600",
    "bg-pink-600",
    "bg-yellow-500",
    "bg-purple-600",
    "bg-red-600",
    "bg-teal-600",
    "bg-indigo-600",
    "bg-orange-500"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800 flex flex-col justify-center items-center min-h-screen">
      {/* Fancy heading */}
      <h2 className="text-3xl font-extrabold text-center mb-12 text-orange-700 inline-block">
        Evolving Expertise
      </h2>

      <div className="max-w-4xl mx-auto px-4 space-y-10">
        {skills.map((skill, i) => (
          <div key={i}>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {skill.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">{skill.desc}</p>
            <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-4 overflow-hidden">
              <div
                className={`${colors[i % colors.length]} h-4 rounded-full transition-all duration-700`}
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
            <p className="text-right mt-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
              {skill.percent}%
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
