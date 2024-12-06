import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import Animated from "@/app/components/Animated";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative w-full md:max-h-96 lg:max-h-screen md:py-96 bg-custom-blue bg-fixed bg-cover bg-center"
      style={{
        height: "150vh",
      }}
    >
      <Animated className="absolute inset-0 mt-20 md:mt-32 flex flex-col md:flex-row items-center lg:items-start justify-start bg-transparent bg-opacity-50">
        <div className="md:w-1/2 p-8 flex flex-col lg:ml-10 justify-start items-start lg:items-start">
          <div className="justify-center text-start items-center">
            <h1 className="text-7xl font-bold text-white mb-4">
              <CountUp start={0} end={30} duration={2} /> años
            </h1>
            <p className="font-normal text-xl leading-9 text-white">
              Liderando la innovación tecnológica en Latinoamérica.
              Especialistas en inscripciones y acreditaciones presenciales para
              reuniones complejas y de gran magnitud. Pioneros en la
              reconversión digital a eventos virtuales e híbridos. Soluciones
              360° para todo tipo de reuniones.
            </p>
            <Link href="#what-we-do">
              <button className="mt-4 px-4 py-2 text-xl border-2 border-white rounded-3xl text-white font-bold bg-transparent hover:text-conti-blue hover:bg-white">
                Ver más
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center lg:mt-10 animate-map">
          <Image
            src="/logo/mapa-2.png"
            alt="Your Image"
            width={250}
            height={150}
            objectFit="contain"
            quality={100}
            className="w-auto lg:max-h-max"
            loading="lazy"
          />
        </div>
      </Animated>
    </section>
  );
}
