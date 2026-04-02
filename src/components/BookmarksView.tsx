const bookmarks = [
  { name: "Reddit", icon: "👽", url: "https://reddit.com/", domain: "reddit.com" },
  { name: "YouTube", icon: "▶️", url: "https://youtube.com/", domain: "youtube.com" },
  { name: "GitHub", icon: "🐙", url: "https://github.com/", domain: "github.com" },
  { name: "Hacker News", icon: "🔶", url: "https://news.ycombinator.com/", domain: "news.ycombinator.com" },
  { name: "Wikipedia", icon: "📖", url: "https://wikipedia.org/", domain: "wikipedia.org" },
  { name: "DuckDuckGo", icon: "🦆", url: "https://duckduckgo.com/", domain: "duckduckgo.com" },
  { name: "Twitter/X", icon: "🐦", url: "https://twitter.com/", domain: "twitter.com" },
  { name: "Discord", icon: "💬", url: "https://discord.com/", domain: "discord.com" },
];

const BookmarksView = () => {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold text-foreground mb-6">Bookmarks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {bookmarks.map((bm) => (
          <a
            key={bm.name}
            href={bm.url}
            target="_top"
            className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:bg-surface-hover hover:border-primary/30 transition-all group"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">{bm.icon}</span>
            <div>
              <div className="text-sm font-medium text-foreground">{bm.name}</div>
              <div className="text-xs text-muted-foreground">{bm.domain}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BookmarksView;
