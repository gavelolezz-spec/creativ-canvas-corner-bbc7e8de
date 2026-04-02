import { ArrowLeft, ExternalLink, RotateCw } from "lucide-react";

interface WebViewProps {
  url: string;
  onBack: () => void;
}

const WebView = ({ url, onBack }: WebViewProps) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center gap-2 px-4 py-2 bg-card border-b border-border">
        <button
          onClick={onBack}
          className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-colors"
        >
          <ArrowLeft size={16} />
        </button>
        <button
          onClick={() => {
            const iframe = document.querySelector<HTMLIFrameElement>("#webview-frame");
            if (iframe) iframe.src = iframe.src;
          }}
          className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-colors"
        >
          <RotateCw size={14} />
        </button>
        <div className="flex-1 bg-muted rounded-lg px-3 py-1.5 text-xs text-muted-foreground truncate">
          {url}
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-colors"
        >
          <ExternalLink size={14} />
        </a>
      </div>
      <iframe
        id="webview-frame"
        src={url}
        className="flex-1 w-full border-none bg-background"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        title="Web View"
      />
    </div>
  );
};

export default WebView;
