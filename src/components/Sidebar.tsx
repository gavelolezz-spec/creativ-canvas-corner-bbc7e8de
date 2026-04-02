import { Home, Bookmark, Clock, Settings, Search, Cat } from "lucide-react";

type View = "home" | "bookmarks" | "history" | "settings";

interface SidebarProps {
  activeView: View;
  onViewChange: (view: View) => void;
  onCommandPalette: () => void;
}

const navItems: { id: View; icon: typeof Home; label: string }[] = [
  { id: "home", icon: Home, label: "Home" },
  { id: "bookmarks", icon: Bookmark, label: "Bookmarks" },
  { id: "history", icon: Clock, label: "History" },
];

const Sidebar = ({ activeView, onViewChange, onCommandPalette }: SidebarProps) => {
  return (
    <div className="fixed left-0 top-0 h-full w-12 bg-sidebar flex flex-col items-center py-3 border-r border-sidebar-border z-50">
      <button className="mb-4 p-1.5 rounded-lg bg-primary text-primary-foreground">
        <Cat size={18} />
      </button>

      <nav className="flex flex-col items-center gap-1 flex-1">
        {navItems.map(({ id, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onViewChange(id)}
            className={`p-2.5 rounded-lg transition-colors ${
              activeView === id
                ? "text-primary border-l-2 border-primary"
                : "text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent"
            }`}
          >
            <Icon size={18} />
          </button>
        ))}
      </nav>

      <div className="flex flex-col items-center gap-1 mt-auto">
        <div className="w-6 h-px bg-sidebar-border mb-1" />
        <button
          onClick={onCommandPalette}
          className="p-2.5 rounded-lg text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors"
        >
          <Search size={18} />
        </button>
        <button
          onClick={() => onViewChange("settings")}
          className={`p-2.5 rounded-lg transition-colors ${
            activeView === "settings"
              ? "text-primary"
              : "text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent"
          }`}
        >
          <Settings size={18} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
