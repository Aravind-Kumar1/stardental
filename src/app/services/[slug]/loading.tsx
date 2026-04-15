export default function ServiceDetailLoading() {
  return (
    <main className="relative min-h-screen animate-pulse">
      <div className="h-20 bg-slate-100 border-b border-border/40" />
      <div className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-gradient-to-b from-slate-50 to-white px-6">
        <div className="container-custom">
          <div className="h-4 w-32 bg-slate-200 rounded mb-8" />
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="h-10 bg-slate-200 rounded-lg w-full max-w-lg" />
              <div className="h-10 bg-slate-200 rounded-lg w-5/6 max-w-md" />
              <div className="h-4 bg-slate-100 rounded w-full max-w-xl mt-6" />
              <div className="h-4 bg-slate-100 rounded w-full max-w-xl" />
              <div className="h-4 bg-slate-100 rounded w-4/5 max-w-lg" />
              <div className="flex gap-4 mt-8">
                <div className="h-14 w-40 bg-slate-200 rounded-2xl" />
                <div className="h-14 w-36 bg-slate-100 rounded-2xl" />
              </div>
            </div>
            <div className="aspect-[4/3] rounded-[2.5rem] bg-slate-200" />
          </div>
        </div>
      </div>
      <div className="py-16 px-6">
        <div className="container-custom grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-4">
            <div className="h-8 bg-slate-200 rounded w-1/2" />
            <div className="h-4 bg-slate-100 rounded w-full" />
            <div className="h-4 bg-slate-100 rounded w-full" />
            <div className="h-4 bg-slate-100 rounded w-3/4" />
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-20 bg-slate-100 rounded-2xl" />
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="h-80 bg-slate-100 rounded-[2rem]" />
          </div>
        </div>
      </div>
    </main>
  );
}
