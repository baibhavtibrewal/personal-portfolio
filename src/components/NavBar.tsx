import { Book, LayoutGrid, Star, Package } from "lucide-react";

const tabs = [
  { icon: Book, label: "Overview", active: true },
  { icon: LayoutGrid, label: "Projects", count: 12 },
  { icon: Package, label: "Packages" },
  { icon: Star, label: "Stars", count: 5 },
];

const NavBar = () => {
  return (
    <nav className="border-b border-border bg-nav" aria-label="Profile navigation">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-1 overflow-x-auto">
          {tabs.map(({ icon: Icon, label, count, active }) => (
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
              {count !== undefined && (
                <span className="bg-secondary text-secondary-foreground text-xs rounded-full px-1.5 py-0.5 min-w-[20px] text-center">
                  {count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
