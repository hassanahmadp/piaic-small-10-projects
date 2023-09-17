import React from "react"
import { Switch } from "./Switch"

type Props = {}

export const Header = (props: Props) => {
  return (
    <div className="flex justify-between">
      <h1>Todo</h1>

      <Switch />
    </div>
  )
}
