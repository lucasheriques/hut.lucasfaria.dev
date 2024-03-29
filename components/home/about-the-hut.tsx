"use client"

import Image from "next/image"
import waves from "public/about/about-waves.svg"
import bottomIllustration from "public/about/bottom-illustration.webp"
import programmer from "public/about/programmer.webp"
import { Fade } from "react-awesome-reveal"

import useWindowSize from "@/hooks/use-window-size"

function AboutTheHut() {
  return (
    <div className="bg-lightBrown text-gray-900">
      <section className="container min-h-[600px]">
        <div className="flex pb-16 md:space-x-16 md:px-16 md:pb-48">
          <div className="hidden flex-1 select-none items-center md:flex">
            <Fade direction="left" triggerOnce>
              <Image src={programmer} alt="about hut" width={500} />
            </Fade>
          </div>
          <div className="flex-1 space-y-8 text-lg md:text-xl">
            <h2 className="text-center font-serif text-xl font-bold md:text-2xl lg:text-3xl">
              About The Hut
            </h2>

            <Fade triggerOnce direction="right" cascade duration={500}>
              <p>
                {`Nestled in nature's embrace, Lucas' Hut is my creative sanctuary where ideas bloom and digital masterpieces come to life.
            Surrounded by tranquility, I craft solutions that resonate with real people and their needs.`}
              </p>
              <p>
                {`Driven by the power of software engineering, I cultivate meaningful impact through thoughtful design and meticulous craftsmanship.
            My work is rooted in values of customer obsession, swift execution, exceptional experiences, and unwavering teamwork.`}
              </p>
              <p>
                {`At Lucas' Hut, I forge user interfaces that harmonize with users, spark joy, and deliver delightful experiences.
            Every pixel is a testament to my dedication, weaving engaging and memorable digital tapestries.`}
              </p>
            </Fade>
          </div>
        </div>
        <div className="flex w-full select-none justify-center">
          <Fade triggerOnce className="flex flex-1 justify-center">
            <Image
              src={bottomIllustration}
              alt="forest illustration"
              width={832}
            />
          </Fade>
        </div>
      </section>
      <div className="relative -mb-1 -mt-12 w-full select-none">
        <Image src={waves} alt="wave" className="w-full" width={832} />
      </div>
    </div>
  )
}

export default AboutTheHut
