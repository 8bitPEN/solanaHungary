import { motion } from "framer-motion";

function Hero() {
  const arrowVariants = {
    hover: { x: 10 }, // Moves the arrow 10px to the right
  };
  return (
    <>
      <section
        className="
        min-h-[100lvh] 
        bg-gradient-to-b from-[#89212A] to-[#253528] 
        relative 
        flex justify-center
        items-center
        text-white "
      >
        <div
          className="flex flex-row gap-10 justify-center items-center
        relative z-10"
        >
          <div>
            <img
              src="./solana/solana_hungary/solana_hungary_logo.png"
              alt="The official Solana Hungary logo."
              className="max-h-60"
            />
          </div>
          <div className="flex flex-col mb-7">
            <h1 className="text-7xl font-bold mb-1">Solana Hungary</h1>
            <h2 className="text-2xl mb-5">
              Empowering builders through education, <br /> workshops and IRL
              events.
            </h2>
            <div className="flex gap-5">
              <motion.a
                href="https://discord.gg/solanahungary"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl uppercase rounded-full px-5 py-2 bg-gradient-to-r from-[#89212A] to-[#253528] flex items-center"
                whileHover="hover"
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
        </div>
        {/* <div className="hero-parliament"></div> */}
      </section>
    </>
  );
}
export default Hero;
