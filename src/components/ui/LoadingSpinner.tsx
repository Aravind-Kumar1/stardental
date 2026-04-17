import Image from "next/image";

export default function LoadingSpinner() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 py-24 bg-white/50 backdrop-blur-sm">
      {/* Branded Logo with Breath animation */}
      <div className="relative w-48 h-18 animate-logo-breath">
        <Image
          src="/images/Logo Blue.png"
          alt="Star Smiles Dental"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Modern Progress Indicator */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-1 w-[120px] bg-primary/5 rounded-full overflow-hidden">
          <div className="h-full bg-primary animate-loading-progress w-full" />
        </div>
        <p className="text-[#1A4996] font-bold tracking-[0.2em] text-[10px] uppercase animate-pulse">
          Creating Your Perfect Smile
        </p>
      </div>
    </div>
  );
}
