import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppButton = () => {
  const phoneNumber = "5491234567890"; // Replace with actual WhatsApp number
  const message = "Hola! Me interesa conocer más sobre DiraSmart";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-16 h-16 object-contain drop-shadow-lg" />
    </a>
  );
};

export default WhatsAppButton;
