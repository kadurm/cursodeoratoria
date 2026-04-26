import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Authority from './components/Authority';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Benefits />
      <Authority />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
