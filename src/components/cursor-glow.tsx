"use client";

import { useEffect, useState } from 'react';

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-all duration-300 hidden md:block"
      style={{
        background: `radial-gradient(400px at ${position.x}px ${position.y}px, hsla(var(--primary) / 0.2), transparent 80%)`,
      }}
    />
  );
};

export default CursorGlow;
