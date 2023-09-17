"use client"
import Image from "next/image"
import { useStorage } from "./utils/hooks"
import { Container, Header } from "./components"

export default function Home() {
  const [dark, setDark] = useStorage<boolean>("theme", false)

  return (
    <div className="relative">
      <Image
        src={`${dark ? "/images/bg-desktop-dark.jpg" : "/images/bg-desktop-light.jpg"}`}
        className="w-full h-[300px] object-cover"
        alt="theme bg background"
        width={1440}
        height={300}
      />
      <Container>
        <Header />
      </Container>
    </div>
  )
}
