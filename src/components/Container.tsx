import React from "react"

type Props = {
  children: React.ReactNode
}

export const Container = ({ children }: Props) => {
  return (
    <div className="min-h-screen h-full w-full relative py-[75px] px-4">
      <div className="max-w-[540px] w-full mx-auto">{children}</div>
    </div>
  )
}
