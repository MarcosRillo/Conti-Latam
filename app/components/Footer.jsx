import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-conti-blue text-white border-t border-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between p-8 md:p-16">
        <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center md:text-left">
          <Image
            src="/logo/LogoCONTi_30_HOR6.png"
            alt="Logo"
            width={180}
            height={38}
            className="mx-auto md:mx-0 mb-4"
          />
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4">NAVEGACIÓN</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#hero-section" className="hover:text-text-conti">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="#what-we-do" className="hover:underline">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="#clients-carousel" className="hover:underline">
                Clientes
              </Link>
            </li>
            <li>
              <Link href="#tools-section" className="hover:underline">
                Herramientas
              </Link>
            </li>
            <li>
              <Link href="#partners-section" className="hover:underline">
                Partners
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h3 className="text-sm font-bold mb-4">
            ¿QUIERES TRABAJAR CON NOSOTROS?
          </h3>
          <Link
            href="mailto:contacto@contilatam.com"
            className="px-4 py-2 text-white"
          >
            Envíanos tu CV
          </Link>
        </div>
      </div>
      <div className="bg-white text-gray-600 text-center text-sm py-5">
        <p>Copyright © CONTI Latam 2022 – Todos los derechos reservados</p>
      </div>
    </footer>
  );
}