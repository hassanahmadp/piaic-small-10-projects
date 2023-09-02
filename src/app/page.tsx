"use client"

import { Switch, Key } from "@/components"
import { useBrowserStorage } from "@/utils"
import { useCallback, useEffect, useMemo, useState } from "react"
import { twMerge } from "tailwind-merge"

export const dynamic = "force-dynamic"

export default function Home() {
  const [theme, setTheme] = useBrowserStorage<themeType>("theme", 1)
  const [result, setResult] = useState<string>("")
  const [operator, setOperator] = useState<string>("")
  const [stageValue, setStageValue] = useState<string>("")

  const formatNumber = (val: number = 0): string => {
    if (!val || typeof val !== "number") return "0"
    return new Intl.NumberFormat("en-US").format(val)
  }

  const numbers: string[] = useMemo(() => ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], [])
  const operators: string[] = useMemo(() => ["+", "-", "x", "/", "="], [])
  const functions: string[] = useMemo(() => ["del", "reset"], [])

  const handleKeyPress = (key: string) => {
    if (numbers.includes(key)) {
      setStageValue(prev => prev + key)
    } else if (operators.includes(key)) {
      if (key === "=") {
        if (result === "") return
        else {
          setStageValue(prev => {
            let res = +result

            if (operator === "+") res += +stageValue
            else if (operator === "-") res -= +stageValue
            else if (operator === "x") res *= +stageValue
            else if (operator === "/") {
              res = res / +stageValue
            } else if (operator === "") {
              res = +stageValue
            }

            return res.toString()
          })
          setResult("")
          setOperator("")
          return
        }
      }
      setResult(prev => {
        let res = +prev
        if (operator === "+") res += +stageValue
        else if (operator === "-") res -= +stageValue
        else if (operator === "x") res *= +stageValue
        else if (operator === "/") {
          res = res / +stageValue
        } else if (operator === "") {
          res = +stageValue
        }

        return res.toString()
      })
      setOperator(key)
      setStageValue("0")
    } else if (functions.includes(key)) {
      if (key === "del") {
        setStageValue((prev: string) => {
          let value = prev.split("")
          value.pop()
          return value.join("")
        })
      } else if (key === "reset") {
        setStageValue("")
        setOperator("")
        setResult("0")
      }
    }
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

  const screenTop = formatNumber(+result) + operator

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
          <h1 className="text-4xl font-semibold">calc</h1>
          <Switch theme={theme} setTheme={setTheme} />
        </div>
        <div
          className={twMerge(
            "w-full p-5 bg-theme1_bg_screen rounded-lg",
            theme === 2 && "bg-theme2_bg_screen",
            theme === 3 && "bg-theme3_bg_keypad_screen",
          )}
        >
          <h3 className="text-right text-lg font-bold opacity-60">{screenTop}</h3>
          <h3 className="text-right text-6xl font-bold overflow-ellipsis overflow-hidden">
            {formatNumber(+stageValue)}
          </h3>
        </div>
        <div
          className={twMerge(
            "w-full py-7 px-5 grid grid-cols-4 grid-rows-[repeat(5,4rem)] gap-4 sm:gap-6 bg-theme1_bg_keypad rounded-lg ",
            theme === 2 && "bg-theme2_bg_keypad",
            theme === 3 && "bg-theme3_bg_keypad_screen",
          )}
        >
          {keys.map(key => (
            <Key theme={theme} value={key} handleKeyPress={handleKeyPress} key={key} />
          ))}
        </div>
      </div>
    </main>
  )
}
