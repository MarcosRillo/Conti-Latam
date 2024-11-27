import {
  ConnectWithoutContactOutlined as ConnectWithoutContactOutlinedIcon,
  Web as WebIcon,
  AccountTreeOutlined as AccountTreeOutlinedIcon,
  WorkOutlineOutlined as WorkOutlineOutlinedIcon,
  People as PeopleIcon,
  AssignmentIndOutlined as AssignmentIndOutlinedIcon,
} from "@mui/icons-material";

export const tools = [
  {
    icon: <ConnectWithoutContactOutlinedIcon sx={{ fontSize: 70 }} />,
    title: "EVENTOS DIGITALES E HÍBRIDOS",
    description: (
      <>
        Permanecer activo cuando el mundo cambió habla de {" "}
        <strong>tu capacidad de adaptarte</strong> a un nuevo contexto
      </>
    ),
    link: "/herramientas/tool1",
  },
  {
    icon: <AssignmentIndOutlinedIcon sx={{ fontSize: 70 }} />,
    title: "FORMULARIO DE REGISTRO",
    description: (
      <>
        Iniciar en modo {" "}
        <strong>Eficiencia Total</strong> es aplicar formularios de registros especializados en eventos profesionales
      </>
    ),
    link: "/herramientas/tool2",
  },
  {
    icon: <WebIcon sx={{ fontSize: 70 }} />,
    title: "SOFTWARE GESTIÓN DE PROGRAMA CIENTÍFICO",
    description: (
      <>
        Programas de actividades en modo colaborativo es {" "}
        <strong>distribuir acción, ahorrar tiempo y simplificar trabajo</strong>
      </>
    ),
    link: "/herramientas/tool3",
  },
  {
    icon: <AccountTreeOutlinedIcon sx={{ fontSize: 70 }} />,
    title: "ADMINISTRADOR DE TEMAS LIBRES",
    description: (
      <>
        Aumentar la eficiencia es reducir a{" "}
        <strong>menos de la mitas los tiempos de gestión</strong> de abstracts en tus eventos
      </>
    ),
    link: "/herramientas/tool4",
  },
  {
    icon: <WorkOutlineOutlinedIcon sx={{ fontSize: 70 }} />,
    title: "RONDAS DE NEGOCIO",
    description: (
      <>
        Muchos organizan Rondas de Negocios, pero muy pocos logran dinamizar
        {" "} <strong>Rondas CON Negocios</strong> de verdad
      </>
    ),
    link: "/herramientas/tool5",
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 70 }} />,
    title: "EVENTOS PRESENCIALES",
    description: (
      <>
        En tres décadas realizamos <strong>miles de eventos para todas las industrias</strong> en una oferta extremadamente amplia
      </>
    ),
    link: "/herramientas/tool6",
  },
];