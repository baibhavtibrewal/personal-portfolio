import PinnedProject from "./PinnedProject";

const pinnedProjects = [
  {
    title: "portfolio-website",
    description: "My personal portfolio built with React, TypeScript, and Tailwind CSS",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 42,
    forks: 12,
    href: "#",
  },
  {
    title: "node-api-boilerplate",
    description: "Production-ready Node.js REST API boilerplate with Express, JWT auth, and MongoDB",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 128,
    forks: 34,
    href: "#",
  },
  {
    title: "react-dashboard",
    description: "Modern analytics dashboard with real-time data visualization and charts",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 89,
    forks: 21,
    href: "#",
  },
  {
    title: "ai-chatbot",
    description: "Conversational AI chatbot powered by OpenAI API with streaming responses",
    language: "Python",
    languageColor: "#3572A5",
    stars: 256,
    forks: 67,
    href: "#",
  },
  {
    title: "ecommerce-fullstack",
    description: "Full-stack e-commerce platform with payment integration and admin panel",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 73,
    forks: 19,
    href: "#",
  },
  {
    title: "cli-task-manager",
    description: "Terminal-based task management tool with priorities and deadlines",
    language: "Rust",
    languageColor: "#dea584",
    stars: 35,
    forks: 8,
    href: "#",
  },
];

const ContentArea = () => {
  return (
    <section className="flex-1 min-w-0">
      <div>
        <h2 className="text-foreground font-normal mb-3 text-base">
          Pinned
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pinnedProjects.map((project) => (
            <PinnedProject key={project.title} {...project} />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-foreground font-normal mb-3 text-base">About</h2>
        <div className="border border-border rounded-md p-6 bg-card">
          <p className="text-foreground text-sm leading-relaxed mb-4">
            Hey! I'm Baibhav Tibrewal — a full-stack developer passionate about building scalable web applications 
            and exploring cutting-edge technologies. I love working with React, Node.js, TypeScript, and cloud platforms.
          </p>
          <p className="text-foreground text-sm leading-relaxed mb-4">
            When I'm not coding, you'll find me contributing to open-source projects, writing technical blogs, 
            or experimenting with AI/ML tools.
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

      <div className="mt-8">
        <h2 className="text-foreground font-normal mb-3 text-base">Contact</h2>
        <div className="border border-border rounded-md p-6 bg-card">
          <p className="text-muted-foreground text-sm">
            Sponsors & collaborators can reach at{" "}
            <a href="mailto:baibhav@example.com" className="text-link hover:underline">
              baibhav@example.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentArea;
