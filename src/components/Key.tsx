'use client'
import React, { Dispatch, SetStateAction } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  theme: themeType
  handleKeyPress: (key: string) => void
}

export function Key({ theme, value, handleKeyPress }: Props & CalculatorKey) {


  return (
    <span
      className={twMerge(
        "bg-theme1_key_toggle_next cursor-pointer active:translate-y-1 flex justify-center items-center text-theme1_text_dark text-3xl font-bold uppercase border-b-8 border-theme1_key_toggle_next_shadow rounded-xl",
        theme === 2 && "text-theme2_text_dark bg-theme2_key_toggle_next border-theme1_key_toggle_next_shadow",
        theme === 3 && "text-theme3_text_dark bg-theme3_key_toggle_next border-theme3_key_toggle_next_shadow",
        value === "x" && "lowercase",
        value === "del" && "bg-theme1_key_main border-theme1_key_shadow text-theme1_text_white",
        value === "reset" && "bg-theme1_key_main border-theme1_key_shadow text-theme1_text_white",
        (value === "del" || value === "reset") && theme === 2 && "bg-theme2_key_main border-theme2_key_shadow",
        (value === "del" || value === "reset") && theme === 3 && "bg-theme3_key_main border-theme3_key_shadow",
        (value === "=" || value === "reset") && "col-span-2",
        value === "=" && "bg-theme1_key_toggle border-theme1_key_toggle_shadow text-theme1_text_white",
        value === "=" && theme === 2 && "bg-theme2_key_toggle border-theme2_key_toggle_shadow",
        value === "=" && theme === 3 && "bg-theme3_key_toggle border-theme3_key_toggle_shadow",
      )}
      onClick={() => handleKeyPress(value)}
    >
      {value}
    </span>
  )
}
