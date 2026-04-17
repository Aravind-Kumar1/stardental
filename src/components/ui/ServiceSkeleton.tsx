export default function ServiceSkeleton() {
  return (
    <div className="premium-card bg-slate-50 border border-slate-100 overflow-hidden flex flex-col h-full animate-pulse">
      <div className="relative aspect-[16/11] bg-slate-200" />
      <div className="p-5 flex flex-col flex-1 gap-4">
        <div className="h-6 bg-slate-200 rounded-md w-3/4" />
        <div className="space-y-2">
          <div className="h-4 bg-slate-200 rounded-md w-full" />
          <div className="h-4 bg-slate-200 rounded-md w-5/6" />
        </div>
        <div className="mt-auto pt-4 border-t border-slate-100 h-10 bg-slate-100/50" />
      </div>
    </div>
  );
}
