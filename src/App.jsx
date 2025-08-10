//import Navbar from "./components/Navbar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50 dark:bg-gray-900 min-h-screen pt-24 px-4 md:px-8">
        <Home />
        <Skill />
        <Portfolio />
        <Services />
        <Contact />
      </main>
    </>
  );
}

