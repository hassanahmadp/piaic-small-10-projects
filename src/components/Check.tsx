"use client"

import Image from "next/image"
import React from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  check: boolean
}

export const Check = ({ check }: Props) => {
  return (
    <div className="flex-[0_1_3.5rem] h-16 aspect-square flex px-2 justify-center items-center">
      <div
        className={twMerge(
          "rounded-full flex justify-center items-center h-6 aspect-square bg-gradient-to-br",
          check && "from-check_background_from to-check_background_to",
          !check && "border",
        )}
      >
        {check && (
          <Image
            src="/images/icon-check.svg"
            className="h-3 w-3"
            alt="check"
            height={50}
            width={50}
          />
        )}
      </div>
    </div>
  )
}
