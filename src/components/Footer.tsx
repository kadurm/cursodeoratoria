import { MessageCircle, MapPin, Calendar } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = '5538988231506';
  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de saber mais sobre o Curso de Oratória - Comunicação de Alto Impacto.'
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Curso de Oratória
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Comunicação de Alto Impacto com Delio Pinheiro. Transforme sua forma de comunicar e alcance novos patamares profissionais.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Informações do Evento</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Calendar className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">24 e 25 de Março, 2026<br />19h às 22h30</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-teal-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">CDL Montes Claros</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Entre em Contato</h4>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-full hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp: (38) 98823-1506
            </a>
            <p className="mt-4 text-sm text-gray-400">
              Tire suas dúvidas e garanta sua vaga pelo WhatsApp
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            {currentYear} Curso de Oratória - Comunicação de Alto Impacto. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
