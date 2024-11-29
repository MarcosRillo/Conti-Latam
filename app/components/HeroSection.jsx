import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero-section" className="relative w-full h-screen pt-24 lg:mt-20 bg-custom-blue bg-fixed bg-cover bg-center">
      
      <div className="absolute inset-0 mt-16 flex flex-col lg:flex-row items-center lg:items-start justify-center bg-transparent bg-opacity-50">
        <div className="lg:w-1/2 p-8 ml-16 flex flex-col justify-center items-center lg:items-start">
          <div className="mt-auto">
            <h1 className="text-7xl font-bold text-white mb-4">
              30 años
            </h1>
            <p className="font-normal leading-7 text-white">
              Liderando la innovación tecnológica en Latinoamérica.
              Especialistas en inscripciones y acreditaciones presenciales para
              reuniones complejas y de gran magnitud. Pioneros en la
              reconversión digital a eventos virtuales e híbridos. Soluciones
              360° para todo tipo de reuniones.
            </p>
            <Link href="#what-we-do">
              <button className="mt-4 px-4 py-2 border-2 border-white rounded-3xl text-white font-bold bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2">
                Ver más
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 p-8 flex items-center justify-center">
          <Image
            src="/logo/mapa-2.png"
            alt="Your Image"
            width={125}
            height={75}
            objectFit="contain"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}