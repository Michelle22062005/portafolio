'use client';
import { useEffect, useRef } from "react";

export default function ConstellationBackground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        const MAX_DIST = 130;
    const COUNT = 90;
        const particles = Array.from({ length: COUNT }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            dx: (Math.random() - 0.5) * 0.3,
            dy: (Math.random() - 0.5) * 0.3,
            size: Math.random() * 1.5 + 0.5,
        }));
        let mouse = { x: -9999, y: -9999 };
         window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
        window.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Set style for particles
            ctx.fillStyle = "rgba(169, 144, 212, 0.4)"; // Using the accent color from CSS
            ctx.strokeStyle = "rgba(169, 144, 212, 0.08)";
            ctx.lineWidth = 0.5;

            for (let i = 0; i < particles.length; i++) {
                
                const p = particles[i];
                p.x += p.dx;
                p.y += p.dy;

                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) { p.dx += dx * 0.00008; p.dy += dy * 0.00008; }
        const speed = Math.sqrt(p.dx * p.dx + p.dy * p.dy);
        if (speed > 0.7) { p.dx *= 0.97; p.dy *= 0.97; }
      }
                for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(169,144,212,${(1 - d / MAX_DIST) * 0.22})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 150) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(200,175,240,${(1 - d / 150) * 0.35})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(200,185,230,0.75)';
        ctx.fill();
      }


            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return <canvas id="constellation-bg" ref={canvasRef}></canvas>;
}