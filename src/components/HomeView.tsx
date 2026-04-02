import { useState, useEffect } from "react";
import { Search } from "lucide-react";

const quickApps = [
  { name: "Reddit", icon: "👽", url: "https://reddit.com/" },
  { name: "YouTube", icon: "▶️", url: "https://youtube.com/" },
  { name: "GitHub", icon: "🐙", url: "https://github.com/" },
  { name: "Twitter", icon: "🐦", url: "https://twitter.com/" },
  { name: "Twitch", icon: "🎮", url: "https://twitch.tv/" },
  { name: "Netflix", icon: "🎬", url: "https://netflix.com/" },
  { name: "Gmail", icon: "📧", url: "https://mail.google.com/" },
  { name: "Maps", icon: "🗺️", url: "https://maps.google.com/" },
];

const HomeView = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const dateStr = time.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="text-center mb-10">
        <div className="text-7xl md:text-8xl font-mono font-light tracking-tight text-foreground">
          {hours}:{minutes}
        </div>
        <div className="text-muted-foreground text-sm mt-2">{dateStr}</div>
      </div>

      <form
        action="https://duckduckgo.com/"
        method="get"
        target="_top"
        className="w-full max-w-lg mb-10"
      >
        <div className="flex items-center bg-card border border-border rounded-xl overflow-hidden focus-within:ring-1 focus-within:ring-primary transition-all">
          <input
            name="q"
            placeholder="Search with DuckDuckGo..."
            autoComplete="off"
            className="flex-1 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
          <button
            type="submit"
            className="px-4 py-3 bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <Search size={16} />
          </button>
        </div>
      </form>

      <div className="w-full max-w-lg">
        <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-3">
          Quick Apps
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
          {quickApps.map((app) => (
            <a
              key={app.name}
              href={app.url}
              target="_top"
              className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-card border border-border hover:bg-surface-hover hover:border-primary/30 transition-all group"
            >
              <span className="text-xl group-hover:scale-110 transition-transform">
                {app.icon}
              </span>
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                {app.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeView;
