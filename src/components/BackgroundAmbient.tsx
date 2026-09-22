export default function BackgroundAmbient({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Subtle modern grid overlay */}
      <div 
        className={`absolute inset-0 opacity-[0.035] transition-opacity duration-700 ${
          isDarkMode ? 'text-white' : 'text-slate-900'
        }`}
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Ambient Gradient Glows - Sophisticated Indigo & Cyan palette */}
      {isDarkMode ? (
        <>
          <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px]" />
          <div className="absolute top-[35%] -right-40 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-[20%] left-[-100px] w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-[-100px] right-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px]" />
        </>
      ) : (
        <>
          <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-indigo-200/40 rounded-full blur-[140px]" />
          <div className="absolute top-[35%] -right-40 w-[500px] h-[500px] bg-cyan-200/40 rounded-full blur-[140px]" />
          <div className="absolute bottom-[-100px] right-1/4 w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-[140px]" />
        </>
      )}
    </div>
  );
}
