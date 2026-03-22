import { Book, LayoutGrid, Star, Package, Menu, Search, Bell, Plus, Settings } from "lucide-react";
import { Github, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import avatar from "@/assets/avatar.webp";

const tabs = [
  { icon: Book, label: "Overview", active: true },
  { icon: LayoutGrid, label: "Repositories" },
  { icon: LayoutGrid, label: "Projects" },
  { icon: Package, label: "Packages" },
  { icon: Star, label: "Stars" },
];

const NavBar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {/* Top header bar - GitHub style */}
      <header className="border-b border-border bg-nav px-4 py-3">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4">
          {/* Left: hamburger + logo + username */}
          <div className="flex items-center gap-3 md:gap-4">
            <button className="text-muted-foreground hover:text-foreground p-1" aria-label="Menu">
              <Menu className="w-5 h-5" />
            </button>
            <a href="https://github.com/baibhavtibrewal" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-8 h-8 text-foreground" />
            </a>
            <span className="text-foreground font-semibold text-sm hidden sm:inline">baibhavtibrewal</span>
          </div>

          {/* Center: search bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="flex items-center w-full border border-border rounded-md bg-background px-3 py-1.5 text-sm text-muted-foreground">
              <Search className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>Type <kbd className="border border-border rounded px-1 text-xs mx-1">/</kbd> to search</span>
            </div>
          </div>

          {/* Right: icons + toggle + avatar */}
          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="hidden sm:block p-1.5 text-muted-foreground hover:text-foreground" aria-label="Settings">
              <Settings className="w-5 h-5" />
            </button>
            <button className="hidden sm:block p-1.5 text-muted-foreground hover:text-foreground" aria-label="Create new">
              <Plus className="w-5 h-5" />
            </button>
            <button className="hidden sm:block p-1.5 text-muted-foreground hover:text-foreground" aria-label="Notifications">
              <Bell className="w-5 h-5" />
            </button>
            <a href="https://github.com/baibhavtibrewal" target="_blank" rel="noopener noreferrer">
              <img
                src={avatar}
                alt="Baibhav Tibrewal"
                className="w-8 h-8 rounded-full border border-border object-cover object-top"
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
