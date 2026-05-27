import { useState, useEffect } from "react";

const PHRASES = [
  "Ayurvedic Excellence",
  "GMP-Certified Manufacturing",
  "Your Vision. Our Expertise.",
  "From Concept to Shelf",
];

export default function TypewriterText({ className = "" }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % PHRASES.length);
        setVisible(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      data-testid="typewriter-text"
      className={`inline-block transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"} ${className}`}
    >
      {PHRASES[index]}
    </span>
  );
}
