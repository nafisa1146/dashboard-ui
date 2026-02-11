"use client";

import { useTheme } from "@/app/Providers/ThemeProvider";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";

const themes = [
  { id: "light", label: "Light", icon: "☀️" },
  { id: "dark", label: "Dark", icon: "🌙" },
  { id: "retro", label: "Retro", icon: "🧁" },
  { id: "ocean", label: "Ocean", icon: "🌊" },
  { id: "coffee", label: "Coffee", icon: "☕" },
  { id: "cyberpunk", label: "Cyberpunk", icon: "⚡" },
  { id: "forest", label: "Forest", icon: "🌲" },
];

export default function ThemeDropdown() {
  const { theme, changeTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-surface hover:bg-surface-muted"
      >
        <span>{themes.find(t => t.id === theme)?.icon}</span>
        <FiChevronDown size={14} />
      </button>

      {/* Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-xl border border-border bg-surface shadow-lg z-50">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                changeTheme(t.id);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-surface-muted
                ${theme === t.id ? "text-primary" : "text-secondary"}
              `}
            >
              <span>{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
