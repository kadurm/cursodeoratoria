import { MessageCircle } from 'lucide-react';

interface FloatingButtonProps {
  whatsappMessage: string;
  buttonText: string;
}

const FloatingButton = ({ whatsappMessage, buttonText }: FloatingButtonProps) => {
  const whatsappNumber = '5538988231506';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center px-6 py-4 sm:px-8 sm:py-5 text-lg sm:text-xl font-bold text-slate-900 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full overflow-hidden shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        <MessageCircle className="w-6 h-6 mr-3 relative z-10 animate-bounce" />
        <span className="relative z-10">{buttonText}</span>
      </a>
    </div>
  );
};

export default FloatingButton;
