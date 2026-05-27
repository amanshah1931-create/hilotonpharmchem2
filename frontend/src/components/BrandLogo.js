const LOGO_URL = "https://customer-assets.emergentagent.com/job_hilton-pharma-chem/artifacts/dwhhk8op_Hilton%20Logo%20FINAL.png";

const BrandLogo = ({ variant = "color", className = "" }) => {
  const isWhite = variant === "white";

  return (
    <div className={`select-none ${className}`} data-testid="brand-logo">
      <img
        src={LOGO_URL}
        alt="Hilton Pharma Chem"
        className={`h-10 lg:h-12 w-auto ${isWhite ? "logo-brand-white" : "logo-brand-green"}`}
      />
    </div>
  );
};

export default BrandLogo;
