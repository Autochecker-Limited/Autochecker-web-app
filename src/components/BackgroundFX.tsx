// src/components/BackgroundFX.tsx
export default function BackgroundFX() {
    return (
      <>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1100px_520px_at_20%_0%,rgba(34,211,238,.16),transparent),radial-gradient(800px_380px_at_80%_20%,rgba(59,130,246,.12),transparent),radial-gradient(700px_380px_at_50%_100%,rgba(14,165,233,.18),transparent)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]">
          <svg className="h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
  
        {/* floating cyan dots */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {Array.from({ length: 40 }).map((_, i) => (
            <span
              key={i}
              className="absolute h-1 w-1 animate-float rounded-full bg-cyan-300/70"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                opacity: 0.3 + Math.random() * 0.5,
              }}
            />
          ))}
        </div>
      </>
    );
  }
  