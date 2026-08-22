"use client";

import { useCallback, useState } from "react";
import Loader from "@/components/Loader";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import IslamicDecor from "@/components/IslamicDecor";
import CoupleReveal from "@/components/CoupleReveal";
import WeddingInfo from "@/components/WeddingInfo";
import Story from "@/components/Story";
import CinematicGallery from "@/components/CinematicGallery";
import VenueMap from "@/components/VenueMap";
import Countdown from "@/components/Countdown";
import Dua from "@/components/Dua";
import FinalBlessing from "@/components/FinalBlessing";

export default function Home() {
  const [ready, setReady] = useState(false);

  const handleLoaderDone = useCallback(() => setReady(true), []);

  return (
    <>
      <Loader onDone={handleLoaderDone} />
      <ScrollProgress />
      <main className="relative bg-cream">
        <Hero ready={ready} />
        <IslamicDecor />
        <CoupleReveal />
        <WeddingInfo />
        <Story />
        <CinematicGallery />
        <VenueMap />
        <Countdown />
        <Dua />
        <FinalBlessing />
      </main>
    </>
  );
}
