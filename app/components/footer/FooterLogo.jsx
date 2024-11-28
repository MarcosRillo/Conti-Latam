import Image from "next/image";
import Link from "next/link";


export function FooterLogo({openModal}) {
    return (
        <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center md:text-left">
          <Link href="/">
            <Image
              src="/logo/LogoCONTi_30_HOR6.png"
              alt="Logo"
              width={180}
              height={38}
              className="mx-auto md:mx-0 mb-4"
            />
          </Link>
          <button
            onClick={openModal}
            className="px-4 py-2 border-2 border-transparent rounded-lg text-sm font-medium text-conti-blue bg-white hover:bg-conti-blue hover:border-white hover:text-white lg:hidden"
          >
            Contactanos
          </button>
        </div>
    )
}