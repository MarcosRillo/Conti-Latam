// WhyDifferentSection.jsx
import Image from "next/image";
import { montserrat } from "../ui/fonts";

export default function WhyDifferentSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-white">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <div
          id="1"
          className="grid grid-cols-3 sm:gap-6 lg:gap-0 md:min-h-96 md:relative md:mb-52"
        >
          <Image
            src="/images/photo1.jpg"
            alt="Photo 1"
            width={200}
            height={150}
            className="rounded-sm shadow-md animate-float-1 md:absolute md:top-2 md:-left-2.5 md:z-10 md:w-72 md:h-72" 
          />
          <Image
            src="/images/photo2.jpg"
            alt="Photo 2"
            width={200}
            height={150}
            className="rounded-sm shadow-md animate-float-2 md:absolute md:top-1/3 md:left-1/4 md:z-20 md:w-80 md:h-80"
          />
          <Image
            src="/images/photo3.jpg"
            alt="Photo 3"
            width={200}
            height={150}
            className="rounded-sm shadow-md animate-float-3 md:absolute md:top-3/4 md:right-0 md:z-10 md:w-72 md:h-72"
          />
        </div>
      </div>
      <div
        id="2"
        className={` ${montserrat.style} w-full md:w-1/2 md:pl-16`}
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-8">
          ¿PORQUE SOMOS DIFERENTES?
        </h2>
        <ul className="list-none list-inside text-lg space-y-4 text-gray-500 leading-10">
          <li>
            Porque nuestra trayectoria de 30 años nos convierte en la empresa
            con más experiencia de la región.
          </li>
          <li>
            Porque integramos en un mismo entorno una gama completa de servicios
            que facilitan la tarea del organizador.
          </li>
          <li>Porque innovamos permanentemente con nuestro equipo de I+D.</li>
          <li>
            Porque escuchamos los problemas y necesidades de nuestros clientes y
            trabajamos para resolverlos.
          </li>
          <li>
            Porque brindamos asistencia 24×7, especialmente en los momentos
            críticos de un evento.
          </li>
          <li>
            Porque nuestro personal es idóneo, responsable y se brinda 100%
            empatizando y formando equipo con los clientes.
          </li>
        </ul>
      </div>
    </section>
  );
}