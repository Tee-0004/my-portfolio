import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaCloudArrowUp,
} from "react-icons/fa6";

function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: FaHtml5,
    },
    {
      name: "CSS",
      icon: FaCss3Alt,
    },
    {
      name: "JavaScript",
      icon: FaJs,
    },
    {
      name: "React",
      icon: FaReact,
    },
    {
      name: "Tailwind CSS",
      icon: FaCode,
    },
    {
      name: "Git",
      icon: FaGitAlt,
    },
    {
      name: "GitHub",
      icon: FaGithub,
    },
    {
      name: "VS Code",
      icon: FaCode,
    },
  ];

  return (
    <section
      id="skills"
      className="bg-white px-6 py-24 md:px-12 lg:px-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-end">

          <div>
            <p className="mb-5 text-xs font-medium tracking-[0.35em] text-gray-500 dark:text-white">
              Skills
            </p>

            <h2 className="max-w-xl font-serif text-5xl leading-[0.95] tracking-[-0.03em] text-gray-900 md:text-6xl lg:text-7xl">
              Skills I
              <br />
              Work With
            </h2>
          </div>

          <div className="max-w-xl lg:pb-2">
            <p className="text-sm leading-7 text-gray-600 md:text-base md:leading-8">
              I work with modern web technologies to build responsive and user-friendly digital experiences. As I grow as a developer, I continue to strengthen my technical skills through hands-on projects and practical learning.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4">

            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.name}
                  className={`group flex min-h-40 flex-col items-center justify-center border-b border-gray-200 px-4 py-10 text-center transition-all duration-300 hover:bg-[#f7f7f5] ${
                    index % 2 !== 1 ? "md:border-r" : ""
                  } ${
                    index % 4 !== 3 ? "lg:border-r" : ""
                  }`}
                >
                  <Icon
                    className="mb-5 text-4xl text-gray-800 transition-transform duration-300 group-hover:scale-110 md:text-5xl"
                    aria-hidden="true"
                  />

                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-700 md:text-sm">
                    {skill.name}
                  </p>
                </div>
              );
            })}

          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 flex flex-col gap-5 border-t border-gray-200 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-lg text-sm leading-7 text-gray-900 dark:text-white">
            I'm continuously learning through hands-on projects, experimenting with new technologies, and improving with every project I build.
            </p>
          <span className="text-xs uppercase tracking-[0.25em] text-gray-900 dark:text-white">
            Always Learning
          </span>
        </div>

      </div>
    </section>
  );
}

export default Skills;