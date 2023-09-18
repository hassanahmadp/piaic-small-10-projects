"use client"

import React, { createContext, useContext } from "react"
import { useStorage } from "@/utils/hooks"

type TodoContextValue = {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoContext = createContext<TodoContextValue | undefined>(undefined)

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useStorage<Todo[]>("todos", [])

  const todoContextValue: TodoContextValue = { todos, setTodos }

  return <TodoContext.Provider value={todoContextValue}>{children}</TodoContext.Provider>
}

export const useTodos = () => {
  const context = useContext(TodoContext)

  if (context === undefined) {
    throw new Error("useTodos must be used within a TodoProvider")
  }

  return context
}
