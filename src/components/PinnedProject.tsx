import { Star, GitFork } from "lucide-react";

interface PinnedProjectProps {
  title: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  href: string;
}

const PinnedProject = ({ title, description, language, languageColor, stars, forks, href }: PinnedProjectProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-border rounded-md p-4 hover:border-foreground/30 transition-colors bg-card"
    >
      <div className="flex items-center gap-2 mb-2">
        <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 16 16" fill="currentColor">
          <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
        </svg>
        <span className="text-link font-semibold text-sm hover:underline">{title}</span>
        <span className="text-xs border border-border rounded-full px-2 py-0.5 text-muted-foreground ml-auto">
          Public
        </span>
      </div>
      <p className="text-xs text-muted-foreground mb-4 line-clamp-2">{description}</p>
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: languageColor }} />
          {language}
        </span>
        <span className="flex items-center gap-1">
          <Star className="w-3.5 h-3.5" />
          {stars}
        </span>
        <span className="flex items-center gap-1">
          <GitFork className="w-3.5 h-3.5" />
          {forks}
        </span>
      </div>
    </a>
  );
};

export default PinnedProject;
