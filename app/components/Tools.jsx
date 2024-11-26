import Image from "next/image";
import Link from "next/link";
import {
  LaptopMac as LaptopMacIcon,
  People as PeopleIcon,
  Web as WebIcon,
  Cloud as CloudIcon,
  Code as CodeIcon,
  Build as BuildIcon,
} from "@mui/icons-material";

export default function ToolsSection({ openModal }) {
  return (
    <section
      id="tools-section"
      className="relative w-full bg-conti-blue text-white"
    >
      <div className="absolute inset-0">
        <Image
          src="/logo/circle-background-pattern.png"
          alt="Background Pattern"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-bold uppercase text-center py-24 bg-red-400">
          NUESTRAS HERRAMIENTAS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-4 bg-green-400">
          <Link href="/tools/tool1" className="no-underline">
            <div className="p-8 rounded-lg flex flex-col items-center text-center bg-red-50">
              <LaptopMacIcon className="text-white" sx={{ fontSize: 70 }} />
              <h3 className="text-2xl font-bold text-white mt-4">
                EVENTOS DIGITALES E HIBRIDOS
              </h3>
              <p className="text-white mt-2">
                Permanecer activo cuando el mundo cambió habla de tu capacidad
                de adaptarte a un nuevo contexto
              </p>
            </div>
          </Link>
          <Link href="/tools/tool2" className="no-underline">
            <div className="p-8 rounded-lg flex flex-col items-center text-center bg-transparent">
              <PeopleIcon className="text-white" sx={{ fontSize: 70 }} />
              <h3 className="text-2xl font-bold text-white mt-4">
                FORMULARIO DE REGISTRO
              </h3>
              <p className="text-white mt-2">
                Iniciar en modo Eficiencia Total es aplicar formularios de
                registros especializados en eventos profesionales
              </p>
            </div>
          </Link>
          <Link href="/tools/tool3" className="no-underline">
            <div className="p-8 rounded-lg flex flex-col items-center text-center bg-transparent">
              <WebIcon className="text-white" sx={{ fontSize: 70 }} />
              <h3 className="text-2xl font-bold text-white mt-4">
                SOFTWARE GESTION DE PROGRAMA CIENTIFICO
              </h3>
              <p className="text-white mt-2">
                Programas de actividades en modo colaborativo es distribuir
                acción, ahorrar tiempo y simplificar trabajo
              </p>
            </div>
          </Link>
          <Link href="/tools/tool4" className="no-underline">
            <div className="p-8 rounded-lg flex flex-col items-center text-center bg-transparent">
              <CloudIcon className="text-white" sx={{ fontSize: 70 }} />
              <h3 className="text-2xl font-bold text-white mt-4">
                ADMINISTRADOR DE TEMAS LIBRES
              </h3>
              <p className="text-white mt-2">
                Aumentar la eficiencia es reducir a menos de la mitad los
                tiempos de gestión de abstracts en tus eventos
              </p>
            </div>
          </Link>
          <Link href="/tools/tool5" className="no-underline">
            <div className="p-8 rounded-lg flex flex-col items-center text-center bg-transparent">
              <CodeIcon className="text-white" sx={{ fontSize: 70 }} />
              <h3 className="text-2xl font-bold text-white mt-4">
                RONDAS DE NEGOCIO
              </h3>
              <p className="text-white mt-2">
                Muchos organizan Rondas de Negocios, pero muy pocos logran
                dinamizar Rondas CON Negocios de verdad
              </p>
            </div>
          </Link>
          <Link href="/tools/tool6" className="no-underline">
            <div className="p-8 rounded-lg flex flex-col items-center text-center bg-transparent">
              <BuildIcon className="text-white" sx={{ fontSize: 70 }} />
              <h3 className="text-2xl font-bold text-white mt-4">
                EVENTOS PRESENCIALES
              </h3>
              <p className="text-white mt-2">
                En tres décadas realizamos miles de eventos para todas las
                industrias en una oferta extremadamente amplia
              </p>
            </div>
          </Link>
        </div>
        <button
          onClick={openModal}
          className="mt-12 px-6 py-3 border border-white rounded-md text-sm font-medium text-sky-800 bg-white hover:bg-sky-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Agende una reunión
        </button>
      </div>
    </section>
  );
}
