import type { Dispatch, SetStateAction } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  theme: themeType
  setTheme: Dispatch<SetStateAction<themeType>>
}

export function Switch({ theme, setTheme }: Props) {
  const handleThemeChange = () => {
    setTheme(prev => {
      switch (prev) {
        case 1:
          return 2
        case 2:
          return 3
        case 3:
          return 1
      }
    })
  }

  return (
    <div
      className="flex gap-8 items-end font-semibold"
    >
      <span className="uppercase">theme</span>
      <div className="flex flex-col items-center" onClick={handleThemeChange}>
        <div className={twMerge("flex gap-4")}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <div
          className={twMerge(
            "h-7 w-20 rounded-full relative bg-theme1_bg_keypad",
            theme === 2 && "bg-theme2_bg_keypad",
            theme === 3 && "bg-theme3_bg_keypad_screen"
          )}
        >
          <div
            className={twMerge(
              "rounded-full transition-all duration-100 absolute top-1 left-1.5 h-5 bg-theme1_key_toggle aspect-square",
              theme === 2 && "left-[30px] bg-theme2_key_toggle",
              theme === 3 && "left-14 bg-theme3_key_toggle",
            )}
          ></div>
        </div>
      </div>
    </div>
  )
}
