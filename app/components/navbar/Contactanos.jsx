import { navbarStyles } from "@/app/ui/navbarStyle";

export default function ContactButton({ onClick }) {
  return (
    <button onClick={onClick} className={navbarStyles.contactButton}>
      Contáctanos
    </button>
  );
}