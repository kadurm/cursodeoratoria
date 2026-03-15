import { Target, Users, TrendingUp, Award, Sparkles, CheckCircle2 } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Target,
      title: 'Clareza e Objetividade',
      description: 'Aprenda a transmitir suas ideias de forma clara, direta e impactante, eliminando ruídos na comunicação.',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Users,
      title: 'Conexão com a Audiência',
      description: 'Domine técnicas para criar conexão emocional e engajar qualquer tipo de público, do pequeno ao grande grupo.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: TrendingUp,
      title: 'Confiança ao Apresentar',
      description: 'Supere o medo de falar em público e desenvolva presença de palco que transmite autoridade e credibilidade.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Award,
      title: 'Técnicas Profissionais',
      description: 'Utilize métodos comprovados de oratória, linguagem corporal e storytelling para apresentações memoráveis.',
      color: 'from-cyan-600 to-teal-600'
    },
    {
      icon: Sparkles,
      title: 'Impacto e Persuasão',
      description: 'Aprenda a estruturar discursos persuasivos que movem pessoas à ação e geram resultados concretos.',
      color: 'from-teal-600 to-blue-600'
    }
  ];

  const includes = [
    'Material didático completo e exclusivo',
    'Certificado de participação reconhecido',
    'Exercícios práticos e dinâmicas em grupo',
    'Feedback personalizado do instrutor',
    'Técnicas aplicáveis imediatamente',
    'Networking com profissionais da região'
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transforme Sua Comunicação em
            <span className="block mt-2 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Ferramenta de Sucesso
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Desenvolva habilidades essenciais para se destacar em apresentações, reuniões, vendas e qualquer situação que exija comunicação de alto impacto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-200 transform hover:-translate-y-2"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${benefit.color} mb-6 shadow-lg`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-3xl p-8 sm:p-12 border-2 border-cyan-200">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              O Que Está Incluído
            </h3>
            <p className="text-gray-600 text-lg">
              Tudo que você precisa para uma experiência completa de aprendizado
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {includes.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-teal-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
