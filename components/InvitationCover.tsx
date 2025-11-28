"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

import CoverImage from "@/public/images/Cover.png"

export default function InvitationCover({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.play();
      audio.volume = 0.4;
      audio.loop = true;
    }

    // Animate cover out
    if (coverRef.current) {
      gsap.to(coverRef.current, {
        opacity: 0,
        scale: 1.1,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => setOpened(true),
      });
    }
  };

  return (
    <>
      <audio ref={audioRef} src={'/audio/musicBackground.mp3'} preload="auto" />

      {/* Cover */}
      {!opened && (
        <div
          ref={coverRef}
          className="fixed max-w-xl bg-white mx-auto cursor-pointer inset-0 z-999 flex flex-col items-center justify-center"
          onClick={handleOpen}
        >
          <Image
            src={CoverImage}
            alt="Invitation Cover"
            className="w-full"
            priority
          />

          <div className="absolute bottom-12 text-white text-center px-4">
            <p className="text-xl font-medium">
              ចុចទីនេះដើម្បីចូលរួមពិធីសិរីមង្គល
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div
        className={`${
          opened ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
      >
        {children}
      </div>
    </>
  );
}
