import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const clients = [
  "/images/confia/sap.png",
  "/images/confia/dell.png",
  "/images/confia/endeavor.png",
  "/images/confia/oracle.png",
  "/images/confia/instagram.png",
  "/images/confia/microsoft.png",
  "/images/confia/mac.png",
  "/images/confia/bayer.png",
  "/images/confia/syngenta.png",
  "/images/confia/scania.png",
  "/images/confia/galicia.png",
  "/images/confia/mercedes.png",
  "/images/confia/icbc.png",
  "/images/confia/mci.png",
  "/images/confia/bsas.png",
  "/images/confia/cacs.png",
  "/images/confia/cat.png",
  "/images/confia/senado_chile.png",
  "/images/confia/boca.png",
  "/images/confia/skal.png",
  "/images/confia/santander.png",
];

export default function ClientsCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section id="clients-carousel" className="p-8 md:p-16 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-conti-blue text-center mb-8">
        CONFIAN EN NOSOTROS
      </h2>
      <Slider {...settings}>
        {clients.map((client, index) => (
          <div key={index} className="p-4">
            <Image
              src={client}
              alt={`Client ${index + 1}`}
              width={225}
              height={150}
              className="mx-auto"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
