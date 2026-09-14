import tebogoProfessional from '../assets/tebogo-professional.jpeg';
import { Link } from "react-router-dom";
function Home() {
  return (
    <section id="home" className="min-h-screen bg-[#F7F6F3]">

      <div className="max-w-7xl mx-auto px-6 py-20 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            {/* Small Introduction Line */}
            <p className="text-sm tracking-[0.2em] uppercase mb-6">
              Software Developer | Creative Thinker | Lifelong Learner
            </p>

            {/* Main Heading */}
            <h1 className="font-['Cormorant_Garamond'] text-6xl lg:text-7xl leading-[0.9] uppercase mb-6">
              Building
              <br />
              Ideas Into
              <br />
              Real Life
            </h1>

            {/* Introduction */}
            <p className="text-base leading-7 max-w-xl mb-8">
              Hi, I’m Tebogo Letshokgohla, a software developer passionate
              about building responsive, user-friendly websites and creating
              digital experiences that are both functional and visually
              engaging. With a background in makeup artistry and a passion for
              beauty, I bring a creative perspective to the way I approach
              design and technology.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">

              <Link
                to="/projects"
                className="bg-[#252932] text-[#F5F3EF] border border-[#252932] px-6 py-3 text-xs uppercase tracking-wider hover:bg-[#252932] hover:text-white transition"
              >
                View My Work →
              </Link>

              <Link
                to="/contact"
                className="border border-[#252932] px-6 py-3 text-xs uppercase tracking-wider hover:bg-[#252932] hover:text-white transition"
              >
                Let's Connect →
              </Link>

            </div>

          </div>

          {/* Right Side - Picture */}
         <div className="flex justify-center lg:justify-end">
          <img
            src={tebogoProfessional}
            alt="Tebogo Letshokgohla"
            className="w-full max-w-md object-cover"
          />
         </div>

        </div>

      </div>

    </section>
  );
}

export default Home;