import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import IntroCard from "./IntroCard";

function WhoAreWe() {
  const arrowVariants = {
    hover: { x: 10 }, // Moves the arrow 10px to the right
  };

  // Animation variants for shared animation
  const elementVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });

  return (
    <>
      <section
        id="aboutUs"
        className="
        min-h-[90lvh] 
        bg-gradient-to-b to-[#89212A] from-[#253528] 
        relative 
        flex flex-col
        justify-center items-center
        text-white 
        text-center
        p-2"
      >
        {/* Ref on h1 to trigger the animation */}
        <motion.h1
          ref={ref}
          className="text-5xl lg:text-7xl mb-2"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={elementVariants}
          transition={{ duration: 1 }}
        >
          Who are We?
        </motion.h1>

        <motion.p
          className="text-md lg:text-xl mb-2 max-w-[50ch]"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={elementVariants}
          transition={{ duration: 1 }}
        >
          Solana Hungary is a community-driven initiative focused on empowering
          builders, developers, and creatives within the Solana ecosystem. Our
          mission is to bring together passionate individuals to create
          innovative projects, host educational events, and support the growth
          of the decentralized future in Hungary.
        </motion.p>

        <motion.a
          href="https://discord.gg/solanahungary"
          target="_blank"
          rel="noopener noreferrer"
          className="text-md uppercase rounded-full px-5 py-1 bg-gradient-to-r from-[#89212A] to-[#253528] flex items-center"
          whileHover="hover"
          whileTap="hover"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={elementVariants}
          transition={{ duration: 1 }}
        >
          Join us
          <motion.span
            className="pl-2"
            variants={arrowVariants}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
          >
            &rarr;
          </motion.span>
        </motion.a>
        <div className="grid md:grid-cols-2 justify-center items-center align-middle gap-20 mt-20">
          <IntroCard
            img="./solana/solana_hungary/us/1.png"
            imgAlt=""
            title="Community"
            description="Join a vibrant network of enthusiasts and builders united by their passion for Web3 and the Solana ecosystem. Connect, collaborate, and grow together."
          />
          <IntroCard
            img="./solana/solana_hungary/us/2.png"
            imgAlt=""
            title="Creativity"
            description="Empowering innovators to turn ideas into impactful projects. We provide the tools, resources, and support to bring your vision to life."
          />
          <IntroCard
            img="./solana/solana_hungary/us/3.png"
            imgAlt=""
            title="Education"
            description="Learn and grow with us through workshops, events, and knowledge-sharing sessions. Dive into the world of decentralized technologies with hands-on guidance."
          />
          <IntroCard
            img="./solana/solana_hungary/us/4.png"
            imgAlt=""
            title="Research"
            description="Explore the latest advancements in blockchain and contribute to groundbreaking discoveries. Our focus is on pushing the boundaries of what’s possible."
          />
        </div>
      </section>
    </>
  );
}

export default WhoAreWe;
