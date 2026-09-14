function Projects() {
  const projects = [
    {
      number: "01",
      title: "Dazzle Beauty Studio",
      description:
        "A luxury beauty studio website designed to showcase beauty services through a clean, elegant, and user-friendly interface.",
      technologies: ["HTML", "CSS"],
      liveUrl: "https://tiny-tapioca-01eff5.netlify.app",
      githubUrl: "https://github.com/Tee-0004/my-first-website",
    },
    {
      number: "02",
      title: "Lunar Digital Clock",
      description:
        "A modern digital clock interface inspired by the moon, combining a minimalist design with JavaScript functionality for real-time display.",
      technologies: ["HTML", "CSS", "JAVASCRIPT"],
      liveUrl: "https://luna-digital-clock.netlify.app",
      githubUrl: "https://github.com/Tee-0004/luna-digital-clock"
    },
    {
      number: "03",
      title: "Diamond Tech",
      description:
        "A responsive technology website redesigned with a modern layout, Bootstrap components, and Font Awesome icons.",
      technologies: ["HTML", "BOOTSTRAP", "FONT AWESOME"],
      liveUrl: "https://diamond-tech-redesign.netlify.app",
      githubUrl: "https://github.com/Tee-0004/Diamond-tech-redesign",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#f8f7f4] px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="grid gap-10 border-b border-black/15 pb-16 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-5 text-xs font-medium tracking-[0.35em] text-gray-500 dark:text-white">
              PROJECTS
            </p>

            <h2 className="font-serif text-6xl leading-[0.95] tracking-tight text-[#11121a] dark:text-white md:text-7xl">
              Selected
              <br />
              Projects
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-gray-700 lg:justify-self-end">
            A selection of projects that reflect my growing experience in web development and software development.
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 gap-12 pt-16 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => (
            <article key={project.number} className="group relative">

              {/* Live Website Preview */}
              <div className="relative mb-8 aspect-[4/3] overflow-hidden border border-black/15 bg-white">

                <iframe
                  src={project.liveUrl}
                  title={`${project.title} live preview`}
                  className="h-full w-full"
                  loading="lazy"
                />

                {/* Preview Overlay */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/10"
                  aria-label={`Open ${project.title}`}
                >
                  <span className="translate-y-3 invisible border border-white bg-black px-5 py-3 text-xs tracking-[0.2em] text-white opacity-0 pointer-events-none transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    OPEN PROJECT ↗
                  </span>
                </a>
              </div>

              {/* Project Number */}
              <div className="mb-5 flex items-center gap-4">
                <span className="font-serif text-2xl text-gray-400">
                  {project.number}
                </span>

                <span className="h-px w-16 bg-black/30"></span>
              </div>

              {/* Project Title */}
              <h3 className="mb-5 font-serif text-3xl leading-tight text-[#11121a]">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mb-6 text-sm leading-7 text-gray-700">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-8 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="border border-black/20 px-3 py-2 text-[10px] tracking-[0.18em] text-gray-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">

                {/* Live Project */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-project-button inline-flex items-center gap-3 bg-[#11121a] px-5 py-3 text-xs tracking-[0.16em] text-white transition-all duration-300 hover:bg-black"
                >
                  VIEW LIVE PROJECT
                  <span>↗</span>
                </a>

                {/* GitHub */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-black/25 px-5 py-3 text-xs tracking-[0.16em] text-[#11121a] transition-all duration-300 hover:bg-[#11121a] hover:text-white"
                >
                  GITHUB
                  <span>↗</span>
                </a>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;