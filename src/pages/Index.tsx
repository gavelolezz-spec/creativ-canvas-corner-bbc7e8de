import { useState, useEffect, useCallback } from "react";
import Sidebar from "@/components/Sidebar";
import HomeView from "@/components/HomeView";
import BookmarksView from "@/components/BookmarksView";
import HistoryView from "@/components/HistoryView";
import SettingsView from "@/components/SettingsView";
import CommandPalette from "@/components/CommandPalette";

type View = "home" | "bookmarks" | "history" | "settings";

const Index = () => {
  const [activeView, setActiveView] = useState<View>("home");
  const [cmdOpen, setCmdOpen] = useState(false);

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

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar
        activeView={activeView}
        onViewChange={setActiveView}
        onCommandPalette={() => setCmdOpen(true)}
      />
      <main className="flex-1 ml-12">
        {activeView === "home" && <HomeView />}
        {activeView === "bookmarks" && <BookmarksView />}
        {activeView === "history" && <HistoryView />}
        {activeView === "settings" && <SettingsView />}
      </main>
      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />
    </div>
  );
};

export default Index;
