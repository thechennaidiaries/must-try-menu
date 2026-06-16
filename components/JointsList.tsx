"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { joints } from "../data/joints";

export default function JointsList() {
  return (
    <div className="w-full h-full overflow-y-auto px-4 pb-12 flex flex-col gap-3.5 scroll-smooth scrollbar-none select-none">
      {joints.map((joint, index) => (
        <motion.div
          key={joint.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 24,
            delay: index * 0.05,
          }}
          className="flex items-center gap-4 bg-[#121212] border border-white/[0.06] rounded-[24px] p-4 active:scale-[0.98] transition-transform duration-200"
        >
          {/* Joint Image */}
          <div className="relative w-20 h-20 rounded-[18px] overflow-hidden flex-shrink-0 border border-white/5">
            <Image
              src={joint.image}
              alt={joint.name}
              fill
              sizes="80px"
              className="object-cover pointer-events-none select-none"
            />
          </div>

          {/* Joint Details */}
          <div className="flex-1 min-w-0 flex flex-col text-left justify-center">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-base font-bold text-white tracking-tight truncate">
                {joint.name}
              </h3>
              {/* Star Rating Badge */}
              <div className="flex items-center gap-1 bg-green-950/40 border border-green-800/30 px-2 py-0.5 rounded-[999px] flex-shrink-0">
                <span className="text-green-400 text-[10px] leading-none">★</span>
                <span className="text-white text-[10px] font-bold leading-none">{joint.rating}</span>
              </div>
            </div>

            {/* Cuisine */}
            <p className="text-[12px] font-medium text-white/55 mt-0.5 truncate">
              {joint.cuisine}
            </p>

            {/* Timing and Cost */}
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-white/45 mt-1 flex-wrap">
              <span>{joint.time}</span>
              <span>•</span>
              <span>{joint.avgCost}</span>
            </div>

            {/* Offer Tag */}
            {joint.offers && (
              <div className="flex items-center gap-1 mt-2">
                <span className="text-[9px] font-bold tracking-wider text-[#FFB020] uppercase bg-[#FFB020]/10 border border-[#FFB020]/20 px-2 py-0.5 rounded-[999px] whitespace-nowrap">
                  {joint.offers}
                </span>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
