"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  { type: "cloudinary", url: "https://res.cloudinary.com/dnf6zexsv/video/upload/v1776363850/vid_4_w4qztr.mp4" },
  { type: "cloudinary", url: "https://res.cloudinary.com/dnf6zexsv/video/upload/v1776363850/Your_mouth_gives_early_signs_-_don_t_ignore_them.Bleeding_gums_small_cavities_and_poor_oral_hy_hgkcgo.mp4" },
  { type: "cloudinary", url: "https://res.cloudinary.com/dnf6zexsv/video/upload/v1776363850/vide_3_ujf4kz.mp4" },
  { type: "cloudinary", url: "https://res.cloudinary.com/dnf6zexsv/video/upload/v1776363849/One_of_the_most_common_questions_I_get_is_-How_long_does_a_crown_or_bridge_lastWith_proper_care_swsyvh.mp4" },
  { type: "instagram", id: "DE13uCxzplp" },
  { type: "instagram", id: "DNnAMGczwPP" },
];

export default function VideoGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const handlePlay = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const allVideos = document.querySelectorAll("video");
    allVideos.forEach(v => {
      if (v !== e.target) v.pause();
    });
  };

  return (
    <section id="video-gallery" className="section-padding overflow-hidden">
      <div className="container-custom px-6 relative">
        <div className="flex justify-between items-end mb-8 max-w-7xl mx-auto">
          <div>
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              Clinical Insights
            </p>
            <h2 className="heading-section mb-0">
              Watch Our Latest Videos
            </h2>
          </div>
          
          {/* Navigation Buttons */}
          <div className="hidden md:flex gap-3 mb-1">
            <button 
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-border/80 flex items-center justify-center text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-border/80 flex items-center justify-center text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar scroll-smooth"
        >
          {videos.map((video, idx) => (
            <div
              key={idx}
              className="min-w-[280px] sm:min-w-[300px] snap-center rounded-2xl overflow-hidden border border-border/60 bg-white shadow-sm shrink-0"
            >
              <div className="relative h-[460px] sm:h-[500px] lg:h-[520px] bg-white overflow-hidden">
                {video.type === "cloudinary" ? (
                  <video
                    src={video.url}
                    controls
                    controlsList="nodownload nofullscreen noremoteplayback"
                    disablePictureInPicture
                    onPlay={handlePlay}
                    className="w-full h-full object-cover"
                    muted
                  />
                ) : (
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 scale-[1.5] origin-center">
                      <iframe
                        src={`https://www.instagram.com/reel/${video.id}/embed/`}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] w-full h-[140%] border-0"
                        scrolling="no"
                        loading="lazy"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        title={`Instagram reel ${video.id}`}
                      />
                    </div>
                    {/* Footnote Mask to hide IG branding - Massive enough to cover footer and like button */}
                    <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-white border-t border-border/10 z-10" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
