"use client";

import React, { memo } from "react";
import Image from "next/image";
import { Dish } from "../data/dishes";

interface DishCardProps {
  dish: Dish;
  priority?: boolean;
}

const DishCard = memo(function DishCard({ dish, priority = false }: DishCardProps) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[36px] bg-[#121212] select-none shadow-[0_24px_48px_-15px_rgba(0,0,0,0.8)]">
      {/* Immersive Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={dish.image}
          alt={`${dish.title} at ${dish.brand}`}
          fill
          sizes="(max-width: 768px) 100vw, 384px"
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          className="object-cover select-none pointer-events-none transform scale-[1.01]"
        />
      </div>

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 pointer-events-none" />

      {/* Card Content (Bottom-left aligned) */}
      <div className="absolute bottom-0 left-0 right-0 p-8 pb-10 flex flex-col justify-end text-left pointer-events-none">
        <h2 className="text-[32px] font-bold leading-[1.15] text-white tracking-tight mb-3">
          {dish.title} <span className="font-semibold text-white/90">at {dish.brand}</span>
        </h2>
        <p className="text-base font-semibold text-white/55 tracking-wide uppercase">
          {dish.location}
        </p>
      </div>
    </div>
  );
});

export default DishCard;
