import { Calculator, HeadsetIcon, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <Calculator className="w-12 h-12" />,
    title: "Cotización de riesgos",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra nisi a sem scelerisque, vel efficitur eros viverra.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    ],
    bgImage: "https://i.postimg.cc/zDRHCMd1/img-servicio1.avif"
  },
  {
    icon: <HeadsetIcon className="w-12 h-12" />,
    title: "Asesoramiento permanente",
    description: [
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
      "Proin non augue non ex fermentum fermentum. Suspendisse potenti."
    ],
    bgImage: "https://i.postimg.cc/sxTZ6BNH/img-servicio2.jpg"
  },
  {
    icon: <ShieldCheck className="w-12 h-12" />,
    title: "Gestión de siniestros",
    description: [
      "Mauris in nulla at erat scelerisque congue. Integer sagittis turpis at ligula faucibus, nec cursus massa tincidunt."
    ],
    bgImage: "https://i.postimg.cc/tJqxNd2V/img-servicio3.jpg"
  }
];

const Services = () => {
  return (
    <section id='servicios' className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 animate-fade-in">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <img 
                  src={service.bgImage} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative p-8 h-full flex flex-col">
                <div className="text-primary mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <div className="space-y-4">
                  {service.description.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
