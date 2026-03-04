"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-[56px] h-8 bg-gray-200/50 rounded-full animate-pulse" />
    )
  }

  const isDark = theme === "dark"

  return (
    <div
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-[56px] h-8 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center cursor-pointer p-1 transition-colors border border-zinc-200 dark:border-zinc-700"
    >
      <div className="flex justify-between w-full px-1 z-10">
        <Sun 
          size={16} 
          className={`${!isDark ? "text-zinc-900" : "text-zinc-500"} transition-colors`} 
        />
        <Moon 
          size={16} 
          className={`${isDark ? "text-white" : "text-zinc-400"} transition-colors`} 
        />
      </div>
      <div
        className={`absolute left-1 w-6 h-6 bg-white dark:bg-zinc-900 rounded-full border-2 border-[#BCBCBC] transition-transform duration-300 ease-in-out ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </div>
  )
}
