export default function Loading() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.10),_transparent_36%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.10),_transparent_34%)]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_4s_linear_infinite]" />
          <div className="absolute inset-4 rounded-full border border-primary/10 animate-[spin_7s_linear_infinite_reverse]" />
          <div className="absolute inset-8 rounded-full bg-primary/10 blur-2xl animate-[pulse_2.4s_ease-in-out_infinite]" />

          <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full bg-white shadow-2xl border border-border/40 flex items-center justify-center animate-[logoFloat_2.8s_ease-in-out_infinite]">
            <div className="relative h-16 w-16 sm:h-20 sm:w-20">
              <img
                src="/images/Logo Blue.png"
                alt="Star Smiles Dental Care"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-2">
          <p className="text-secondary font-bold text-lg sm:text-xl tracking-tight">
            Star Smiles Dental Care
          </p>
          <p className="text-muted-foreground font-medium">
            Loading your page...
          </p>
        </div>
      </div>
    </main>
  );
}
