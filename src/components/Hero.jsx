import { useState, useEffect } from 'react'
import { Shield } from "lucide-react";
import { Link as ScrollLink } from 'react-scroll';

export default function Hero() {
  const images = [
    'https://i.postimg.cc/zXkhvQDS/img-hero1.jpg', 
    'https://i.postimg.cc/BnQKKCXW/img-hero2.jpg', 
    'https://i.postimg.cc/SKnYZN6D/img-hero3.jpg', 
    'https://i.postimg.cc/8zKrBr67/img-hero4.jpg', 
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt={`Carousel image ${index + 1}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white space-y-8">
          <div>
            <h1 className="text-5xl font-bold mb-4">Bienvenido a InsuranceLandingPage</h1>
            <p className="text-xl">Asegurando Tranquilidad</p>
          </div>
          
          <ScrollLink 
            to="contacto"
            smooth={true}
            duration={800}
            offset={-50}
            className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#157f7e] to-teal-600 text-white font-semibold py-4 px-8 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(21,127,126,0.4)] active:scale-95 cursor-pointer"
          >
            <Shield className="w-5 h-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
            <span className="relative z-10">Protege tu futuro hoy mismo</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-teal-600 to-[#157f7e]" />
          </ScrollLink>
        </div>
      </div>
    </section>
  )
}