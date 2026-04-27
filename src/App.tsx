import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Authority from './components/Authority';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Benefits />
      <Authority />
      <Testimonials />
      <CTA />
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;
