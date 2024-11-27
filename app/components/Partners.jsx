// PartnersSection.jsx
import {
  LaptopMac as LaptopMacIcon,
  People as PeopleIcon,
  Web as WebIcon,
  Cloud as CloudIcon,
  Code as CodeIcon,
  Build as BuildIcon,
} from "@mui/icons-material";
import { montserrat, openSans } from "../ui/fonts";

export default function PartnersSection() {
  const partners = [
    {
      icon: <LaptopMacIcon className="text-white" sx={{ fontSize: 70 }} />,
      title: "OPC",
      description: "Organizadores Profesionales de Congresos y Eventos",
    },
    {
      icon: <PeopleIcon className="text-white" sx={{ fontSize: 70 }} />,
      title: "BTL",
      description:
        "Below the line. Agencias de comunicación y publicidad que crean y realizan eventos para sus clientes",
    },
    {
      icon: <WebIcon className="text-white" sx={{ fontSize: 70 }} />,
      title: "DMC",
      description:
        "Destination Management Companies. Empresas de Viajes que organizan reuniones de incentivo, capacitación o celebraciones",
    },
    {
      icon: <CloudIcon className="text-white" sx={{ fontSize: 70 }} />,
      title: "Asociaciones",
      description:
        "Sociedades científicas y académicas. Instituciones deportivas, religiosas y culturales",
    },
    {
      icon: <CodeIcon className="text-white" sx={{ fontSize: 70 }} />,
      title: "Gobiernos",
      description:
        "Ministerios, Provincias y Municipios que organicen eventos de cualquier índole",
    },
    {
      icon: <BuildIcon className="text-white" sx={{ fontSize: 70 }} />,
      title: "OEM",
      description:
        "Organizadores de Eventos Masivos como festivales musicales, competencias deportivas, exposiciones y ferias",
    },
  ];

  return (
    <section
      id="partners-section"
      className="bg-conti-blue text-white p-8 py-44"
    >
      <h2 className={`${montserrat.className} text-5xl md:text-5xl font-bold text-center mb-24 pb-6`}>
        NUESTROS PARTNERS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {partner.icon}
            <h3 className={`${openSans.className} text-2xl font-bold mb-2`}>
              {partner.title}
            </h3>
            <p className="text-text-conti">{partner.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
