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
    whatsappMessage: 'Olá! Gostaria de me inscrever no Curso de Oratória em Taiobeiras - Comunicação de Alto Impacto.',
    price: '150,00',
    hours: '08h00 da manhã'
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero 
        date={courseData.date} 
        location={courseData.location} 
        whatsappMessage={courseData.whatsappMessage} 
        price={courseData.price}
        hours={courseData.hours}
      />
      <Benefits />
      <Authority />
      <Testimonials />
      <CTA 
        date={courseData.date} 
        location={courseData.location} 
        whatsappMessage={courseData.whatsappMessage} 
        buttonText="Quero me inscrever agora"
        price={courseData.price}
        hours={courseData.hours}
      />
      <Footer />
      <FloatingButton 
        whatsappMessage={courseData.whatsappMessage} 
        buttonText="Quero me inscrever agora"
      />
    </div>
  );
}

export default Taiobeiras;
