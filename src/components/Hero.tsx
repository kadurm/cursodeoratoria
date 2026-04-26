import { Calendar, Clock, MapPin, MessageCircle } from 'lucide-react';

const Hero = () => {
  const whatsappNumber = '5538988231506';
  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de me inscrever no Curso de Oratória - Comunicação de Alto Impacto.'
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-900 to-teal-900">
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <div className="flex justify-center mb-8">
          <img 
            src="/logo_sem_fundo.png" 
            alt="Logo Oratória Délio" 
            className="h-20 sm:h-28 w-auto drop-shadow-2xl animate-fade-in"
          />
        </div>

        <div className="mb-6">
          <span className="inline-block px-6 py-2 bg-cyan-500 bg-opacity-20 backdrop-blur-sm border border-cyan-400 rounded-full text-cyan-300 text-sm font-semibold tracking-wide uppercase">
            Evento Presencial
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Curso de Oratória
          <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 bg-clip-text text-transparent">
            Comunicação de Alto Impacto
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          Domine a arte de falar em público e transforme sua comunicação em uma ferramenta poderosa de influência e sucesso profissional
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <Calendar className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <p className="text-sm text-gray-300 mb-1">Datas</p>
            <p className="text-lg font-bold text-white">24 e 25 de Março</p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <Clock className="w-8 h-8 text-teal-400 mx-auto mb-3" />
            <p className="text-sm text-gray-300 mb-1">Horário</p>
            <p className="text-lg font-bold text-white">19h às 22h30</p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <p className="text-sm text-gray-300 mb-1">Local</p>
            <p className="text-lg font-bold text-white">CDL Montes Claros</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full overflow-hidden shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <MessageCircle className="w-6 h-6 mr-3 relative z-10" />
            <span className="relative z-10">Garantir Minha Vaga Agora</span>
          </a>
        </div>

        <p className="mt-8 text-gray-300 text-sm sm:text-base">
          <span className="inline-block bg-teal-500 bg-opacity-20 px-4 py-2 rounded-full border border-teal-400 border-opacity-30">
            ✓ Material Didático Incluso &nbsp;&nbsp; ✓ Certificado de Participação
          </span>
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
