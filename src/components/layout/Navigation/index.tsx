"use client"

import SpotlightLeft from "@/components/ui/SpotlightLeft"
import SpotlightRight from "@/components/ui/SpotlightRight"
import { FC } from "react"

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react"
import Header from "./Header"
import { getWindowHeight } from "@/utils"

const Navigation: FC = () => {
  const { scrollY } = useScroll()
  const blur = useTransform(
    scrollY,
    [getWindowHeight() - 100, getWindowHeight() + 101],
    [0, 20]
  )

  const backdropFilter = useMotionTemplate`blur(${blur}px)`

  return (
    <>
      <div className="fixed top-0 w-full z-40">
        <SpotlightLeft className="absolute left-0 top-0" />
        <SpotlightRight className="absolute right-0 top-0" />
        <motion.div
          style={{ backdropFilter }}
          className="h-14 w-full bg-transparent"
        >
          <Header />
        </motion.div>
      </div>
      <div className="h-14" />
    </>
  )
}

export default Navigation
