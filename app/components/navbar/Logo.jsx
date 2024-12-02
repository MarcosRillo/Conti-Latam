import Image from "next/image";
import Link from "next/link";
import { navbarStyles } from "@/app/ui/navbarStyle";

export default function Logo() {
  return (
    <div className={navbarStyles.logo}>
      <Link href="/">
        <Image
          src="/logo/LogoCONTi_30-.png"
          alt="Logo"
          width={150}
          height={53.3}
          priority
        />
      </Link>
    </div>
  );
}