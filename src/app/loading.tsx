"use client";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[9999]">
      {/* Rapid top progress bar */}
      <div className="h-1.5 w-full bg-primary/5 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-primary via-accent to-primary-dark w-full animate-[loading_2.5s_ease-in-out_infinite]" />
      </div>
      
      {/* Backdrop for focus */}
      <div className="fixed inset-0 bg-white/40 backdrop-blur-[2px] pointer-events-none flex items-center justify-center">
         <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>

      <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
