import Image from "next/image"
import firstImagehq from "public/skills/skills-1-light-hq.webp"
import secondImagehq from "public/skills/skills-2-light-hq.webp"

function Skills() {
  return (
    <div className="bg-brown px-8 pb-64 text-aboutTextColor">
      <section className="container flex border-aboutBorderColor px-0 shadow md:border-2">
        <div className="mt-9 hidden w-full md:block">
          <Image src={firstImagehq} height={550} alt="bunch of leaves" />
        </div>
        <div className="mx-8 flex min-w-[500px] flex-1 flex-col justify-center space-y-8 text-lg">
          <h2 className="font-serif text-3xl font-bold">Skills & Expertise</h2>
          <p>
            {`
          In the ever-evolving forest of web development, I thrive as an adaptable engineer, crafting seamless digital experiences with nature's finesse.
          My expertise blossoms across a wide spectrum of technologies, and my curiosity propels me towards the uncharted realms of knowledge.
          With each new endeavor, I cultivate my skills and embrace the beauty of continuous growth.`}
          </p>
          <p>
            {`Below you will find a list of my favorite tools and technologies, but I'm always eager to learn new things and expand my skillset.`}
          </p>
        </div>
        <div className="-mt-9 hidden w-full md:block">
          <Image src={secondImagehq} className="w-full" alt="bunch of leaves" />
        </div>
      </section>
    </div>
  )
}

export default Skills
