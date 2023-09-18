import React from "react"
import { twMerge } from "tailwind-merge"
import { Check, Cross } from "@/components"

type Props = {
  todo: Todo
}

export const SingleTodo = ({ todo }: Props) => {
  return (
    <div className={twMerge("text-2xl w-full min-h-[4rem] max-w-[540px]  flex justify-between items-stretch")}>
      <Check check={todo.completed}/>
      <h3 className="flex items-center w-3/5 bg-transparent break-all focus:outline-none flex-1">
        {todo.name}
      </h3>
      <Cross />
    </div>
  )
}
