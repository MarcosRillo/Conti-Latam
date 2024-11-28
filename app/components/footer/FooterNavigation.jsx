import { navigationLinks } from "@/app/lib/navigationData";
import Link from "next/link";

export default function FooterNavigation() {
  return (
    <div className="w-full lg:w-1/3 mb-8 md:mb-0 text-center lg:text-left">
      <h3 className="text-2xl font-bold mb-4">NAVEGACION</h3>
      <ul className="space-y-2">
        {navigationLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="hover:text-text-conti">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
