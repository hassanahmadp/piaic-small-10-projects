"use client"

import { Switch, Key } from "@/components"
import { useBrowserStorage } from "@/utils"
import { twMerge } from "tailwind-merge"

export const dynamic = "force-dynamic"

export default function Home() {
  const [theme, setTheme] = useBrowserStorage<themeType>("theme", 1)

  const formatNumber = (val: number = 0): string => {
    if (!val || typeof val !== "number") return "0"
    return new Intl.NumberFormat("en-US").format(val)
  }

  const keys: CalculatorKey[] = [
    {
      value: "7",
    },
    {
      value: "8",
    },
    {
      value: "9",
    },
    {
      value: "del",
    },

    {
      value: "4",
    },
    {
      value: "5",
    },
    {
      value: "6",
    },
    {
      value: "+",
    },

    {
      value: "1",
    },
    {
      value: "2",
    },
    {
      value: "3",
    },
    {
      value: "-",
    },

    {
      value: ".",
    },
    {
      value: "0",
    },
    {
      value: "/",
    },
    {
      value: "x",
    },
    {
      value: "reset",
    },
    {
      value: "=",
    },
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
            <Key theme={theme} {...key} key={key.value}/>
          ))}
        </div>
      </div>
    </main>
  )
}
