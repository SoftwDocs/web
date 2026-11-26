export default function Loading() {
  return (
    <div
      aria-label="Loading page"
      className="w-full animate-pulse px-5 pb-16 pt-24 sm:px-8 lg:px-10"
    >
      <div className="h-3 w-40 bg-white/10" />
      <div className="mt-8 h-12 w-3/4 bg-white/[0.07]" />
      <div className="mt-6 h-4 w-full bg-white/[0.05]" />
      <div className="mt-3 h-4 w-5/6 bg-white/[0.05]" />
      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {[0, 1, 2].map((item) => (
          <div key={item} className="h-28 border border-white/[0.06] bg-white/[0.02]" />
        ))}
      </div>
    </div>
  );
}
