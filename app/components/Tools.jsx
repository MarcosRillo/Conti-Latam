import Link from "next/link";
import { tools } from "@/app/lib/toolsData";
import { openSans } from "@/app/ui/fonts";

export default function ToolsSection({ openModal }) {
  return (
    <section
  id="tools-section"
  className="relative w-full bg-conti-blue text-white pb-16 bg-fixed bg-cover bg-center"
>
  <div className="relative z-10 flex flex-col items-center justify-center w-full lg:w-10/12 m-auto">
    <h2 className="text-4xl font-bold uppercase text-center py-24">
      NUESTRAS HERRAMIENTAS
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-4 px-4">
      {tools.map((tool, index) => (
        <Link href={tool.link} key={index} className="no-underline">
          <div className="p-8 rounded-lg flex flex-col items-center text-center hover:bg-sky-600 hover:bg-opacity-25 transition-all duration-300 ease-in-out">
            {tool.icon}
            <h3
              className={`${openSans.className} text-2xl font-bold leading-6 text-white mt-4`}
            >
              {tool.title}
            </h3>
            <p
              className={`${openSans.className} text-text-conti mt-3 leading-6 text-2xl`}
            >
              {tool.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
    <button
      onClick={openModal}
      className="mt-16 px-6 py-3 border-4 lg:px-12 lg:py-6 border-white rounded-full text-sm lg:text-lg font-bold text-conti-blue bg-white hover:bg-conti-blue hover:text-white transition-all duration-300 ease-in-out"
    >
      AGENDE UNA REUNION
    </button>
  </div>
</section>

  );
}
