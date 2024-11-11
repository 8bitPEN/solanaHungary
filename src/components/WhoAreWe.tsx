import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
      </section>
    </>
  );
}

export default WhoAreWe;
