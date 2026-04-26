import { GraduationCap, Users as Users2, Award, BookOpen } from 'lucide-react';

const Authority = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: 'Especialista em Oratória',
      description: 'Anos de experiência formando comunicadores de alto impacto'
    },
    {
      icon: Users2,
      title: 'Milhares de Alunos',
      description: 'Profissionais capacitados e transformados em todo o Brasil'
    },
    {
      icon: Award,
      title: 'Metodologia Comprovada',
      description: 'Técnicas validadas e resultados consistentes'
    },
    {
      icon: BookOpen,
      title: 'Abordagem Prática',
      description: 'Foco em aplicação imediata no dia a dia profissional'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-teal-500 rounded-full filter blur-3xl"></div>
      </div>



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Instrutor
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Delio Pinheiro
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mt-6">
            Especialista em comunicação e oratória, dedicado a transformar profissionais em comunicadores excepcionais
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-16">
            <div className="order-2 lg:order-1 h-full">
              <div className="relative group h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white bg-opacity-10 backdrop-blur-md rounded-3xl overflow-hidden border border-white border-opacity-20 h-full">
                  <img 
                    src="/foto-delio-01.jpeg" 
                    alt="Delio Pinheiro" 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 h-full">
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white border-opacity-20 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Por Que Aprender com Delio Pinheiro?
                </h3>
                <p className="text-gray-200 leading-relaxed mb-6 text-lg">
                  Com uma trajetória consolidada no desenvolvimento de habilidades de comunicação, Delio Pinheiro combina conhecimento técnico profundo com uma abordagem prática e acessível.
                </p>
                <p className="text-gray-200 leading-relaxed mb-6 text-lg">
                  Sua metodologia única transforma até mesmo os comunicadores mais tímidos em oradores confiantes e persuasivos, capacitando profissionais a alcançarem seus objetivos através da comunicação eficaz.
                </p>
                <p className="text-gray-200 leading-relaxed text-lg">
                  Durante o curso, você terá acesso direto à experiência e expertise de quem já formou milhares de profissionais de sucesso em todo o país.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 mb-4">
                <credential.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {credential.title}
              </h4>
              <p className="text-gray-300 text-sm">
                {credential.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cyan-500 to-teal-500 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
          <p className="text-white text-xl sm:text-2xl font-semibold italic max-w-4xl mx-auto leading-relaxed">
            "A comunicação eficaz não é um dom natural, é uma habilidade que pode ser desenvolvida. Meu objetivo é equipar você com as ferramentas certas para se comunicar com clareza, confiança e impacto em qualquer situação."
          </p>
          <p className="text-cyan-100 mt-6 text-lg font-medium">
            — Delio Pinheiro
          </p>
        </div>
      </div>
    </section>
  );
};

export default Authority;
