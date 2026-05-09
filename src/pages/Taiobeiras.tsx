import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Authority from '../components/Authority';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';

function Taiobeiras() {
  const courseData = {
    date: '12 de Junho',
    location: 'Auditório do Hospital Santo Antônio',
    whatsappMessage: 'Olá! Gostaria de me inscrever no Curso de Oratória em Taiobeiras - Comunicação de Alto Impacto.'
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero 
        date={courseData.date} 
        location={courseData.location} 
        whatsappMessage={courseData.whatsappMessage} 
      />
      <Benefits />
      <Authority />
      <Testimonials />
      <CTA 
        date={courseData.date} 
        location={courseData.location} 
        whatsappMessage={courseData.whatsappMessage} 
      />
      <Footer />
      <FloatingButton whatsappMessage={courseData.whatsappMessage} />
    </div>
  );
}

export default Taiobeiras;
