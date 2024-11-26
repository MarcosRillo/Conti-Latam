// WhyDifferentSection.jsx
import Image from "next/image";

export default function WhyDifferentSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-white">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <div className="grid grid-cols-3 gap-4">
          <Image
            src="/images/photo1.jpg"
            alt="Photo 1"
            width={200}
            height={150}
            className="rounded-lg shadow-md"
          />
          <Image
            src="/images/photo2.jpg"
            alt="Photo 2"
            width={200}
            height={150}
            className="rounded-lg shadow-md"
          />
          <Image
            src="/images/photo3.jpg"
            alt="Photo 3"
            width={200}
            height={150}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 md:pl-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
          ¿PORQUE SOMOS DIFERENTES?
        </h2>
        <ul className="list-none list-inside text-lg text-gray-600 space-y-4">
          <li>Porque nuestra trayectoria de 30 años nos convierte en la empresa con más experiencia de la región.</li>
          <li>Porque integramos en un mismo entorno una gama completa de servicios que facilitan la tarea del organizador.</li>
          <li>Porque innovamos permanentemente con nuestro equipo de I+D.</li>
          <li>Porque escuchamos los problemas y necesidades de nuestros clientes y trabajamos para resolverlos.</li>
          <li>Porque brindamos asistencia 24×7, especialmente en los momentos críticos de un evento.</li>
          <li>Porque nuestro personal es idóneo, responsable y se brinda 100% empatizando y formando equipo con los clientes.</li>
        </ul>
      </div>
    </section>
  );
}