"use client"

import React, { useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import { SingleTodo } from '@/components'
import { getTodos } from '@/lib'
import { useTodos } from '@/utils/hooks'

type Props = {}

const initialTodos = [
  {
    name: "name 1",
    completed: true,
    id: "1",
  },
  {
    name: "name 2",
    completed: false,
    id: "2",
  },
  {
    name: "name 3",
    completed: false,
    id: "3",
  },
  {
    name: "name 4",
    completed: false,
    id: "4",
  },
  {
    name: "name 5",
    completed: false,
    id: "5",
  },
]


export const TodoList = (props: Props) => {

  const {todos, setTodos} = useTodos()

  // useEffect(() => {
  //   setTodos(initialTodos)
  // }, [])

    useEffect(() => {
      const asyncFetch = async () => {
        const newTodos: Todo[] = await getTodos()
        setTodos(newTodos)
      }
      asyncFetch()
    }, [])
  
  if(todos && todos?.length <= 0) return <></>

  return (
    <div className={twMerge("min-h-[4rem] bg-dark_v_desaturate_blue rounded-md overflow-hidden text-dark_grayish_blue")}>
      {todos?.map(todo => <SingleTodo key={todo.id} todo={todo} />)}
    </div>
  )
}
