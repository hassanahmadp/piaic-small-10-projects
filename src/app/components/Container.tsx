import React from "react"

type Props = {
  children: React.ReactNode
}

export const Container = ({ children }: Props) => {
  return (
    <div className="fixed min-h-screen h-full w-full top-0 left-0 py-[75px] px-4">
      <div className="w-[540px] mx-auto">{children}</div>
    </div>
  )
}
