"use client";
import HeroBannerSection from "@/components/sections/HeroBannerSection";
import Image from "next/image";

import Banner from "@/public/images/2.png";
import TopFrame from "@/public/images/top-frame.png";
import BottomFrame from "@/public/images/bottom-frame.png";
import GreetingSection from "@/components/sections/GreetingSection";
import EventsListingSection from "@/components/sections/EventsListingSection";
import LocationSection from "@/components/sections/LocationSection";
import ThankingSection from "@/components/sections/ThankingSection";
import SendMessageSection from "@/components/sections/SendMessageSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import InvitationCover from "@/components/InvitationCover";
import { useState } from "react";

export default function Home() {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  useGSAP(() => {
    if(!isOpened) return;

    gsap.fromTo("#flashOverlay",
      { opacity: 1 },
      {
        opacity: 0,
        duration: 1,
        ease: "power1.out",
        onComplete: () => {
          gsap.set("#flashOverlay", { display: "none" });
        },
      }
    );

    gsap.from("#assets #topFrame", {
      y: -50,
      opacity: 0,
      filter: "blur(5px)",
      duration: 1,
      ease: "power1.inOut",
    });

    gsap.from("#assets #bottomFrame", {
      y: 50,
      opacity: 0,
      duration: 1,
      filter: "blur(5px)",
      ease: "power1.inOut",
    });
  }, [isOpened]);

  return (
    <InvitationCover onOpened={() => setIsOpened(true)}>
      {isOpened && (
        <div
          id="assets"
          className="max-w-xl mx-auto relative min-h-screen overflow-hidden"
        >
          <div
            id="flashOverlay"
            className="fixed inset-0 bg-white backdrop-blur-lg z-999 pointer-events-none"
          ></div>

          {/* Background Image */}
          <Image
            id="topFrame"
            src={TopFrame}
            alt="topframe"
            className="fixed top-0 left-1/2 -translate-x-1/2 w-xl object-cover blur-[0.1px] pointer-events-none z-10"
          />
          <Image
            id="bottomFrame"
            src={BottomFrame}
            alt="bottomframe"
            className="fixed bottom-0 left-1/2 -translate-x-1/2 w-xl object-cover blur-[0.1px] pointer-events-none z-10"
          />

          {/* Outer Pink Gradient */}
          <div className="fixed top-0 w-xl left-1/2 -translate-x-1/2 h-screen object-cover blur-[0.1px] pointer-events-none bg-pink-outter-gradient opacity-40 z-20" />

          <div className="relative overflow-hidden">
            {/* Border Gradient */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-xl h-screen bg-pink-border-gradient opacity-80 z-3" />

            {/* Solid Pink Layer */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-xl h-screen bg-secondary opacity-40 z-3" />

            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-xl h-screen flex items-center -z-10">
              <Image src={Banner} alt="banner" className="opacity-50" />
            </div>

            {/* contents */}
            <div className="relative z-8">
              <HeroBannerSection />
              <GreetingSection />
              <EventsListingSection />
              <LocationSection />
              <ThankingSection />
              <SendMessageSection />

              <div className="pt-24 pb-38 text-center">
                <h3 className="font-text text-primary/70">
                  All Right Reserverd. Chea Oudompanha.
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </InvitationCover>
  );
}
