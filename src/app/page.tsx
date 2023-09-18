"use client"
import Image from "next/image"
import { useStorage, useTheme } from "@/utils/hooks"
import { Container, CreateTodo, Header, TodoList } from "@/components"
import { twMerge } from "tailwind-merge"

export default function Home() {
  const {dark, setDark} = useTheme()

  return (
    <div className={twMerge('relative bg-dark_v_blue min-h-screen', !dark && 'bg-light_v_gray')}>
      <Image
        src={`${dark ? "/images/bg-desktop-dark.jpg" : "/images/bg-desktop-light.jpg"}`}
        className="w-full absolute top-0 left-0 h-[300px] object-cover"
        alt="theme bg background"
        width={1440}
        height={300}
      />
      <Container>
        <Header/>
        <CreateTodo/>
        <TodoList/>
      </Container>
    </div>
  )
}
