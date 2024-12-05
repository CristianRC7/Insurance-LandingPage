import { Users, Shield, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Sobre Nosotros
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et 
              lacus et lorem fermentum luctus sed non augue. Aenean ut tristique 
              elit. Nullam facilisis dui nec libero ultrices, id volutpat lacus 
              vehicula. Mauris consectetur volutpat dolor, a vestibulum nunc 
              vestibulum nec.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center group animate-fade-in hover:scale-105 transition-transform duration-300">
                <Award className="w-12 h-12 text-primary mb-2 group-hover:rotate-12 transition-transform duration-300" />
                <div className="space-y-1">
                  <h4 className="text-2xl font-bold text-primary">10</h4>
                  <p className="text-gray-600 text-sm">Años Asegurando Tranquilidad</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center group animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '200ms' }}>
                <Users className="w-12 h-12 text-primary mb-2 group-hover:rotate-12 transition-transform duration-300" />
                <div className="space-y-1">
                  <h4 className="text-2xl font-bold text-primary">+200</h4>
                  <p className="text-gray-600 text-sm">Clientes Satisfechos</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center group animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '400ms' }}>
                <Shield className="w-12 h-12 text-primary mb-2 group-hover:rotate-12 transition-transform duration-300" />
                <div className="space-y-1">
                  <h4 className="text-2xl font-bold text-primary">+400</h4>
                  <p className="text-gray-600 text-sm">Pólizas Emitidas</p>
                </div>
              </div>
            </div>
            <button className="bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Conoce Más
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://i.postimg.cc/nLnpzdz7/img-about.avif" 
              alt="Equipo de trabajo" 
              className="rounded-lg shadow-xl animate-fade-in"
              style={{ animationDelay: '600ms' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
