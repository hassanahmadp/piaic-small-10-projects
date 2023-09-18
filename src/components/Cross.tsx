import Image from "next/image"
import React from "react"

type Props = {
  showCross?: boolean
}

export const Cross = ({}: Props) => {
  return (
    <div className="flex-[0_1_3.5rem] flex px-2 h-16 aspect-square justify-center items-center">
      <Image
        src="/images/icon-cross.svg"
        className="h-6 w-6 customCross"
        alt="cross"
        height={50}
        width={50}
      />
    </div>
  )
}
