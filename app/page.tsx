"use client";

import React, { useState } from "react";
import DishDeck from "../components/DishDeck";
import ActionButton from "../components/ActionButton";
import Progress from "../components/Progress";
import { dishes } from "../data/dishes";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <main className="w-full h-[100dvh] bg-black text-white flex flex-col justify-between overflow-hidden px-4 py-4 md:py-6 select-none">
      {/* Top Header: 5% height */}
      <header className="h-[5dvh] w-full grid grid-cols-3 items-center px-2 overflow-hidden">
        <div className="flex justify-start" />
        <div className="flex justify-center items-center">
          <span className="text-[11px] font-bold tracking-[0.25em] text-white uppercase text-center whitespace-nowrap">
            This Food Court
          </span>
        </div>
        <div className="flex justify-end items-center">
          <Progress current={currentIndex + 1} total={dishes.length} />
        </div>
      </header>

      {/* Spacer: 2% height */}
      <div className="h-[2dvh] w-full" />

      {/* Heading: 6% height */}
      <div className="h-[6dvh] w-full flex items-center justify-center overflow-hidden">
        <h2 className="text-[22px] font-bold tracking-tight text-white/90 text-center select-none">
          Must Try Foods
        </h2>
      </div>

      {/* Spacer: 2% height */}
      <div className="h-[2dvh] w-full" />

      {/* Middle Card Area: 55% height */}
      <section className="h-[55dvh] w-full flex items-center justify-center overflow-visible">
        <DishDeck dishes={dishes} onIndexChange={setCurrentIndex} />
      </section>

      {/* Spacing / Gap: 5% height */}
      <div className="h-[5dvh] w-full" />

      {/* Bottom Action Area: 25% height */}
      <footer className="h-[25dvh] w-full flex items-center justify-center overflow-hidden pb-safe">
        <ActionButton />
      </footer>
    </main>
  );
}
