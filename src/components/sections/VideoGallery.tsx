const reelIds = [
  "DE13uCxzplp",
  "DNnAMGczwPP",
  "DVbB1syAMfy",
  "DVvs2PSFYKt",
  "DWOcyM1Cd4n",
  "DWWCdXZjGcc",
  "DWoF43DCTWE",
];

export default function VideoGallery() {

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
          {reelIds.map((reelId) => (
            <div
              key={reelId}
              className="rounded-2xl overflow-hidden border border-border/60 bg-slate-50 shadow-sm"
            >
              <div className="relative h-[390px] sm:h-[360px] lg:h-[340px] bg-slate-100 overflow-hidden">
                <iframe
                  src={`https://www.instagram.com/reel/${reelId}/embed/`}
                  className="absolute top-[-74px] left-0 w-full h-[calc(100%+150px)] border-0"
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title={`Instagram reel ${reelId}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
