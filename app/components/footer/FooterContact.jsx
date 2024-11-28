import Link from "next/link";

export default function FooterContact() {
    return (
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h3 className="text-sm font-bold mb-4">
            ¿QUIERES TRABAJAR CON NOSOTROS?
          </h3>
          <Link
            href="mailto:contacto@contilatam.com"
            className="px-4 py-2 text-white hover:text-text-conti"
          >
            Envíanos tu CV
          </Link>
        </div>
    )
}