import Header from "../components/Header";
import Profile from "../components/Profile";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <Header />
      <hr className="border-gray-200 my-5" />
      <Profile />
      <hr className="border-gray-200 my-5" />
      <About />
      <hr className="border-gray-200 my-5" />
      <Skills />
      <hr className="border-gray-200 my-5" />
      <Projects />
      <hr className="border-gray-200 my-5" />
      <Contact />
      <hr className="border-gray-200 my-5" />
      <Footer />
    </div>
  );
}
