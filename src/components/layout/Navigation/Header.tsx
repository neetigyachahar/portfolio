import { motion, useScroll, useTransform } from "motion/react"
import { circIn } from "motion"
import { getWindowHeight } from "@/utils"

const Header = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, getWindowHeight()], [0, 1], {
    ease: circIn,
  })

  return (
    <div className="grid place-items-center w-full h-full">
      <motion.h1 style={{ opacity }} className="text-slate-200 tracking-widest">
        NEETIGYA CHAHAR
      </motion.h1>
    </div>
  )
}

export default Header
