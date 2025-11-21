import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId: number;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Particle System configuration
    const particles: Particle[] = [];
    const particleCount = 300;
    const connectionDistance = 100;

    class Particle {
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      baseZ: number;
      angle: number;
      radius: number;
      speed: number;
      color: string;
      size: number;

      constructor() {
        // Initialize in a cloud around the center
        this.angle = Math.random() * Math.PI * 2;
        this.radius = 150 + Math.random() * 300;
        this.speed = 0.001 + Math.random() * 0.003;

        // Store base positions for wave calculations
        this.baseX = (Math.random() - 0.5) * 200;
        this.baseY = (Math.random() - 0.5) * height * 0.8;
        this.baseZ = (Math.random() - 0.5) * 200;

        this.x = 0;
        this.y = 0;
        this.z = 0;

        this.size = 2 + Math.random() * 2;
        // Premium colors: Slate-300 to Indigo-400 mix
        this.color = Math.random() > 0.6 ? '99, 102, 241' : '148, 163, 184'; // Indigo or Slate RGB
      }

      update(time: number) {
        this.angle += this.speed;

        // "Fabric" movement logic
        // We move particles in a 3D orbit but add sine wave distortions

        const orbitRadius = this.radius + Math.sin(time * 0.001 + this.baseY * 0.01) * 20;

        this.x = Math.cos(this.angle) * orbitRadius;
        this.z = Math.sin(this.angle) * orbitRadius;
        this.y = this.baseY + Math.sin(time * 0.002 + this.angle * 2) * 30;

        // Project 3D to 2D
        const fov = 400;
        const scale = fov / (fov + this.z + 500); // Add offset to push scene back

        const screenX = width / 2 + this.x * scale;
        const screenY = height / 2 + this.y * scale - 50; // -50 to align slightly higher

        return { x: screenX, y: screenY, scale, z: this.z };
      }

      draw(ctx: CanvasRenderingContext2D, time: number) {
        const p = this.update(time);

        ctx.beginPath();
        ctx.arc(p.x, p.y, this.size * p.scale, 0, Math.PI * 2);
        // Alpha based on depth (scale)
        ctx.fillStyle = `rgba(${this.color}, ${Math.max(0.3, p.scale * 0.8)})`;
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Sort particles by Z-index (approximated by scale for simple painter's algorithm) is tricky in this loop structure
      // without re-sorting every frame. For floating dots, simple draw order is usually fine given transparency.

      particles.forEach(p => p.draw(ctx, time));

      animationFrameId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-50 overflow-hidden pt-20">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 text-center flex flex-col items-center">
        {/* Profile Image with 3D Feel */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 group perspective-1000">
          {/* Subtle glow behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/10 rounded-full blur-3xl -z-10" />

          <img
            src="/images/ulrich_kotze.png"
            alt="Ulrich Kotze"
            className="w-full h-full object-contain object-bottom drop-shadow-2xl transition-transform duration-700 hover:scale-105 mask-image-gradient-b"
            style={{
              maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
            }}
          />
        </div>

        <div className="space-y-6 relative">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            Ulrich Kotze
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Technical Director & Machine Learning Specialist
          </p>
          <p className="text-slate-500 max-w-lg mx-auto leading-relaxed">
            Unlocking potential through innovative data solutions and strategic leadership.
          </p>

          <div className="pt-8 flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all hover:scale-105 focus:outline-none shadow-lg shadow-slate-900/20"
            >
              Get in Touch
            </a>
            <a
              href="#experience"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all focus:outline-none shadow-sm"
            >
              View Timeline
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400 z-20">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};