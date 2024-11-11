import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Hero() {
  const arrowVariants = {
    hover: { x: 10 }, // Moves the arrow 10px to the right
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <section
        className="
        min-h-[100lvh] 
        bg-gradient-to-b from-[#89212A] to-[#253528] 
        relative 
        flex justify-center
        items-center
        text-white"
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: +20 }}
          animate={isInView ? { opacity: 1, y: 0  } : { opacity: 0, y: -20 }}
          transition={{ duration: 1 }}
          className="flex flex-row gap-10 justify-center items-center flex-wrap
        relative z-10 mx-3"

        >
          <div>
            <img
              src="./solana/solana_hungary/solana_hungary_logo.png"
              alt="The official Solana Hungary logo."
              className=" max-h-32 lg:max-h-60"
            />
          </div>
          <div className="flex flex-col mb-7">
            <h1 className="text-5xl lg:text-7xl font-bold mb-1">Solana Hungary</h1>
            <h2 className="text-2xl mb-5">
              Empowering builders through education, <br /> workshops and IRL
              events.
            </h2>
            <div className="flex gap-5 flex-wrap">
              <motion.a
                href="https://discord.gg/solanahungary"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg xl:text-xl uppercase rounded-full px-5 py-2 bg-gradient-to-r from-[#89212A] to-[#253528] flex items-center"
                whileHover="hover"
                whileTap="hover"
              >
                Join The Community
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
              <motion.a
                href="#aboutUs"
                className="text-xl uppercase rounded-full px-5 py-2 bg-white text-black flex items-center"
                whileHover="hover"
                whileTap="hover"
              >
                Learn More
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
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
export default Hero;
