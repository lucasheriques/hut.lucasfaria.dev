import Image from "next/image"
import firstImagehq from "public/skills/skills-1-light-hq.webp"
import secondImagehq from "public/skills/skills-2-light-hq.webp"
import wave from "public/skills/wave.svg"

import SkillsList from "./skills-list"

function Skills() {
  return (
    <div className="relative bg-brown text-aboutTextColor">
      <section className="container flex border-aboutBorderColor">
        <div className="hidden flex-1 select-none lg:block">
          <Image src={firstImagehq} alt="bunch of leaves" />
        </div>
        <div className="flex flex-1 flex-col justify-center space-y-8 text-justify text-lg md:mx-8 lg:text-xl">
          <h2 className="font-serif text-3xl font-bold">Skills & Expertise</h2>
          <p>
            {`In the ever-evolving forest of web development, I thrive as an adaptable engineer, crafting seamless digital experiences with nature's finesse.
          My expertise blossoms across a wide spectrum of technologies, and my curiosity propels me towards the uncharted realms of knowledge.
          With each new endeavor, I cultivate my skills and embrace the beauty of continuous growth.`}
          </p>
          <p>
            {`Below you will find a list of my favorite tools and technologies, but I'm always eager to learn new things and expand my skillset.`}
          </p>
          <SkillsList />
        </div>
        <div className="-mt-8 hidden flex-1 select-none lg:block">
          <Image src={secondImagehq} className="w-full" alt="bunch of leaves" />
        </div>
      </section>
      <div className="-mb-1 w-full select-none pt-16">
        <Image src={wave} alt="wave" className="w-full" />
      </div>
    </div>
  )
}

export default Skills
