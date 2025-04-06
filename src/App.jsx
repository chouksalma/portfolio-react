import FeaturedProjects from './components/FeaturedProjects';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

function App() {
  const [loading, setLoading] = useState(true);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Changé à 1 seconde

    setTimeout(() => {
      setShowAbout(true);
    }, 1000); // Changé à 1 seconde

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