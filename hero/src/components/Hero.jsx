export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background ambient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        
        {/* Badge tag */}
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-4 py-1.5 text-xs font-medium text-indigo-400 mb-8 backdrop-blur-sm shadow-inner">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
          <span>Introducing BrandUI v2.0</span>
          <span className="text-slate-600">→</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15]">
          Build modern web apps <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">faster than ever.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          A production-ready component system engineered for performance, responsive design, and an elite developer experience.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 hover:bg-indigo-500 transition-all active:scale-95">
            Start Building Free
          </button>
          <button className="w-full sm:w-auto rounded-full border border-slate-800 bg-slate-900/50 px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-all">
            View Documentation
          </button>
        </div>

      </div>
    </section>
  );
}