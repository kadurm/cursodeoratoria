import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Hub = () => {
  const courses = [
    {
      id: 'montes-claros',
      city: 'Montes Claros',
      date: '20 e 21 de Maio',
      location: 'CDL Montes Claros',
      path: '/',
      image: '/foto-delio-01.jpeg'
    },
    {
      id: 'taiobeiras',
      city: 'Taiobeiras',
      date: '12 de Junho',
      location: 'Auditório Hospital Santo Antônio',
      path: '/taiobeiras',
      image: '/foto-delio-02.jpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Hero Section Hub */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-cyan-900 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <img 
            src="/logo_sem_fundo.png" 
            alt="Logo Oratória Délio" 
            className="h-20 mx-auto mb-8 drop-shadow-2xl"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossas Próximas Turmas</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Escolha a melhor data e local para transformar sua comunicação e dominar a arte de falar em público.
          </p>
        </div>
      </section>

      {/* Course Cards */}
      <section className="flex-grow py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={course.image} 
                  alt={course.city} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-2xl font-bold text-white">{course.city}</h3>
                </div>
              </div>
              
              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 text-cyan-500 mr-3" />
                    <span className="font-medium">{course.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 text-teal-500 mr-3" />
                    <span className="font-medium">{course.location}</span>
                  </div>
                </div>
                
                <Link 
                  to={course.path}
                  className="inline-flex items-center justify-center w-full px-6 py-4 text-lg font-bold text-white bg-gradient-to-r from-cyan-600 to-teal-600 rounded-xl hover:from-cyan-700 hover:to-teal-700 transition-all duration-300 shadow-lg shadow-cyan-900/20"
                >
                  Ver Detalhes do Curso
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hub;
