import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5491234567890"; // Replace with actual WhatsApp number
  const message = "Hola! Me interesa conocer más sobre DiraSmart";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-float"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" fill="white" />
    </a>
  );
};

export default WhatsAppButton;
