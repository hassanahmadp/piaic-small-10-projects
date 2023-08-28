"use client"

import { useBrowserStorage } from "@/utils"
import { twMerge } from "tailwind-merge"

export const dynamic = "force-dynamic"

export default function Home() {
  debugger
  const [theme, setTheme] = useBrowserStorage<1 | 2 | 3>("theme", 1)
  const theme1 = theme === 1
  const theme2 = theme === 2
  const theme3 = theme === 3
  return (
    <main
      className={twMerge(
        "flex justify-center items-center min-h-screen",
        theme1 && "bg-theme1_bg_main",
        theme2 && "bg-theme2_bg_main",
        theme3 && "bg-theme3_bg_main",
      )}
    >
      <div className="w-full max-w-[580px] mx-auto px-5 py-8">
        <div className="flex justify-between items center">
          <h1>calc</h1>
          <span>switch</span>
        </div>
      </div>
    </main>
  )
}
