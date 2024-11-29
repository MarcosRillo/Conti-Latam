import {
  DevicesOtherOutlined as DevicesOtherOutlinedIcon,
  People as PeopleIcon,
  Web as WebIcon,
} from "@mui/icons-material";
import { montserrat } from "../ui/fonts";

export default function WhatWeDo({ openModal }) {
  return (
    <section
      id="what-we-do"
      className="bg-white flex flex-col justify-center items-center min-h-screen py-24"
    >
      <div className="container mx-auto w-10/12 md:w-9/12 lg:w-10/12 text-center">
        <h2 className={`${montserrat.className} text-5xl font-bold text-gray-800 pb-10`}>
          ¿QUE HACEMOS?
        </h2>
        <strong className="text-md leading-8 lg:leading-10 md:text-xl font-bold text-gray-500 my-12">
          Trabajamos formando equipo con las empresas, instituciones y
          organizadores profesionales que producen eventos, brindándoles
          herramientas tecnológicas para optimizar sus tareas.{" "}
        </strong>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-10">
          <div className="bg-white p-8 py-8 w-auto flex flex-col items-center rounded-xl lg:hover:shadow-2xl lg:hover:shadow-gray-400 transition-all duration-500 ease-in-out">
            <DevicesOtherOutlinedIcon className="text-conti-blue" sx={{ fontSize: 70 }} />
            <h3 className="text-2xl font-bold text-gray-800 my-4">
              Eventos Virtuales
            </h3>
            <p className="text-gray-500 text-center font-normal leading-8">
              Nuestra plataforma integra páginas web, formularios de registro
              con pasarela de pagos, sedes 3D, salas, streaming de conferencias,
              control de ingresos, certificación de asistencia, encuestas y
              métricas finales, todo funcionando en un mismo entorno.{" "}
            </p>
          </div>
          <div className="bg-white p-8 flex flex-col items-center rounded-xl lg:hover:shadow-2xl lg:hover:shadow-gray-400 transition-all duration-500 ease-in-out">
            <PeopleIcon className="text-conti-blue" sx={{ fontSize: 70 }} />
            <h3 className="text-2xl font-bold text-gray-800 my-4">
              Eventos Presenciales
            </h3>
            <p className="text-gray-500 text-center font-normal leading-8">
              Servicio de acreditaciones on site vinculado a generación previa
              de códigos QR, campañas de confirmación y recordatorios, lectura
              con dispositivos móviles, autoacreditaciones y controles de
              accesos. Software, hardware y personal especializado, integrados
              armoniosamente para lograr un servicio ágil y eficiente.
            </p>
          </div>
          <div className="bg-white p-8 flex flex-col items-center rounded-xl lg:hover:shadow-2xl lg:hover:shadow-gray-400 transition-all duration-500 ease-in-out">
            <WebIcon className="text-conti-blue" sx={{ fontSize: 70 }} />
            <h3 className="text-2xl font-bold text-gray-800 my-4">
              Eventos Híbridos
            </h3>
            <p className="text-gray-500 text-center font-normal leading-8">
              El mix entre la virtualidad y la presencialidad genera eventos que
              combinan lo mejor de los 2 mundos. Nos encargamos de integrarlos y
              darles soluciones en todas las instancias de la vida de un
              congreso, convención o reunión de cualquier tipo.
            </p>
          </div>
        </div>
        <button
          onClick={openModal}
          className="mt-16 px-6 py-3 border-4 lg:px-12 lg:py-6 border-conti-blue rounded-full text-sm md:text-lg font-bold text-white bg-conti-blue hover:bg-white hover:text-conti-blue transition-all duration-300 ease-in-out"
        >
          AGENDE UNA REUNION
        </button>
      </div>
    </section>
  );
}
