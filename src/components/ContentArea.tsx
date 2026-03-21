import PinnedProject from "./PinnedProject";
import ContributionGraph from "./ContributionGraph";

const pinnedProjects = [
  {
    title: "personal-portfolio",
    description: "My personal portfolio built with React, TypeScript, and Tailwind CSS",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 0,
    forks: 0,
    href: "https://github.com/baibhavtibrewal/personal-portfolio",
  },
];

const ContentArea = () => {
  return (
    <section className="flex-1 min-w-0">
      {/* About */}
      <div>
        <h2 className="text-foreground font-normal mb-3 text-base">About</h2>
        <div className="border border-border rounded-md p-6 bg-card">
          <p className="text-foreground text-sm leading-relaxed mb-4">
            Hey! I'm Baibhav Tibrewal — a full-stack developer passionate about building scalable web applications
            and exploring cutting-edge technologies. I love working with React, Node.js, TypeScript, and cloud platforms.
          </p>
          <p className="text-foreground text-sm leading-relaxed mb-4">
            When I'm not coding, you'll find me writing technical blogs or experimenting with AI/ML tools.
          </p>
          <div className="flex flex-wrap gap-2">
            {["React", "Node.js", "TypeScript", "Python", "MongoDB", "PostgreSQL", "Docker", "AWS"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-tag text-tag-foreground text-xs px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Pinned Projects */}
      <div className="mt-8">
        <h2 className="text-foreground font-normal mb-3 text-base">Pinned</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pinnedProjects.map((project) => (
            <PinnedProject key={project.title} {...project} />
          ))}
        </div>
      </div>

      {/* Contribution Graph */}
      <div className="mt-8">
        <h2 className="text-foreground font-normal mb-3 text-base">Contribution Activity</h2>
        <ContributionGraph />
      </div>

      {/* Contact */}
      <div className="mt-8">
        <h2 className="text-foreground font-normal mb-3 text-base">Contact</h2>
        <div className="border border-border rounded-md p-6 bg-card">
          <p className="text-muted-foreground text-sm">
            Sponsors & collaborators can reach me at{" "}
            <a href="mailto:baibhavtibrewal.dev@gmail.com" className="text-link hover:underline">
              baibhavtibrewal9@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentArea;
