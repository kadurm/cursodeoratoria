import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Authority from '../components/Authority';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

function MontesClaros() {
  const courseData = {
    date: '20 e 21 de Maio',
    location: 'CDL Montes Claros',
    whatsappMessage: 'Olá! Gostaria de me inscrever no Curso de Oratória em Montes Claros - Comunicação de Alto Impacto.',
    price: '280,00',
    hours: '19h às 22h30'
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
        buttonText="Garantir minha Vaga"
        price={courseData.price}
        hours={courseData.hours}
      />
      <Footer />
    </div>
  );
}

export default MontesClaros;
