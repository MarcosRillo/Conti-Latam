import Image from "next/image";
import Link from "next/link";
import { navbarStyles } from "@/app/ui/navbarStyle";

export default function Logo({ size }) {
  return (
    <div className={navbarStyles.logo}>
      <Link href="/">
        <Image
          src="/logo/LogoCONTi_30-.png"
          alt="Logo"
          width={size}
          height={(size * 53.3) / 150}
          priority
          className="transition-all duration-400"
        />
      </Link>
    </div>
  );
}