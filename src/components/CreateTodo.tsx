import { useTheme } from "@/utils/hooks"
import React, { useState } from "react"
import { twMerge } from "tailwind-merge"
import { Check } from "@/components"

type Props = {}

export function CreateTodo({}: Props) {
  const [todo, setTodo] = useState<string>("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ todo })
  }

  const { dark } = useTheme()

  return (
    <form onSubmit={handleSubmit} className="mt-11 mb-6">
      <div
        className={twMerge(
          "w-full bg-dark_v_desaturate_blue shadow-lg text-2xl pr-4 text-dark_grayish_blue rounded-md overflow-hidden h-16 flex",
        )}
      >
        <Check check={false} />
        <input
          className="flex-[1_1_auto] bg-transparent placeholder:text-dark_grayish_blue focus:outline-none"
          type="text"
          placeholder="Start Typing..."
          onChange={e => setTodo(e.target.value)}
        />
      </div>
    </form>
  )
}
