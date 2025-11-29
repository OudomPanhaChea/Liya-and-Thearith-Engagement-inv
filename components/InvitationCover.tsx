"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import CoverImage from "@/public/images/Cover.png";
import Banner from "@/public/images/2.png";
import TopFrame from "@/public/images/top-frame.png";
import BottomFrame from "@/public/images/bottom-frame.png";

export default function InvitationCover({
  children,
  onOpened,
}: {
  children: React.ReactNode;
  onOpened?: () => void;
}) {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const coverRef = useRef<HTMLImageElement>(null);
  const shakeTimeline = useRef<gsap.core.Timeline | null>(null);

  // 🎬 Start shaking animation once component is mounted
  useEffect(() => {
    if (!opened && coverRef.current) {
      shakeTimeline.current = gsap.timeline({ repeat: -1, yoyo: true });
      shakeTimeline.current
        .to(coverRef.current, { rotation: 1.2, x: 2, duration: 0.1 })
        .to(coverRef.current, { rotation: -1.2, x: -2, duration: 0.1 })
        .to(coverRef.current, { rotation: 0, x: 0, duration: 0.1 })
        .to(coverRef.current, {
          scale: 1.01,
          duration: 1,
          ease: "power1.inOut",
        });
    }
  }, [opened]);

  const handleOpen = () => {
    // Stop shaky animation
    shakeTimeline.current?.kill();

    // Play music
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 1;
      audio.loop = true;
      audio.play().catch((err) => console.log(err));
    }

    // Animate opening
    if (coverRef.current) {
      gsap.to(coverRef.current, {
        opacity: 0,
        scale: 1.1,
        rotation: 0,
        duration: 1.2,
        ease: "power2.inOut",
        onComplete: () => {
          setOpened(true);
          onOpened?.();
        },
      });
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/musicBackground.mp3" preload="auto" />

      {!opened && (
        <div
        className="fixed inset-0 px-4 max-w-xl mx-auto cursor-pointer z-999 flex flex-col items-center justify-center"
        onClick={handleOpen}
        >
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
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-xl h-screen bg-pink-border-gradient opacity-40 z-3" />

            {/* Solid Pink Layer */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-xl h-screen bg-secondary opacity-20 z-3" />

            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-xl h-screen flex items-center -z-10">
              <Image src={Banner} alt="banner" className="opacity-50" />
            </div>
          </div>
          <Image
            ref={coverRef}
            src={CoverImage}
            alt="Invitation Cover"
            className="w-full border-2 border-primary rounded-lg"
            priority
          />
        </div>
      )}

      {opened && <div className="opacity-100">{children}</div>}
    </>
  );
}
