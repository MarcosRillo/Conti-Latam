import Link from "next/link";
import { navbarStyles } from "@/app/ui/navbarStyle";
import ContactButton from "@/app/components/navbar/Contactanos";

export default function NavLinks({ isOpen, openModal }) {
  return (
    <div className={navbarStyles.menuClasses(isOpen)}>
      <div className={navbarStyles.linksContainer}>
        <Link href="#hero-section" className={navbarStyles.link}>
          Inicio
        </Link>
        <Link href="#what-we-do" className={navbarStyles.link}>
          Servicios
        </Link>
        <Link href="#tools-section" className={navbarStyles.link}>
          Herramientas
        </Link>
        <Link href="#clients-carousel" className={navbarStyles.link}>
          Clientes
        </Link>
        <Link href="#partners-section" className={navbarStyles.link}>
          Partners
        </Link>
        <ContactButton onClick={openModal} />
      </div>
    </div>
  );
}