import { useEffect, useRef } from "react";

export default function MouseLight() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    if (ref.current) {
      ref.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(59, 130, 246, 0.25) 0%, transparent 200px)`;
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        transition: "background 0.2s ease-out",
      }}
    />
  );
}
