import React, { useEffect, useRef } from 'react';

export default function CyberBackground({ isDarkMode }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle system setup
    const particleCount = Math.min(Math.floor(width / 18), 70);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 0.8,
        color: Math.random() > 0.5 ? '#00f2fe' : '#00f5d4'
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Particle physics & rendering
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDarkMode ? p.color : '#0284c7';
        ctx.globalAlpha = isDarkMode ? 0.6 : 0.4;
        ctx.fill();

        // Connect nearby particles
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDarkMode ? '#00f2fe' : '#0ea5e9';
            ctx.globalAlpha = (1 - dist / 120) * (isDarkMode ? 0.18 : 0.12);
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      // Mouse connection effect
      particles.forEach((p) => {
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = isDarkMode ? '#00f5d4' : '#0284c7';
          ctx.globalAlpha = (1 - dist / 150) * 0.3;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic ambient glowing light blobs */}
      <div 
        className={`absolute -top-40 -left-40 w-96 h-96 rounded-full blur-[140px] transition-all duration-700 ${
          isDarkMode ? 'bg-cyan-600/20' : 'bg-cyan-200/40'
        }`} 
      />
      <div 
        className={`absolute top-1/3 -right-40 w-96 h-96 rounded-full blur-[140px] transition-all duration-700 ${
          isDarkMode ? 'bg-emerald-600/15' : 'bg-teal-200/35'
        }`} 
      />
      <div 
        className={`absolute -bottom-40 left-1/3 w-[30rem] h-[30rem] rounded-full blur-[160px] transition-all duration-700 ${
          isDarkMode ? 'bg-purple-700/15' : 'bg-purple-200/30'
        }`} 
      />

      {/* Cyber Grid Pattern Overlay */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-30" />

      {/* Canvas particle network */}
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
