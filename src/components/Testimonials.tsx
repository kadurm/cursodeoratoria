import React from 'react';

const Testimonials = () => {
  const testimonials = [
    '/depoimento-aluno-01.jpeg',
    '/depoimento-aluno-02.jpeg',
    '/depoimento-aluno-03.jpeg',
    '/depoimento-aluno-04.jpeg',
    '/depoimento-aluno-05.jpeg',
    '/depoimento-aluno-06.jpeg',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            O Que Dizem Nossos
            <span className="block mt-2 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Alunos de Impacto
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-6">
            Centenas de profissionais já transformaram suas carreiras e vidas através da nossa metodologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
            >
              <img 
                src={image} 
                alt={`Depoimento Aluno ${index + 1}`} 
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-500 font-medium">
            Junte-se a mais de 1.000 alunos transformados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
