import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import OurMission from "./OurMission";
// import IntroCard from "./IntroCard";

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
        bg-[#253528]
        min-h-[90lvh] 
        relative 
        flex flex-col
        justify-center items-center
        text-white 
        text-center
        px-20"
        // bg-gradient-to-b to-[#89212A] from-[#253528]
      >
        {/* Ref on h1 to trigger the animation */}
        <motion.h1
          className="text-5xl lg:text-7xl mb-2"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={elementVariants}
          transition={{ delay: 0.3 }}
        >
          Who are We?
        </motion.h1>

        <motion.p
          className="text-md lg:text-xl mb-2 max-w-[50ch] font-light"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={elementVariants}
          transition={{ delay: 0.6 }}
          ref={ref}
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
          transition={{ delay: 0.8 }}
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
        <OurMission />
      </section>
    </>
  );
}

export default WhoAreWe;
