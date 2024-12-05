import { useState } from 'react';
import { Link } from 'react-scroll';

function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-8" id='enlaces'>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-6 inline-block relative after:content-[''] after:absolute after:w-2/3 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-gradient-to-r after:from-[rgb(19,120,119)] after:to-transparent">
            InsuranceLandingPage
            </h3>
            <p className="mb-4">Tu seguridad y tranquilidad son nuestra prioridad</p>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-6 inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-gradient-to-r after:from-[rgb(19,120,119)] after:to-transparent">
                Asesoría Personalizada
              </h4>
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-[rgb(19,120,119)] focus:ring-2 focus:ring-[rgb(19,120,119)] focus:ring-opacity-20 transition-all duration-200"
                  required
                  disabled={status !== 'idle'}
                />
                <button
                  type="submit"
                  className="mt-2 w-full bg-[rgb(19,120,119)] hover:bg-[rgb(19,120,119)]/90 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 disabled:opacity-50"
                  disabled={status !== 'idle'}
                >
                  Enviar
                </button>

                {status === 'loading' && (
                  <div className="absolute inset-0 bg-gray-800/80 flex items-center justify-center z-10 animate-fade-in rounded-lg">
                    <div className="w-8 h-8 border-4 border-[rgb(19,120,119)] border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}

                {status === 'success' && (
                  <div className="absolute inset-0 bg-[rgb(19,120,119)]/95 flex items-center justify-center z-10 animate-fade-in rounded-lg">
                    <div className="text-white text-center">
                      <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-sm font-semibold">¡Mensaje enviado correctamente!</p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="absolute inset-0 bg-red-500/95 flex items-center justify-center z-10 animate-fade-in rounded-lg">
                    <div className="text-white text-center">
                      <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <p className="text-sm font-semibold">Error al enviar el mensaje</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-gradient-to-r after:from-[rgb(19,120,119)] after:to-transparent">
              Enlaces rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="inicio" 
                  smooth={true} 
                  duration={500} 
                  className="hover:text-[rgb(19,120,119)] cursor-pointer"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  to="servicios" 
                  smooth={true} 
                  duration={500} 
                  className="hover:text-[rgb(19,120,119)] cursor-pointer"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link 
                  to="nosotros" 
                  smooth={true} 
                  duration={500} 
                  className="hover:text-[rgb(19,120,119)] cursor-pointer"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link 
                  to="testimonios" 
                  smooth={true} 
                  duration={500} 
                  className="hover:text-[rgb(19,120,119)] cursor-pointer"
                >
                  Testimonios
                </Link>
              </li>
              <li>
                <Link 
                  to="contacto" 
                  smooth={true} 
                  duration={500} 
                  className="hover:text-[rgb(19,120,119)] cursor-pointer"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-gradient-to-r after:from-[rgb(19,120,119)] after:to-transparent">
              Contáctanos
            </h4>
            <p>Email: example@gmail.com</p>
            <p>Teléfono: 12345678</p>
            <div className="mt-4">
              <h5 className="text-sm font-semibold mb-6 inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-gradient-to-r after:from-[rgb(19,120,119)] after:to-transparent">
                Síguenos
              </h5>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com" target='_blank' className="hover:text-[rgb(19,120,119)]">Facebook</a>
                <a href="https://api.whatsapp.com" target='_blank' className="hover:text-[rgb(19,120,119)]">WhatsApp</a>
                <a href="https://www.instagram.com" target='_blank' className="hover:text-[rgb(19,120,119)]">Instagram</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 InsuranceLandingPage. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;