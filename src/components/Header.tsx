import React from "react"
import { Switch } from "@/components"

type Props = {
}

export const Header = ({}: Props) => {
  return (
    <div className="flex justify-between">
      <h1 className="text-dark_l_grayish_blue_hover uppercase font-bold text-3xl tracking-[1rem]">Todo</h1>
      <Switch/>
    </div>
  )
}
