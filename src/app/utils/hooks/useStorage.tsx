"use client"

import React, { useEffect, useState } from "react"

export function useStorage<T>(
  key: string,
  value: T,
  storageType: "local" | "session" = "local",
) {
  const [state, setState] = useState<T | null>(null)

  useEffect(() => {
    const storageItem =
      storageType === "local" ? localStorage.getItem(key) : sessionStorage.getItem(key)
    if (!storageItem) {
      setState(value)
    } else setState(JSON.parse(storageItem) as T)
  }, [])

  useEffect(() => {
    if (storageType === "local") {
      localStorage.setItem(key, JSON.stringify(state))
    } else {
      sessionStorage.setItem(key, JSON.stringify(state))
    }
  }, [state])

  return [state, setState] as [T, React.Dispatch<React.SetStateAction<T>>]
}
