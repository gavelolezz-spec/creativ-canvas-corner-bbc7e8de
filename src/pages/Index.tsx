import { useState, useEffect, useCallback } from "react";
import Sidebar from "@/components/Sidebar";
import HomeView from "@/components/HomeView";
import BookmarksView from "@/components/BookmarksView";
import HistoryView from "@/components/HistoryView";
import SettingsView from "@/components/SettingsView";
import CommandPalette from "@/components/CommandPalette";
import WebView from "@/components/WebView";

type View = "home" | "bookmarks" | "history" | "settings";

const Index = () => {
  const [activeView, setActiveView] = useState<View>("home");
  const [cmdOpen, setCmdOpen] = useState(false);
  const [webUrl, setWebUrl] = useState<string | null>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setCmdOpen((prev) => !prev);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const openSite = (url: string) => setWebUrl(url);
  const closeSite = () => setWebUrl(null);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar
        activeView={activeView}
        onViewChange={(v) => { setActiveView(v); setWebUrl(null); }}
        onCommandPalette={() => setCmdOpen(true)}
      />
      <main className="flex-1 ml-12">
        {webUrl ? (
          <WebView url={webUrl} onBack={closeSite} />
        ) : (
          <>
            {activeView === "home" && <HomeView onOpenSite={openSite} />}
            {activeView === "bookmarks" && <BookmarksView onOpenSite={openSite} />}
            {activeView === "history" && <HistoryView />}
            {activeView === "settings" && <SettingsView />}
          </>
        )}
      </main>
      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />
    </div>
  );
};

export default Index;
