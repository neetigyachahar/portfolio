import { getWindowHeight, getWindowWidth } from "@/utils"
import { cn } from "@/utils/cn"
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react"
import { FC } from "react"

const SpotlightLeft: FC<any> = ({ className }) => {
  const { scrollY } = useScroll()
  const height = useTransform(scrollY, [0, getWindowHeight() - 100], [224, 56])
  const width = useTransform(
    scrollY,
    [0, getWindowHeight() - 100],
    [getWindowWidth() / 4, (getWindowWidth() * 2) / 3]
  )
  const rotate = useTransform(scrollY, [0, getWindowHeight() - 100], [40, 0])
  const translateY = useTransform(
    scrollY,
    [0, getWindowHeight() - 100],
    [-112, 0]
  )

  const clipPathPointTopLeftY = useTransform(
    scrollY,
    [0, getWindowHeight() - 100],
    [45, 0]
  )

  const clipPathPointBottomLeftY = useTransform(
    scrollY,
    [0, getWindowHeight() - 200],
    [55, 100]
  )

  const clipPath = useMotionTemplate`polygon(0 ${clipPathPointTopLeftY}%, 100% 0, 100% 100%, 0 ${clipPathPointBottomLeftY}%)`

  return (
    <motion.div
      style={{ translateY, width }}
      className={cn("min-w-44", className)}
    >
      <motion.div
        style={{
          rotate,
          height,
          clipPath,
        }}
        className={cn(
          "w-full opacity-[0.1] origin-[0%_50%] border-r-emerald-50",
          "[mask-image:linear-gradient(to_left,transparent_10%,black_70%)]"
        )}
      >
        <div className="h-56 w-full bg-[url(/rays-left.svg)] bg-fixed bg-left-ray-size animate-left-rays" />
      </motion.div>
    </motion.div>
  )
}

export default SpotlightLeft
