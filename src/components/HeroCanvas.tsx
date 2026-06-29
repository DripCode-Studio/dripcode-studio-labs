"use client";

import { useEffect, useRef } from "react";

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    let W: number, H: number;
    let animId: number;

    function resize() {
      W = canvas!.width = canvas!.offsetWidth;
      H = canvas!.height = canvas!.offsetHeight;
    }

    function initNodes() {
      nodes = [];
      const count = Math.floor((W * H) / 22000);
      for (let i = 0; i < Math.min(count, 55); i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.8 + 0.6,
        });
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);
      const maxDist = 160;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.18;
            ctx!.beginPath();
            ctx!.moveTo(nodes[i].x, nodes[i].y);
            ctx!.lineTo(nodes[j].x, nodes[j].y);
            ctx!.strokeStyle = `rgba(59,130,246,${alpha})`;
            ctx!.lineWidth = 0.7;
            ctx!.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(59,130,246,0.5)";
        ctx!.fill();
      }
    }

    function update() {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }
    }

    function loop() {
      update();
      draw();
      animId = requestAnimationFrame(loop);
    }

    resize();
    initNodes();
    loop();

    const handleResize = () => {
      resize();
      initNodes();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}
