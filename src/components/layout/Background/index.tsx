"use client"

import {
  getWindowHeight,
  randomCoordinate,
  randomRadialGradient,
} from "@/utils"
import { useEffect } from "react"
import {
  FIRST_QUADRANT,
  FOURTH_QUADRANT,
  SECOND_QUADRANT,
  THIRD_QUADRANT,
} from "../../../../constants"

import { motion, useScroll, useTransform } from "motion/react"

const Background = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, getWindowHeight()], [0, 1])

  useEffect(() => {
    document?.body.style.setProperty(
      "--first-quadrant",
      randomCoordinate(FIRST_QUADRANT)
    )
    document?.body.style.setProperty(
      "--second-quadrant",
      randomCoordinate(SECOND_QUADRANT)
    )
    document?.body.style.setProperty(
      "--third-quadrant",
      randomCoordinate(THIRD_QUADRANT)
    )
    document?.body.style.setProperty(
      "--fourth-quadrant",
      randomCoordinate(FOURTH_QUADRANT)
    )
  }, [])

  return (
    <>
      <div
        className={`fixed -z-50 w-screen h-screen animate-bg-gradient bg-zoom`}
        style={{
          backgroundImage: randomRadialGradient(),
        }}
      >
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 dark:bg-dot-white/[0.15] bg-dot-black/[0.2] [mask-image:radial-gradient(circle,black_2%,transparent_98%)]"
        />
      </div>
      <div className="fixed inset-0 pointer-events-none flex-0 z-50">
        <div className="bg-[url('/grains.png')] w-full h-full bg-[length:109px] opacity-[0.06]" />
      </div>
    </>
  )
}

export default Background
