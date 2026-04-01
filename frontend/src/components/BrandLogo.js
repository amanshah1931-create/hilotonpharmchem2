const BrandLogo = ({ variant = "color", className = "" }) => {
  const isWhite = variant === "white";
  const primary = isWhite ? "#ffffff" : "#064e3b";
  const accent = isWhite ? "rgba(255,255,255,0.65)" : "#ea580c";

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`} data-testid="brand-logo">
      <svg viewBox="0 0 50 50" className="h-9 lg:h-11 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer ring */}
        <circle cx="25" cy="25" r="22" stroke={primary} strokeWidth="2.5" />
        {/* Left arc / D-shape */}
        <path d="M18 7C11 11 7 17.5 7 25s4 14 11 18" stroke={primary} strokeWidth="3.5" strokeLinecap="round" fill="none" />
        {/* Right arc / D-shape */}
        <path d="M32 7c7 4 11 10.5 11 18s-4 14-11 18" stroke={primary} strokeWidth="3.5" strokeLinecap="round" fill="none" />
        {/* Inner accent ellipse */}
        <ellipse cx="25" cy="25" rx="9" ry="15" stroke={accent} strokeWidth="2" fill="none" />
        {/* Center accent vertical line */}
        <line x1="25" y1="10" x2="25" y2="40" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
        {/* Horizontal crossbar */}
        <line x1="11" y1="25" x2="39" y2="25" stroke={primary} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <div className="flex flex-col leading-none">
        <span
          className="text-xl lg:text-2xl font-bold tracking-tight"
          style={{ fontFamily: "'Outfit', sans-serif", color: primary }}
        >
          HILTON
        </span>
        <span
          className="text-[8px] lg:text-[10px] font-semibold tracking-[0.2em] mt-0.5"
          style={{ fontFamily: "'Outfit', sans-serif", color: primary }}
        >
          PHARMA CHEM
        </span>
      </div>
    </div>
  );
};

export default BrandLogo;
