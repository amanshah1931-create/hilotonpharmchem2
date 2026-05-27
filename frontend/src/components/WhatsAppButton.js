import { MessageCircle } from "lucide-react";

export default function WhatsAppButton({ phone = "919328119224" }) {
  return (
    <a
      href={`https://wa.me/${phone}?text=Hello%2C%20I%20am%20interested%20in%20your%20manufacturing%20services.`}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-float-btn"
      className="whatsapp-float fixed bottom-20 right-4 z-[9998] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      style={{ background: "#25D366" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />
    </a>
  );
}
