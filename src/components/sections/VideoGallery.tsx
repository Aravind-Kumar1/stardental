"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

const videos = [
  { type: "cloudinary", url: "https://res.cloudinary.com/dnf6zexsv/video/upload/v1776363850/vid_4_w4qztr.mp4" },
  { type: "cloudinary", url: "https://res.cloudinary.com/dnf6zexsv/video/upload/v1776363850/Your_mouth_gives_early_signs_-_don_t_ignore_them.Bleeding_gums_small_cavities_and_poor_oral_hy_hgkcgo.mp4" },
  { type: "cloudinary", url: "https://res.cloudinary.com/dnf6zexsv/video/upload/v1776363850/vide_3_ujf4kz.mp4" },
  { type: "cloudinary", url: "https://res.cloudinary.com/dnf6zexsv/video/upload/v1776363849/One_of_the_most_common_questions_I_get_is_-How_long_does_a_crown_or_bridge_lastWith_proper_care_swsyvh.mp4" },
  { type: "cloudinary", url: "https://res.cloudinary.com/dnf6zexsv/video/upload/v1776455449/dental_video_plvejz.mp4" },
  { type: "cloudinary", url: "https://res.cloudinary.com/dnf6zexsv/video/upload/v1776455443/fourth_video_yky2el.mp4" },
];

const VideoCard = ({ video, onPlayChange }: { video: { url: string }, onPlayChange: (playing: boolean) => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleClick = () => {
    if (!videoRef.current) return;
    
    if (videoRef.current.paused) {
      // Pause all other active videos globally so only THIS one plays
      const allVideos = document.querySelectorAll("video");
      allVideos.forEach(v => {
        if (v !== videoRef.current) {
          v.pause();
        }
      });
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div
      onClick={handleToggleClick}
      className="w-[200px] sm:w-[240px] md:w-[260px] lg:w-[280px] rounded-[1.5rem] overflow-hidden border border-border/60 bg-white shadow-xl shadow-blue-900/5 shrink-0 transform-gpu cursor-pointer group/card relative"
    >
      <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] bg-black overflow-hidden">
        <video
          ref={videoRef}
          src={video.url}
          loop
          playsInline
          onPlay={() => {
            setIsPlaying(true);
            onPlayChange(true);
          }}
          onPause={() => {
            setIsPlaying(false);
            onPlayChange(false);
          }}
          className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
        />
        
        {/* Play & Pause Overlay */}
        <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${isPlaying ? "bg-black/0 group-hover/card:bg-black/20" : "bg-black/20"}`}>
          <div className={`w-14 h-14 rounded-full backdrop-blur-md flex items-center justify-center border transition-all duration-300 ${isPlaying ? "bg-black/30 border-white/30 opacity-0 group-hover/card:opacity-100" : "bg-white/30 border-white/50 opacity-100"}`}>
            {isPlaying ? (
              <Pause size={24} className="fill-white text-white" />
            ) : (
              <Play size={24} className="fill-white text-white ml-1" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function VideoGallery() {
  const [activeMediaCount, setActiveMediaCount] = useState(0);

  const handlePlayChange = (isPlaying: boolean) => {
    setActiveMediaCount(prev => Math.max(0, isPlaying ? prev + 1 : prev - 1));
  };

  return (
    <section id="video-gallery" className="section-padding overflow-hidden bg-background">
      <div className="container-custom px-6 relative z-10">
        <div className="flex justify-between items-end mb-8 max-w-7xl mx-auto">
          <div>
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              Clinical Insights
            </p>
            <h2 className="heading-section mb-0">
              Watch Our Latest Videos
            </h2>
          </div>
        </div>
      </div>

      <div className="w-full relative mt-10">
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="relative flex overflow-hidden group/marquee w-full py-6">
          <div 
            className="flex gap-4 md:gap-6 animate-marquee group-hover/marquee:[animation-play-state:paused]"
            style={{ animationPlayState: activeMediaCount > 0 ? 'paused' : undefined }}
          >
            {[...videos, ...videos].map((video, idx) => (
              <VideoCard key={idx} video={video} onPlayChange={handlePlayChange} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
