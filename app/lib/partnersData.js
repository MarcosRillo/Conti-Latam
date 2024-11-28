import {
  RecordVoiceOverOutlined as RecordVoiceOverOutlinedIcon,
  People as PeopleIcon,
  FlightTakeoffOutlined as FlightTakeoffOutlinedIcon,
  ScienceOutlined as ScienceOutlinedIcon,
  AccountBalanceOutlined as AccountBalanceOutlinedIcon,
  Groups2Outlined as Groups2OutlinedIcon,
} from "@mui/icons-material";

export const partners = [
  {
    icon: <RecordVoiceOverOutlinedIcon className="text-white" sx={{ fontSize: 70 }} />,
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
    icon: <FlightTakeoffOutlinedIcon className="text-white" sx={{ fontSize: 70 }} />,
    title: "DMC",
    description:
      "Destination Management Companies. Empresas de Viajes que organizan reuniones de incentivo, capacitación o celebraciones",
  },
  {
    icon: <ScienceOutlinedIcon className="text-white" sx={{ fontSize: 70 }} />,
    title: "Asociaciones",
    description:
      "Sociedades científicas y académicas. Instituciones deportivas, religiosas y culturales",
  },
  {
    icon: <AccountBalanceOutlinedIcon className="text-white" sx={{ fontSize: 70 }} />,
    title: "Gobiernos",
    description:
      "Ministerios, Provincias y Municipios que organicen eventos de cualquier índole",
  },
  {
    icon: <Groups2OutlinedIcon className="text-white" sx={{ fontSize: 70 }} />,
    title: "OEM",
    description:
      "Organizadores de Eventos Masivos como festivales musicales, competencias deportivas, exposiciones y ferias",
  },
];
