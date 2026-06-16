"use client";

import React from "react";

interface ProgressProps {
  current: number;
  total: number;
}

export default function Progress({ current, total }: ProgressProps) {
  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="flex flex-col items-end gap-1.5 select-none">
      <div className="text-[11px] font-semibold tracking-wider text-white/55">
        <span className="text-white font-bold">{formatNumber(current)}</span>
        <span className="mx-1.5 text-white/20">/</span>
        <span>{formatNumber(total)}</span>
      </div>
      <div className="w-16 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-300 ease-out"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>
    </div>
  );
}
