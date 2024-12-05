import { PhoneCall, Calculator } from "lucide-react";
import { Link as ScrollLink } from 'react-scroll';

function CallToAction() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a5f7a] via-[#157f7e] to-[#0d9488] opacity-95" />
      
      <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full opacity-5 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full opacity-5 translate-x-1/2 translate-y-1/2" />

      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            ¿Listo para proteger tu futuro?
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Contáctanos hoy y descubre cómo podemos ayudarte a encontrar la mejor 
            cobertura para tus necesidades
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <ScrollLink
              to="contacto"
              smooth={true}
              duration={800}
              offset={-50}
              className="group relative inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#157f7e] font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto cursor-pointer"
            >
              <Calculator className="w-5 h-5 transition-transform group-hover:rotate-12 duration-300" />
              <span>Solicita una cotización</span>
              <div className="absolute inset-0 rounded-lg border-2 border-white opacity-0 group-hover:opacity-30 scale-105 transition-all duration-300" />
            </ScrollLink>

            <a
              href="https://api.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg border-2 border-white transition-all duration-300 w-full sm:w-auto"
            >
              <PhoneCall className="w-5 h-5 transition-transform group-hover:rotate-12 duration-300" />
              <span>Habla con un asesor</span>
              <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-10 scale-105 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;