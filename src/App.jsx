import FeaturedProjects from './components/FeaturedProjects';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

function App() {
  useEffect(() => {
    // Collez votre Public Key ici
    emailjs.init("votre_public_key_copiée");
  }, []);

  return (
    <div>
      {/* Autres composants... */}
      <FeaturedProjects />
      {/* Autres composants... */}
    </div>
  );
}

export default App; 