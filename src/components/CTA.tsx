import { MessageCircle, Calendar, Clock, MapPin, Award } from 'lucide-react';

const CTA = () => {
  const whatsappNumber = '5538988231506';
  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de me inscrever no Curso de Oratória - Comunicação de Alto Impacto.'
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-white via-cyan-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-cyan-900 to-teal-900 rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative z-10 px-6 sm:px-12 py-12 sm:py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Garanta Sua Vaga Agora
              </h2>
              <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-10">
                As vagas são limitadas. Não perca a oportunidade de transformar sua comunicação profissional.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20 text-center flex flex-col justify-center transform hover:scale-105 transition-transform duration-300">
                <p className="text-cyan-400 font-semibold tracking-widest uppercase text-[10px] mb-1">Investimento</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-white font-medium">R$</span>
                  <span className="text-3xl font-bold text-white tracking-tight">280,00</span>
                </div>
                <p className="text-teal-300 mt-1 font-medium text-[10px]">Em até 3x no cartão</p>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20 text-center">
                <Calendar className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Datas</p>
                <p className="text-base font-bold text-white">20 e 21 de Maio</p>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20 text-center">
                <Clock className="w-6 h-6 text-teal-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Horário</p>
                <p className="text-base font-bold text-white">19h às 22h30</p>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20 text-center">
                <MapPin className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Local</p>
                <p className="text-base font-bold text-white">CDL Montes Claros</p>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20 text-center">
                <Award className="w-6 h-6 text-teal-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Inclui</p>
                <p className="text-base font-bold text-white">Material + Certificado</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-10 sm:px-16 py-5 sm:py-6 text-xl sm:text-2xl font-bold text-slate-900 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full overflow-hidden shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <MessageCircle className="w-7 h-7 mr-3 relative z-10" />
                <span className="relative z-10">Inscreva-se pelo WhatsApp</span>
              </a>

              <p className="mt-6 text-gray-300 text-base sm:text-lg">
                Contato: <a href={whatsappLink} className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">(38) 98823-1506</a>
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-300">
                <span className="inline-flex items-center">
                  <svg className="w-5 h-5 text-teal-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Vagas Limitadas
                </span>
                <span className="inline-flex items-center">
                  <svg className="w-5 h-5 text-teal-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Inscrição Imediata
                </span>
                <span className="inline-flex items-center">
                  <svg className="w-5 h-5 text-teal-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Certificado Reconhecido
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
