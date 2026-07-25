"use client";

import { useEffect } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
  duration?: number;
}

export default function Toast({ message, type, onClose, duration = 3500 }: ToastProps) {
  useEffect(() => {
    const timer = window.setTimeout(onClose, duration);
    return () => window.clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      aria-live="polite"
      className="fixed bottom-6 left-1/2 z-50 max-w-[92vw] -translate-x-1/2 rounded-3xl border border-white/10 bg-slate-950/95 px-5 py-4 text-sm shadow-2xl shadow-black/50 backdrop-blur-xl"
    >
      <div className="flex items-center gap-3">
        <span className={`h-2.5 w-2.5 rounded-full ${type === "success" ? "bg-emerald-400" : "bg-rose-400"}`} />
        <p className="text-foreground-secondary">{message}</p>
      </div>
    </div>
  );
}
