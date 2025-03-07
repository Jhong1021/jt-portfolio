import React from "react";
import { motion } from "framer-motion";
import Skin from "../assets/images/toriskincare.png"
import Gym from "../assets/images/gym.png";
import Cat from "../assets/images/meowcart.png";
import Vr from "../assets/images/vr.png";
import Project5 from "../assets/images/project5.png"; // Add your new image
import Project6 from "../assets/images/project6.png"; // Add your new image

const ProductGrid = () => {
  const images = [
    {
      id: 1,
      src: Skin,
      alt: "Photo by Minh Pham",
      label: "Tori Skin",
      colSpan: "md:col-span-1",
      link: "https://tori-skin-care.vercel.app/",
      animation: { opacity: 0, y: -50 }, // Fade Down
    },
    {
      id: 2,
      src: Gym,
      alt: "Photo by Magicle",
      label: "Strength Station",
      colSpan: "md:col-span-2",
      link: "https://strenghtstation.vercel.app/",
      animation: { opacity: 0, x: 50 }, // Fade Right
    },
    {
      id: 3,
      src: Vr,
      alt: "Photo by Martin Sanchez",
      label: "Vr ImmersionX",
      colSpan: "md:col-span-2",
      link: "https://vr-immersionx.vercel.app/",
      animation: { opacity: 0, x: -50 }, // Fade Left
    },
    {
      id: 4,
      src: Cat,
      alt: "Photo by Lorenzo Herrera",
      label: "Meow Mart",
      colSpan: "md:col-span-1",
      link: "https://meow-cart.vercel.app/",
      animation: { opacity: 0, y: 50 }, // Fade Up
    },
    {
      id: 5,
      src: Project5,
      alt: "Photo by XYZ",
      label: "Galaxy Kicks",
      colSpan: "md:col-span-1",
      link: "https://galaxy-kicks.vercel.app/",
      animation: { opacity: 0, y: -50 }, // Fade Down
    },
    {
      id: 6,
      src: Project6,
      alt: "Photo by ABC",
      label: "Leadership Summit",
      colSpan: "md:col-span-2",
      link: "https://leadership-kappa.vercel.app/",
      animation: { opacity: 0, x: 50 }, // Fade Right
    },
  ];

  return (
    <section id="projects" className="bg-gray-900 min-h-screen py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-screen-2xl">
          {/* Header Section */}
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex flex-col items-center gap-12 sm:flex-row sm:items-start">
              <h2 style={{ fontFamily: "'Zen Dots', cursive" }} className="text-3xl tracking-tight font-extrabold mb-4">
                <span className="text-gray-400">MY RECENT</span> <span className="text-orange-400">PROJECTS</span>
              </h2>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            {images.map((image) => (
              <motion.a
                key={image.id}
                href={image.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 ${image.colSpan}`}
                initial={image.animation}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  {image.label}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>


  );
};

export default ProductGrid;
