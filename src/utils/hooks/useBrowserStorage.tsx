"use client"

import React, { useEffect, useState } from "react"


export function useBrowserStorage<T>(
  key: string,
  value: T,
  storageType: "local" | "session" = "local",
) {

  const [state, setState] = useState<T>(() => {
    if(typeof window !== "undefined") {
      const storageItem =  storageType === "local" ? localStorage.getItem(key) : sessionStorage.getItem(key)
      if (!storageItem) return value
      return JSON.parse(storageItem)
    } else return undefined
  })

  useEffect(() => {
    if (typeof window === "undefined") return
    if (storageType === "local") {
      localStorage.setItem(key, JSON.stringify(state))
    } else {
      sessionStorage.setItem(key, JSON.stringify(state))
    }
  }, [state])

  return [state, setState] as [T, React.Dispatch<React.SetStateAction<T>>]
}
