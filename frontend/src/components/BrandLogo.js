import { useState } from "react";

const LOGO_URL = "/logo.png";

const BrandLogo = ({ variant = "color", className = "" }) => {
  const isWhite = variant === "white";
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`select-none ${className}`} data-testid="brand-logo">
        <span
          className={`font-bold tracking-tight text-lg lg:text-xl ${isWhite ? "text-white" : "text-[#064e3b]"}`}
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Hilton <span className={isWhite ? "text-[#e8b84b]" : "text-[#d4a017]"}>Pharma Chem</span>
        </span>
      </div>
    );
  }

  return (
    <div className={`select-none ${className}`} data-testid="brand-logo">
      <img
        src={LOGO_URL}
        alt="Hilton Pharma Chem"
        onError={() => setFailed(true)}
        className={`h-9 lg:h-11 w-auto ${isWhite ? "logo-brand-white" : ""}`}
      />
    </div>
  );
};

export default BrandLogo;
