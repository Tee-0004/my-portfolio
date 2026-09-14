import profileImage from "../assets/tebogo-professional 2.jpeg";
function About() {
  return (
    <section
      id="about"
      className="bg-[#f8f8f6] px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* LEFT — IMAGE */}
        <div className="w-full">
          <img
            src={profileImage}
            alt="Tebogo Letshokgohla"
            className="h-auto w-full object-cover"
          />
        </div>

        {/* RIGHT — CONTENT */}
        <div className="max-w-2xl">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#252932]">
            About Me
          </p>

          <h2 className="mb-8 font-serif text-5xl leading-[0.95] text-[#252932] md:text-6xl">
            Beyond the Code
            <br />
            About Me
          </h2>

          <div className="space-y-6 text-base leading-7 text-[#252932]">
            <p>
              I'm currently studying Software Development and building my
              skills in web development, with a growing interest in creating
              responsive and user-friendly digital experiences. I enjoy turning
              ideas into practical solutions and continuously challenging
              myself to learn new technologies.
            </p>

            <p>
              Before pursuing software development, I developed my skills in
              makeup artistry. Working in the beauty industry taught me the
              importance of creativity, attention to detail, communication,
              and understanding the needs of others. These experiences continue
              to shape the way I approach technology and design.
            </p>

             <p>
              As I continue growing as a developer, my goal is to combine my
              technical knowledge with my creative perspective to build digital
              experiences that are thoughtful, functional, and visually engaging.
              I'm excited to keep learning, building, and exploring where
              technology can take me.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;