"use client"
import Image from "next/image";
import NameBanner from "@/public/images/liya-and-thearith.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroBannerSection = () => {

  useGSAP(() => {
    gsap.from('#hero #heading h1, #hero #name, #hero #date', {
      y: 200,
      opacity: 0,
      duration: 1,
      filter: "blur(5px)",
      ease: 'power1.inOut',
      stagger: 0.1
    })
  });

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-between py-40 z-40">
      {/* Top Text */}
      <div id="heading" className="text-primary text-xl font-heading font-bold text-center space-y-2">
        <h1>លិខិតអញ្ជើញ</h1>
        <h1>សិរីមង្គលពិធីភ្ជាប់ពាក្យ</h1>
      </div>

      {/* Name Banner */}
      <div id="name" className="w-[85%] flex justify-center">
        <Image src={NameBanner} alt="name" priority className="scale-100" />
      </div>

      {/* Date */}
      <div id="date" className="text-primary text-lg font-heading font-bold text-center">
        <h1>~ ៤ មករា ២០២៦ ~</h1>
      </div>
    </section>
  );
};

export default HeroBannerSection;
