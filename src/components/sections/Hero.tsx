"use client"

import { easeIn, easeOut } from "motion"
import { motion, useScroll, useTransform } from "motion/react"
import { GrLinkedin as LinkedInIcon } from "react-icons/gr"
import { FaGithubSquare as GithubIcon } from "react-icons/fa"
import { getWindowHeight } from "@/utils"

const Hero = () => {
  const { scrollY } = useScroll()
  const opacityDetails = useTransform(
    scrollY,
    [0, getWindowHeight() / 12],
    [1, 0],
    {
      ease: easeOut,
    }
  )
  const opacityTag = useTransform(
    scrollY,
    [0, getWindowHeight() / 12, getWindowHeight() / 10 + 40],
    [0, 0, 1],
    {
      ease: easeIn,
    }
  )

  const dot = <span className="hidden md:inline">.</span>

  return (
    <div className="min-h-screen-minus-56 w-screen flex flex-col items-center gap-4 md:gap-10">
      <div className="rounded-full p-4 md:p-8 bg-transparent backdrop-blur-3xl">
        <div className="rounded-2xl border border-white/5 overflow-hidden w-40 md:w-56">
          <img src="/neetigya-chahar-dp.jpeg" width={250} height={250} />
        </div>
      </div>
      <div className="relative grid place-items-center px-2">
        <motion.div
          style={{ opacity: opacityDetails }}
          className="flex flex-col items-center gap-4 w-full md:w-1/3"
        >
          <p className="text text-xs md:text-sm text-slate-400">
            Hello 👋, I&apos;m
          </p>
          <p className="text text-3xl md:text-5xl text-white font-bold text-center">
            Neetigya Chahar
          </p>
          <p className="text text-slate-300 text-sm md:text-md text-center md:mt-4 !px-8">
            I love to create innovative digital experiences through Gen AI, web
            and mobile apps. With a deep interest for AI, IoT, and design, I
            take on challenges that demand bold, entrepreneurial thinking to
            deliver impactful results. 🚀
          </p>
        </motion.div>
        <motion.div
          style={{ opacity: opacityTag }}
          className="absolute inset-0 flex flex-col gap-4 items-center justify-center"
        >
          <p className="text text-xs md:text-sm text-slate-400">Basically, I</p>
          <p className="text text-white text-3xl md:text-5xl font-bold w-40 md:w-full text-center">
            Innovate{dot} Design{dot} Code{dot}
          </p>
        </motion.div>
      </div>
      {/* <div className="flex-1" /> */}
      <div className="flex flex-1 gap-4 justify-center items-center">
        <a
          href="https://www.linkedin.com/in/neetigyachahar/"
          target="_blank"
          className="flex justify-center items-center gap-4 px-6 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          <LinkedInIcon size={24} />
          Connect
        </a>
        <a
          href="https://github.com/neetigyachahar"
          target="_blank"
          className="flex justify-center items-center gap-4 px-6 py-3 bg-[#1E2228] text-white font-medium hover:bg-[#161B22] focus:outline-none focus:ring-2 focus:ring-[#238636] transition"
        >
          <GithubIcon size={24} />
          Explore
        </a>
      </div>
    </div>
  )
}

export default Hero
