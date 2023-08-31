"use client"

import { Switch, Key } from "@/components"
import { useBrowserStorage } from "@/utils"
import { useState } from "react"
import { twMerge } from "tailwind-merge"

export const dynamic = "force-dynamic"

export default function Home() {
  const [theme, setTheme] = useBrowserStorage<themeType>("theme", 1)
  const [result, setResult] = useState<string>("")

  const formatNumber = (val: number = 0): string => {
    if (!val || typeof val !== "number") return "0"
    return new Intl.NumberFormat("en-US").format(val)
  }

  const keys: string[] = [
    "7",
    "8",
    "9",
    "del",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "x",
    "reset",
    "=",
  ]

  return (
    <main
      className={twMerge(
        "flex justify-center flex-col items-center min-h-screen bg-theme1_bg_main text-theme1_text_white",
        theme === 2 && "bg-theme2_bg_main text-theme2_text_dark",
        theme === 3 && "bg-theme3_bg_main text-theme3_text_dark",
      )}
      suppressHydrationWarning
    >
      <div className="w-full max-w-[580px] gap-8 flex flex-col mx-auto px-5 py-8">
        <div className="flex justify-between items-end">
          <h1 className="text-4xl font-semibold">calc</h1>
          <Switch theme={theme} setTheme={setTheme} />
        </div>
        <div
          className={twMerge(
            "w-full p-5 bg-theme1_bg_screen rounded-lg",
            theme === 2 && "bg-theme2_bg_screen",
            theme === 3 && "bg-theme3_bg_keypad_screen",
          )}
          suppressHydrationWarning
        >
          <h3 className="text-right text-6xl font-bold">{formatNumber(90079601)}</h3>
        </div>
        <div
          className={twMerge(
            "w-full py-7 px-5 grid grid-cols-4 grid-rows-[repeat(5,4rem)] gap-4 sm:gap-6 bg-theme1_bg_keypad rounded-lg ",
            theme === 2 && "bg-theme2_bg_keypad",
            theme === 3 && "bg-theme3_bg_keypad_screen",
          )}
          suppressHydrationWarning
        >
          {keys.map(key => (
            <Key theme={theme} value={key} key={key} />
          ))}
        </div>
      </div>
    </main>
  )
}
