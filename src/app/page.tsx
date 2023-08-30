"use client"

import { Switch } from "@/components"
import { useBrowserStorage } from "@/utils"
import { twMerge } from "tailwind-merge"

export const dynamic = "force-dynamic"

export default function Home() {
  const [theme, setTheme] = useBrowserStorage<themeType>("theme", 1)

  const handleThemeChange = () => {}
  return (
    <main
      className={twMerge(
        "flex justify-center flex-col items-center min-h-screen bg-theme1_bg_main text-theme1_text_white",
        theme === 2 && "bg-theme2_bg_main text-theme2_text_dark",
        theme === 3 && "bg-theme3_bg_main text-theme3_text_dark",
      )}
    >
      <div className="w-full max-w-[580px] gap-8 flex flex-col mx-auto px-5 py-8">
        <div className="flex justify-between items-end">
          <h1
            className={twMerge(
              "text-4xl font-semibold",
              // theme === 2 && "text-theme2_text_dark",
              // theme === 3 && "text-theme3_text_dark",
            )}
          >
            calc
          </h1>
          <Switch theme={theme} setTheme={setTheme} />
        </div>
        <div className={twMerge("w-full p-5 bg-theme1_bg_screen rounded-lg")}>
          <h3 className="text-right">43</h3>
        </div>
      </div>
    </main>
  )
}
