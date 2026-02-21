"use client";

import { useSidebar } from "@/hooks/useSidebar";
import { SidebarProps } from "@/types/layout/sidebar";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Sidebar({ className }: SidebarProps) {
  const { navItems, isActive, activeSection } = useSidebar();

  return (
    <aside
      className={cn(
        "fixed right-2 top-1/2 -translate-y-1/2 z-50 hidden md:flex",
        className
      )}
    >
      <nav className="glass rounded-full p-2 flex flex-col gap-4 shadow-2xl border-primary/10">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="relative p-3 rounded-full transition-colors group"
            title={item.label}
          >
            <AnimatePresence>
              {isActive(item.id) && (
                <motion.span
                  layoutId="active-pill-desktop"
                  className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/30"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </AnimatePresence>

            <span
              className={cn(
                "relative z-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
                isActive(item.id) ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"
              )}
            >
              {item.icon}
            </span>

            {/* Tooltip-like label on hover for desktop */}
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-popover text-popover-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-border">
              {item.label}
            </span>
          </a>
        ))}
      </nav>
    </aside>
  );
}