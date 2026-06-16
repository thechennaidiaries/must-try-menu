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
  const [activeTab, setActiveTab] = useState<"must-try" | "all-joints">("must-try");

  return (
    <main className="w-full h-[100dvh] bg-black text-white flex flex-col overflow-hidden px-4 py-3 pb-safe select-none">
      {/* Top Header: auto height */}
      <header className="flex-shrink-0 w-full grid grid-cols-3 items-center px-2 py-2 overflow-hidden">
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

      {/* Segmented Tab Control: auto height */}
      <div className="flex-shrink-0 w-full py-2 flex items-center justify-center">
        <div className="w-[92%] h-[44px] bg-[#1C1C1E]/80 border border-white/5 rounded-[12px] p-1 flex items-center select-none relative overflow-hidden">
          {/* Tab 1: Must Try Foods */}
          <button
            onClick={() => setActiveTab("must-try")}
            className={`flex-1 h-full text-[10px] font-bold uppercase tracking-wider rounded-[8px] relative z-10 transition-colors duration-200 outline-none ${
              activeTab === "must-try" ? "text-white" : "text-white/50"
            }`}
          >
            {activeTab === "must-try" && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-[#2C2C2E] rounded-[8px] border border-white/5 shadow-sm -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            Must Try Foods
          </button>

          {/* Tab 2: All Food Joints */}
          <button
            onClick={() => setActiveTab("all-joints")}
            className={`flex-1 h-full text-[10px] font-bold uppercase tracking-wider rounded-[8px] relative z-10 transition-colors duration-200 outline-none ${
              activeTab === "all-joints" ? "text-white" : "text-white/50"
            }`}
          >
            {activeTab === "all-joints" && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-[#2C2C2E] rounded-[8px] border border-white/5 shadow-sm -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            All Food Joints
          </button>
        </div>
      </div>

      {/* Spacer between tabs and content */}
      <div className="h-2 flex-shrink-0" />

      {/* Middle Content Area: Flex-1 takes remaining space */}
      <section className="flex-1 w-full flex items-center justify-center overflow-hidden relative min-h-0">
        <AnimatePresence mode="wait">
          {activeTab === "must-try" ? (
            <motion.div
              key="deck"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
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
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full h-full flex items-center justify-center"
            >
              <JointsList />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Spacer between content and footer */}
      <div className="h-4 flex-shrink-0" />

      {/* Bottom Action Area: auto height */}
      <footer className="flex-shrink-0 w-full py-2">
        <ActionButton />
      </footer>
    </main>
  );
}
