import { Book, LayoutGrid, Star, Package } from "lucide-react";
import { Github, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import avatar from "@/assets/avatar.png";

const tabs = [
  { icon: Book, label: "Overview", active: true },
  { icon: LayoutGrid, label: "Projects" },
  { icon: Package, label: "Packages" },
  { icon: Star, label: "Stars" },
];

const NavBar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {/* Top header bar */}
      <header className="border-b border-border bg-nav px-4 py-3">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="https://github.com/baibhavtibrewal" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-8 h-8 text-foreground" />
            </a>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a href="https://github.com/baibhavtibrewal" target="_blank" rel="noopener noreferrer">
              <img
                src={avatar}
                alt="Baibhav Tibrewal"
                className="w-8 h-8 rounded-full border border-border object-cover"
              />
            </a>
          </div>
        </div>
      </header>

      {/* Profile tabs nav */}
      <nav className="border-b border-border bg-nav" aria-label="Profile navigation">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto">
            {tabs.map(({ icon: Icon, label, active }) => (
              <button
                key={label}
                className={`flex items-center gap-1.5 px-3 py-3 text-sm transition-colors border-b-2 whitespace-nowrap ${
                  active
                    ? "border-primary text-foreground font-medium"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
