function Footer({darkMode}) {
  return (
    <footer className="bg-[#2A2927] text-[#F5F3EF] px-6 py-16 md:px-12 md:py-20">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pb-16">

          {/* Main Message */}
          <div className="md:col-span-1">
            <p className="text-xs tracking-[0.3em] uppercase mb-6 opacity-70">
              Let's Stay In Touch
            </p>

            <h2 className="font-[Cormorant_Garamond] text-5xl md:text-6xl leading-[0.95] mb-8">
              Let’s build
              <br />
              something
              <br />
              meaningful.
            </h2>

            <p className="text-sm md:text-base leading-7 max-w-md opacity-75">
              I’m always open to new opportunities, collaborations and
              exciting ideas.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:border-l md:border-[#F5F3EF]/20 md:pl-12">
            <p className="text-xs tracking-[0.3em] uppercase mb-7 opacity-70">
              Navigation
            </p>

            <nav className="flex flex-col gap-5">
              <a
                href="#home"
                className="w-fit text-base hover:opacity-60 transition-opacity duration-300"
              >
                Home
              </a>

              <a
                href="#about"
                className="w-fit text-base hover:opacity-60 transition-opacity duration-300"
              >
                About
              </a>

              <a
                href="#skills"
                className="w-fit text-base hover:opacity-60 transition-opacity duration-300"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="w-fit text-base hover:opacity-60 transition-opacity duration-300"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="w-fit text-base hover:opacity-60 transition-opacity duration-300"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="md:border-l md:border-[#F5F3EF]/20 md:pl-12">
            <p className="text-xs tracking-[0.3em] uppercase mb-7 opacity-70">
              Social
            </p>

            <div className="flex flex-col gap-5">

              <a
                href="https://github.com/Tee-0004"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-base border-b border-[#F5F3EF]/40 pb-1 hover:opacity-60 transition-opacity duration-300"
              >
                GitHub ↗
              </a>

              <a
                href="mailto:teboletshokgohla@gmail.com"
                className="w-fit text-base border-b border-[#F5F3EF]/40 pb-1 hover:opacity-60 transition-opacity duration-300"
              >
                Email ↗
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Divider */}
        <div className="border-t border-[#F5F3EF]/20 pt-6">

          <div className="flex flex-col md:flex-row justify-between gap-4 text-xs md:text-sm opacity-70">

            <p>
              © 2026 Tebogo Letshokgohla
            </p>

            <p className="flex items-center gap-2">
              Built with React
              <span className="text-base">♡</span>
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;