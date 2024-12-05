import { Quote } from 'lucide-react';
const testimonials = [
  {
    name: "María González",
    role: "Cliente Particular",
    content: "Excelente servicio y asesoramiento. Me ayudaron a encontrar el seguro perfecto para mi familia.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Carlos Rodríguez",
    role: "Empresario",
    content: "Profesionalismo y dedicación en cada consulta. Recomiendo ampliamente sus servicios.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Ana Martínez",
    role: "Profesional Independiente",
    content: "Encontré la mejor cobertura para mi negocio gracias a su asesoramiento personalizado.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  }
];
const Testimonials = () => {
  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Quote className="w-10 h-10 text-primary mb-4" />
              <p className="text-gray-600 mb-6 italic">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;