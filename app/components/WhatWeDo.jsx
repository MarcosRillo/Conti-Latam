import {
  LaptopMac as LaptopMacIcon,
  People as PeopleIcon,
  Web as WebIcon,
} from "@mui/icons-material";

export default function WhatWeDo({ openModal }) {
  return (
    <section
      id="what-we-do"
      className="bg-white flex flex-col justify-center items-center min-h-screen py-16"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          ¿Qué hacemos?
        </h2>
        <strong className="text-lg md:text-xl text-gray-600 mb-12">
          Trabajamos formando equipo con las empresas, instituciones y
          organizadores profesionales que producen eventos, brindándoles
          herramientas tecnológicas para optimizar sus tareas.{" "}
        </strong>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 border-2 border-conti-blue">
          <div className="bg-white p-8 py-16 w-auto flex flex-col items-center lg:hover:shadow-xl">
            <LaptopMacIcon className="text-conti-blue" sx={{ fontSize: 80 }} />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Eventos Virtuales
            </h3>
            <p className="text-gray-600 text-center font-normal border-2 border-conti-blue">
              Nuestra plataforma integra páginas web, formularios de registro
              con pasarela de pagos, sedes 3D, salas, streaming de conferencias,
              control de ingresos, certificación de asistencia, encuestas y
              métricas finales, todo funcionando en un mismo entorno.{" "}
            </p>
          </div>
          <div className="bg-white p-8 flex flex-col items-center">
            <PeopleIcon className="text-conti-blue" sx={{ fontSize: 80 }} />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Eventos Presenciales
            </h3>
            <p className="text-gray-600 text-center font-normal">
              Servicio de acreditaciones on site vinculado a generación previa
              de códigos QR, campañas de confirmación y recordatorios, lectura
              con dispositivos móviles, autoacreditaciones y controles de
              accesos. Software, hardware y personal especializado, integrados
              armoniosamente para lograr un servicio ágil y eficiente.
            </p>
          </div>
          <div className="bg-white p-8 flex flex-col items-center">
            <WebIcon className="text-conti-blue" sx={{ fontSize: 80 }} />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Eventos Híbridos
            </h3>
            <p className="text-gray-600 text-center font-normal">
              El mix entre la virtualidad y la presencialidad genera eventos que
              combinan lo mejor de los 2 mundos. Nos encargamos de integrarlos y
              darles soluciones en todas las instancias de la vida de un
              congreso, convención o reunión de cualquier tipo.
            </p>
          </div>
        </div>
        <button
          onClick={openModal}
          className="mt-12 px-6 py-3 border border-transparent rounded-3xl text-sm font-medium text-white bg-conti-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Agende una reunión
        </button>
      </div>
    </section>
  );
}
