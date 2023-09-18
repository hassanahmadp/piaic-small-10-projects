"use client"

import Image from "next/image"
import { useTheme } from "@/utils/hooks"

type Props = {
}

export const Switch = ({}: Props) => {
  const {dark, setDark} = useTheme()
  return (
    <div className="flex justify-center items-center" onClick={() => setDark(prev => !prev)}>
        <Image className="h-8 w-8 pointer-events-none" src={`${dark ? '/images/icon-sun.svg': '/images/icon-moon.svg'}`} alt="sun" height={100} width={100} />
    </div>
  )
}
