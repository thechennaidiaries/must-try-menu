"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import DishCard from "./DishCard";
import { Dish } from "../data/dishes";

interface DishDeckProps {
  dishes: Dish[];
  onIndexChange: (index: number) => void;
}

export default function DishDeck({ dishes, onIndexChange }: DishDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [threshold, setThreshold] = useState(100);

  const dragX = useMotionValue(0);

  // Initialize threshold based on window width
  useEffect(() => {
    const handleResize = () => {
      setThreshold(window.innerWidth * 0.25);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sync index change with parent component
  useEffect(() => {
    onIndexChange(currentIndex);
  }, [currentIndex, onIndexChange]);

  // Interpolate progress of drag from 0 to 1 based on threshold
  const dragProgress = useTransform(dragX, (value) => {
    return Math.min(Math.abs(value) / threshold, 1);
  });

  // Card 1 (top card) rotation and opacity
  const rotateCard1 = useTransform(dragX, (value) => {
    // Max rotation is 4 degrees when swiped out fully
    const screenWidth = typeof window !== "undefined" ? window.innerWidth : 380;
    const progress = value / screenWidth;
    return progress * 4;
  });

  const opacityCard1 = useTransform(dragX, (value) => {
    // Fade out as it goes beyond the threshold towards offscreen
    const absVal = Math.abs(value);
    if (absVal <= threshold) return 1;
    const screenWidth = typeof window !== "undefined" ? window.innerWidth : 380;
    const fadeProgress = (absVal - threshold) / (screenWidth * 0.8 - threshold);
    return Math.max(1 - fadeProgress, 0);
  });

  // Card 2 transforms (scales up to 1, translates up to 0, rotates to 0)
  const scaleCard2 = useTransform(dragProgress, [0, 1], [0.97, 1]);
  const yCard2 = useTransform(dragProgress, [0, 1], [8, 0]);
  const rotateCard2 = useTransform(dragProgress, [0, 1], [-1, 0]);

  // Card 3 transforms (scales up to 0.97, translates up to 8px, rotates to -1deg)
  const scaleCard3 = useTransform(dragProgress, [0, 1], [0.94, 0.97]);
  const yCard3 = useTransform(dragProgress, [0, 1], [16, 8]);
  const rotateCard3 = useTransform(dragProgress, [0, 1], [1, -1]);
  const opacityCard3 = useTransform(dragProgress, [0, 1], [0.35, 1]);

  const handleDragEnd = async (_event: any, info: any) => {
    if (isAnimating) return;

    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const screenWidth = window.innerWidth;

    const isSwipeRight = offset > threshold || (velocity > 300 && offset > 20);
    const isSwipeLeft = offset < -threshold || (velocity < -300 && offset < -20);
    const hasNextCard = currentIndex < dishes.length - 1;

    if ((isSwipeRight || isSwipeLeft) && hasNextCard) {
      setIsAnimating(true);
      const direction = isSwipeLeft ? -1 : 1;
      const targetX = direction * screenWidth * 1.25;

      // Animate the card completely offscreen
      await animate(dragX, targetX, {
        type: "spring",
        stiffness: 220,
        damping: 30,
        restDelta: 0.1,
      });

      // Move to the next card
      setCurrentIndex((prev) => prev + 1);
      // Reset drag value instantly
      dragX.set(0);
      setIsAnimating(false);
    } else {
      // Snap back to center
      setIsAnimating(true);
      await animate(dragX, 0, {
        type: "spring",
        stiffness: 220,
        damping: 30,
      });
      setIsAnimating(false);
    }
  };

  const card1 = dishes[currentIndex];
  const card2 = dishes[currentIndex + 1];
  const card3 = dishes[currentIndex + 2];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-visible">
      {/* Card 3 (Bottom) */}
      {card3 && (
        <motion.div
          style={{
            scale: scaleCard3,
            y: yCard3,
            rotate: rotateCard3,
            opacity: opacityCard3,
            zIndex: 10,
          }}
          className="absolute w-[92%] h-full origin-bottom select-none pointer-events-none"
        >
          <DishCard dish={card3} />
        </motion.div>
      )}

      {/* Card 2 (Middle) */}
      {card2 && (
        <motion.div
          style={{
            scale: scaleCard2,
            y: yCard2,
            rotate: rotateCard2,
            zIndex: 20,
          }}
          className="absolute w-[92%] h-full origin-bottom select-none pointer-events-none"
        >
          <DishCard dish={card2} />
        </motion.div>
      )}

      {/* Card 1 (Top, Draggable) */}
      {card1 && (
        <motion.div
          key={card1.id}
          style={{
            x: dragX,
            rotate: rotateCard1,
            opacity: opacityCard1,
            zIndex: 30,
          }}
          drag="x"
          dragDirectionLock
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.6}
          onDragEnd={handleDragEnd}
          className="absolute w-[92%] h-full origin-bottom cursor-grab active:cursor-grabbing touch-pan-y"
        >
          <DishCard dish={card1} priority />
        </motion.div>
      )}

      {/* Empty State / End of Deck (Safety Fallback) */}
      {!card1 && (
        <div className="text-white/45 text-sm font-semibold select-none">
          No more signature dishes today.
        </div>
      )}
    </div>
  );
}
