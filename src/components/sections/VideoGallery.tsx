"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

const reelUrls = [
  "https://www.instagram.com/reel/DE13uCxzplp/",
  "https://www.instagram.com/reel/DNnAMGczwPP/",
  "https://www.instagram.com/reel/DVbB1syAMfy/",
  "https://www.instagram.com/reel/DVvs2PSFYKt/",
  "https://www.instagram.com/reel/DWOcyM1Cd4n/",
  "https://www.instagram.com/reel/DWWCdXZjGcc/",
  "https://www.instagram.com/reel/DWoF43DCTWE/",
];

export default function VideoGallery() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://www.instagram.com/embed.js"]'
    ) as HTMLScriptElement | null;

    if (existingScript && window.instgrm?.Embeds?.process) {
      window.instgrm.Embeds.process();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.instgrm?.Embeds?.process) {
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <section id="video-gallery" className="py-16 lg:py-20 bg-white">
      <div className="container-custom px-6">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
            Instagram Videos
          </p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-secondary">
            Watch Our Latest Reels
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {reelUrls.map((url) => (
            <div
              key={url}
              className="rounded-2xl overflow-hidden border border-border/60 bg-slate-50 shadow-sm"
            >
              <div className="h-[390px] sm:h-[360px] lg:h-[340px] overflow-auto p-2 bg-white">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={url}
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: 0,
                    borderRadius: 12,
                    boxShadow: "none",
                    margin: 0,
                    maxWidth: "100%",
                    minWidth: "100%",
                    width: "100%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
