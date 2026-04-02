import { useState } from "react";

const themes = [
  { id: "fern", name: "Fern", color: "hsl(145, 63%, 42%)" },
  { id: "ocean", name: "Ocean", color: "hsl(210, 70%, 50%)" },
  { id: "sunset", name: "Sunset", color: "hsl(20, 80%, 55%)" },
  { id: "lavender", name: "Lavender", color: "hsl(270, 50%, 60%)" },
  { id: "rose", name: "Rose", color: "hsl(340, 65%, 55%)" },
  { id: "gold", name: "Gold", color: "hsl(45, 80%, 55%)" },
];

const Toggle = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
  <button
    onClick={onChange}
    className={`w-9 h-5 rounded-full transition-colors relative ${
      checked ? "bg-primary" : "bg-muted"
    }`}
  >
    <div
      className={`w-3.5 h-3.5 rounded-full bg-foreground absolute top-0.5 transition-transform ${
        checked ? "translate-x-[18px]" : "translate-x-0.5"
      }`}
    />
  </button>
);

const SettingsView = () => {
  const [use24h, setUse24h] = useState(true);
  const [showSeconds, setShowSeconds] = useState(false);
  const [activeTheme, setActiveTheme] = useState("fern");

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold text-foreground mb-6">Settings</h1>

      <div className="space-y-6">
        <div className="bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">General</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-1">
              <span className="text-sm text-secondary-foreground">Search engine</span>
              <span className="text-xs text-muted-foreground">DuckDuckGo</span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-sm text-secondary-foreground">24-hour clock</span>
              <Toggle checked={use24h} onChange={() => setUse24h(!use24h)} />
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-sm text-secondary-foreground">Show seconds</span>
              <Toggle checked={showSeconds} onChange={() => setShowSeconds(!showSeconds)} />
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">About KittyCat</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-1">
              <span className="text-sm text-secondary-foreground">Version</span>
              <span className="text-xs text-muted-foreground">1.0.0</span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-sm text-secondary-foreground">Theme</span>
              <span className="text-xs text-muted-foreground capitalize">{activeTheme}</span>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Themes</h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setActiveTheme(theme.id)}
                className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all ${
                  activeTheme === theme.id
                    ? "border-primary bg-surface-hover"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <div
                  className="w-8 h-8 rounded-full"
                  style={{ backgroundColor: theme.color }}
                />
                <span className="text-[10px] text-muted-foreground">{theme.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
