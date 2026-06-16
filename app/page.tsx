"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DishDeck from "../components/DishDeck";
import JointsList from "../components/JointsList";
import ActionButton from "../components/ActionButton";
import Progress from "../components/Progress";
import { dishes } from "../data/dishes";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"must-try" | "all-joints" >("must-try");

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
          {/* Fade out Progress indicator when viewing all joints */}
          <div className={`transition-opacity duration-300 ${activeTab === "must-try" ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <Progress current={(currentIndex % dishes.length) + 1} total={dishes.length} />
          </div>
        </div>
      </header>

      {/* Spacer: 2% height */}
      <div className="h-[2dvh] w-full" />

      {/* Segmented Tab Control: 6% height */}
      <div className="h-[6dvh] w-full flex items-center justify-center overflow-hidden">
        <div className="w-[92%] h-[46px] bg-[#1C1C1E]/80 border border-white/5 rounded-[14px] p-1 flex items-center select-none relative overflow-hidden">
          {/* Tab 1: Must Try Foods */}
          <button
            onClick={() => setActiveTab("must-try")}
            className={`flex-1 h-full text-[11px] font-bold uppercase tracking-wider rounded-[10px] relative z-10 transition-colors duration-200 outline-none ${
              activeTab === "must-try" ? "text-white" : "text-white/50"
            }`}
          >
            {activeTab === "must-try" && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-[#2C2C2E] rounded-[10px] border border-white/5 shadow-sm -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            Must Try Foods
          </button>

          {/* Tab 2: All Food Joints */}
          <button
            onClick={() => setActiveTab("all-joints")}
            className={`flex-1 h-full text-[11px] font-bold uppercase tracking-wider rounded-[10px] relative z-10 transition-colors duration-200 outline-none ${
              activeTab === "all-joints" ? "text-white" : "text-white/50"
            }`}
          >
            {activeTab === "all-joints" && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-[#2C2C2E] rounded-[10px] border border-white/5 shadow-sm -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            All Food Joints
          </button>
        </div>
      </div>

      {/* Spacer: 2% height */}
      <div className="h-[2dvh] w-full" />

      {/* Middle Content Area: 55% height */}
      <section className="h-[55dvh] w-full flex items-center justify-center overflow-hidden relative">
        <AnimatePresence mode="wait">
          {activeTab === "must-try" ? (
            <motion.div
              key="deck"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="w-full h-full flex items-center justify-center overflow-visible"
            >
              <DishDeck dishes={dishes} onIndexChange={setCurrentIndex} />
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="w-full h-full flex items-center justify-center"
            >
              <JointsList />
            </motion.div>
          )}
        </AnimatePresence>
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
