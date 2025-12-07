"use client";

import DecryptedText from "../ui/decrypted-text";
import TrueFocus from "../ui/true-focus";

export default function Hero() {
  return (
    <section id="hero" className="bg-[#191919] flex space-y-14 items-center justify-center flex-col h-screen">
      <DecryptedText
        text="Siddharth Bramhecha"
        animateOn="both"
        revealDirection="start"
        className="sr-only md:not-sr-only md:text-7xl text-[#DFD0B8] font-bold tracking-[1px]"
        encryptedClassName="text-6xl sr-only md:not-sr-only text-[#393053]"
        speed={80}
        sequential={true}
      />

      <DecryptedText
        text="Siddharth"
        animateOn="both"
        revealDirection="start"
        className="text-4xl md:sr-only z-5 text-[#DFD0B8] font-bold tracking-[1px]"
        encryptedClassName="text-5xl md:sr-only text-[#393053]"
        speed={80}
        sequential={true}
      />
      <DecryptedText
        text="Bramhecha"
        animateOn="both"
        revealDirection="start"
        className="text-4xl md:sr-only z-5 text-[#DFD0B8] font-bold tracking-[1px]"
        encryptedClassName="text-5xl md:sr-only text-[#393053]"
        speed={80}
        sequential={true}
      />

      <div>
        <TrueFocus
          sentence=" Full Stack | Gen AI "
          manualMode={false}
          blurAmount={5}
          borderColor="red"
          animationDuration={2.5}
          pauseBetweenAnimations={1}
          separator="|"
        />
      </div>
    </section>
  );
}
