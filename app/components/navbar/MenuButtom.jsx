import MenuIcon from "@mui/icons-material/Menu";
import { navbarStyles } from "@/app/ui/navbarStyle";

export default function MenuButton({ onClick }) {
  return (
    <div className={navbarStyles.menuButton}>
      <button onClick={onClick}>
        <MenuIcon className={navbarStyles.menuIcon} sx={{ fontSize: 27 }} />
      </button>
    </div>
  );
}