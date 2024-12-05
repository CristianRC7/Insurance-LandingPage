import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        message: ''
      });
      // Resetear el formulario
      setTimeout(() => setStatus('idle'), 6000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div id="contacto" className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Contáctanos
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Déjanos tu mensaje y un asesor se comunicará contigo a la brevedad
        </p>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
          {/* Status Overlays */}
          {status === 'loading' && (
            <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10 animate-fade-in">
              <div className="w-12 h-12 border-4 border-[rgb(19,120,119)] border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
          {status === 'success' && (
            <div className="absolute inset-0 bg-[rgb(19,120,119)]/95 flex items-center justify-center z-10 animate-fade-in">
              <div className="text-white text-center">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-xl font-semibold">¡Mensaje enviado correctamente!</p>
                <p className="mt-2">Nos pondremos en contacto contigo pronto</p>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="absolute inset-0 bg-red-500/95 flex items-center justify-center z-10 animate-fade-in">
              <div className="text-white text-center">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <p className="text-xl font-semibold">Error al enviar el mensaje</p>
                <p className="mt-2">Por favor, inténtalo nuevamente</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nombre Completo"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[rgb(19,120,119)] focus:ring-2 focus:ring-[rgb(19,120,119)] focus:ring-opacity-20 transition-all duration-200"
                required
                disabled={status !== 'idle'}
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Empresa
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Nombre de su empresa"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[rgb(19,120,119)] focus:ring-2 focus:ring-[rgb(19,120,119)] focus:ring-opacity-20 transition-all duration-200"
                disabled={status !== 'idle'}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Su correo"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[rgb(19,120,119)] focus:ring-2 focus:ring-[rgb(19,120,119)] focus:ring-opacity-20 transition-all duration-200"
                required
                disabled={status !== 'idle'}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Ingrese su mensaje"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[rgb(19,120,119)] focus:ring-2 focus:ring-[rgb(19,120,119)] focus:ring-opacity-20 transition-all duration-200 resize-none"
                required
                disabled={status !== 'idle'}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[rgb(19,120,119)] to-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transform hover:-translate-y-0.5 transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(19,120,119)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              disabled={status !== 'idle'}
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;