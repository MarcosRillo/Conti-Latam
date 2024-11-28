import { FooterLogo } from "@/app/components/footer/FooterLogo";
import FooterNavigation from "@/app/components/footer/FooterNavigation";
import FooterContact from "./FooterContact";

export default function Footer({ openModal }) {
  return (
    <footer className="bg-conti-blue text-white border-white border-t-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between p-8 md:p-16">
        <FooterLogo openModal={openModal} />
        <FooterNavigation />
        <FooterContact />
      </div>
      <div className="bg-white text-gray-600 text-center text-sm py-5">
        <p>Copyright © CONTI Latam 2022 – Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
