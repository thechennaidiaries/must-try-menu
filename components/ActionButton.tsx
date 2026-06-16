import React from "react";

export default function ActionButton() {
  return (
    <div className="w-full flex justify-center items-center select-none">
      <a
        href="https://hi.switchy.io/outsyd"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[92%] bg-gradient-to-r from-[#2B1B62] to-[#48329E] border border-white/10 rounded-[24px] p-5 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.4)] active:scale-[0.98] transition-all duration-200 ease-out"
      >
        <div className="flex flex-col text-left pr-4">
          <span className="text-sm font-bold text-white tracking-wide">
            Bored in Chennai?
          </span>
          <span className="text-[12px] font-semibold text-white/55 mt-0.5 leading-snug">
            Checkout 200+ activities and sidequests in Chennai
          </span>
        </div>
        
        {/* Apple-style Chevron Arrow */}
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/5">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </a>
    </div>
  );
}

