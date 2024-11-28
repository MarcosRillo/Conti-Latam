import { partners } from "@/app/lib/partnersData";
import { montserrat, openSans } from "@/app/ui/fonts";

export default function PartnersSection() {
  return (
    <section
      id="partners-section"
      className="bg-conti-blue text-white p-8 py-44"
    >
      <div className="relative z-10 flex flex-col items-center justify-center w-full lg:w-9/12 m-auto">
        <h2
          className={`${montserrat.className} text-5xl md:text-5xl font-bold text-center mb-24 pb-6`}
        >
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
      </div>
    </section>
  );
}
